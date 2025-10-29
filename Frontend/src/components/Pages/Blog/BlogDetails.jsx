import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './BlogDetails.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const BlogDetails = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  const formatSlug = (title) =>
    title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9\-]/g, "");

  const stripHtml = (html) => {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.textContent || div.innerText || '';
  };

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch('https://ahaansoftware.com/blog-db.json');
        const blogs = await res.json();
        const matchedBlog = blogs.find(
          (b) => formatSlug(b.title) === slug
        );
        setBlog(matchedBlog);
      } catch (err) {
        console.error('Error loading blog:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  if (loading) return <div className="text-center mt-5">Loading blog details...</div>;
  if (!blog) return <div className="text-center mt-5 text-danger">Blog not found.</div>;

  const formattedDate = blog.created_at
    ? new Date(blog.created_at).toLocaleString()
    : 'Not Available';

  const metaImage = blog.image?.startsWith('http')
    ? blog.image
    : `https://ahaansoftware.com/${blog.image}`;
  const pageUrl = `${window.location.origin}/blog/${slug}`;

  return (
    <div className="container py-5 blog-details-container">
      {/* Open Graph Meta Tags */}
      <Helmet>
        <title>{blog.title}</title>
        <meta name="description" content={stripHtml(blog.content).slice(0, 150)} />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={stripHtml(blog.content).slice(0, 150)} />
        <meta property="og:image" content={metaImage} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Banner Image */}
      {blog.image && (
        <div className="mb-4">
          <img
            src={metaImage}
            alt={blog.title}
            className="img-fluid rounded shadow-sm w-100 blog-banner-image"
            style={{ objectFit: 'cover' }}
          />
        </div>
      )}

      {/* Blog Header */}
      <div className="mb-4">
        <h1 className="fw-bold">{blog.title || 'Untitled Blog'}</h1>
        <div className="d-flex flex-wrap gap-3 text-muted small mt-2">
          <span><strong>Author:</strong> {blog.author || 'Unknown'}</span>
          <span><strong>Date:</strong> {formattedDate}</span>
        </div>
      </div>

      {/* Blog Content */}
      <div
        className="blog-details-content"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </div>
  );
};

export default BlogDetails;
