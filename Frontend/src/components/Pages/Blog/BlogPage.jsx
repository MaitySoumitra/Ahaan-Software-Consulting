import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Button, Dropdown } from "react-bootstrap";
import { TfiSharethis } from "react-icons/tfi";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import "./BlogPage.css";

const reactions = [
  { emoji: "👍", label: "thumbs up" },
  { emoji: "❤️", label: "love" },
];

const stripHtml = (html) => {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || div.innerText || "";
};

const trimToWords = (htmlContent, wordLimit = 20) => {
  const text = stripHtml(htmlContent);
  const words = text.split(" ");
  return words.length > wordLimit
    ? words.slice(0, wordLimit).join(" ") + "..."
    : text;
};

const formatDateTime = (isoString) => {
  try {
    const date = new Date(isoString);
    return date.toLocaleString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  } catch {
    return "Invalid Date";
  }
};

const createSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9\-]/g, "");
};

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedReactions, setSelectedReactions] = useState({});
  const [reactionCounts, setReactionCounts] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  const fetchAndUpdateBlogs = async () => {
    try {
      const res = await axios.get("https://ahaansoftware.com/blog-db.json");
      const fetchedBlogs = Array.isArray(res.data) ? res.data.reverse() : [];
      setBlogs(fetchedBlogs);

      const counts = {};
      const local = {};
      fetchedBlogs.forEach((blog) => {
        counts[blog.id] = {
          "thumbs up": blog.reactions?.["thumbs up"] || 0,
          "love": blog.reactions?.["love"] || 0,
        };

        const localReaction = localStorage.getItem(`reacted_${blog.id}`);
        if (localReaction) {
          local[blog.id] = localReaction;
        }
      });

      setReactionCounts(counts);
      setSelectedReactions(local);
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
    }
  };

  useEffect(() => {
    fetchAndUpdateBlogs();
  }, []);

  useEffect(() => {
    setCurrentPage(1); // Reset to first page on search
  }, [searchQuery]);

  const handleReaction = async (blogId, newReaction) => {
    const prevReaction = selectedReactions[blogId];

    if (prevReaction === newReaction) return;

    localStorage.setItem(`reacted_${blogId}`, newReaction);
    setSelectedReactions((prev) => ({ ...prev, [blogId]: newReaction }));

    setReactionCounts((prev) => {
      const updated = { ...prev };
      if (!updated[blogId]) {
        updated[blogId] = { "thumbs up": 0, love: 0 };
      }

      if (prevReaction && updated[blogId][prevReaction] > 0) {
        updated[blogId][prevReaction] -= 1;
      }

      updated[blogId][newReaction] = (updated[blogId][newReaction] || 0) + 1;

      return updated;
    });

    try {
      const formData = new URLSearchParams();
      formData.append("id", blogId);
      formData.append("reaction", newReaction);
      formData.append("prevReaction", prevReaction || "");

      await fetch("https://ahaansoftware.com/update-json.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData,
      });

      await fetchAndUpdateBlogs();
    } catch (err) {
      console.error("Failed to update reaction:", err);
    }
  };

  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.author?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
  const paginatedBlogs = filteredBlogs.slice(
    (currentPage - 1) * blogsPerPage,
    currentPage * blogsPerPage
  );

  return (
    <Container>
      <Row className="mb-4 p-3">
        {paginatedBlogs.map((blog) => {
          const slug = createSlug(blog.title);
          const blogUrl = `${window.location.origin}/blog/${slug}`;
          const summary = stripHtml(blog.content).slice(0, 150);
          const blogReactions = reactionCounts[blog.id] || {};

          return (
            <Col md={6} lg={4} key={blog.id} className="mb-4">
              <Card
                className="blog-card shadow-sm"
                onClick={() => window.open(`/blog/${slug}`, "_blank")}
                style={{ cursor: "pointer" }}
              >
                {blog.image && (
                  <Card.Img
                    variant="top"
                    src={
                      blog.image.startsWith("http")
                        ? blog.image
                        : `https://ahaansoftware.com/${blog.image}`
                    }
                    className="blog-image"
                    alt={blog.title}
                  />
                )}
                <Card.Body>
                  <Card.Title className="blog-page-title">{blog.title}</Card.Title>
                  <p className="blog-date">{formatDateTime(blog.created_at)}</p>

                  <Card.Text className="blog-content">
                    {trimToWords(blog.content)}
                  </Card.Text>

                  <p className="blog-author">By {blog.author || "Unknown"}</p>

                  {/* Reactions */}
                  <div
                    className="reaction-container"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {reactions.map(({ emoji, label }) => (
                      <Button
                        key={label}
                        variant={
                          selectedReactions[blog.id] === label
                            ? "warning"
                            : "outline-secondary"
                        }
                        className="reaction-btn me-1 mb-1"
                        onClick={() => handleReaction(blog.id, label)}
                      >
                        {emoji} {blogReactions[label] || 0}
                      </Button>
                    ))}
                  </div>

                  {/* Actions */}
                  <div
                    className="blog-actions d-flex justify-content-between align-items-center"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Button
                      variant="dark"
                      className="read-more-btn"
                      onClick={() => window.open(`/blog/${slug}`, "_blank")}
                    >
                      Read More
                    </Button>

                    <Dropdown className="position-relative">
                      <Dropdown.Toggle
                        variant="outline-dark"
                        bsPrefix="share-btn-icon-only no-caret"
                      >
                        <TfiSharethis />
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="animated-share-dropdown">
                        <div className="share-icons-container">
                          <button
                            className="share-icon-btn facebook"
                            onClick={() =>
                              window.open(
                                `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                                  blogUrl
                                )}`,
                                "_blank"
                              )
                            }
                          >
                            <FaFacebookF />
                          </button>
                          <button
                            className="share-icon-btn linkedin"
                            onClick={() =>
                              window.open(
                                `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                                  blogUrl
                                )}`,
                                "_blank"
                              )
                            }
                          >
                            <FaLinkedinIn />
                          </button>
                          <button
                            className="share-icon-btn whatsapp"
                            onClick={() =>
                              window.open(
                                `https://api.whatsapp.com/send?text=${encodeURIComponent(
                                  `📌 *${blog.title}*\n👤 By ${
                                    blog.author || "Unknown"
                                  }\n🕒 ${formatDateTime(
                                    blog.created_at
                                  )}\n\n${summary}...\n\n🔗 Read more: ${blogUrl}`
                                )}`,
                                "_blank"
                              )
                            }
                          >
                            <FaWhatsapp />
                          </button>
                        </div>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>

      {/* Pagination UI */}
      <div className="d-flex justify-content-center mb-4">
        <nav>
          <ul className="pagination">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <button
                className="page-link"
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              >
                Prev
              </button>
            </li>

            {Array.from({ length: totalPages }, (_, i) => (
              <li
                key={i + 1}
                className={`page-item ${currentPage === i + 1 ? "active" : ""}`}
              >
                <button className="page-link" onClick={() => setCurrentPage(i + 1)}>
                  {i + 1}
                </button>
              </li>
            ))}

            <li
              className={`page-item ${
                currentPage === totalPages ? "disabled" : ""
              }`}
            >
              <button
                className="page-link"
                onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </Container>
  );
};

export default BlogPage;
