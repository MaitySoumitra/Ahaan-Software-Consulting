import React, { useRef, useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Testimonials.css";
 
const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
 
  const testimonials = [
    {
      name: "Sam Jais",
      review:
        "I had a very wonderful exprince with ahaan software they created our clothing brand website heliclothing( mens lcasual wear) Really apriciated their work",
      rating: 5,
      color: "#f7a500",
      image: "https://ahaanmedia.com/asc/testimonial/1.jpg",
    },
    {
      name: "Samuel Watson",
      review:
        "Good designing & development company. Recently, they have designed my website and currently doing marketing for Solar Installation services. Work quality is excellent and they met my expectations. Thanks to your entire team. 👍",
      rating: 5,
      color: "#4CAF50",
      image: "https://ahaanmedia.com/asc/testimonial/3.jpg",
    },
    {
      name: "Rosanna Feyerabend",
      review:
        "Disciplined job and are ethically trustworthy. The team of this company are always available for inquiries and questions, and they provide support, key insight, ideas and direction when possible. I think they have a good team, well organized and efficient with their time. Nice experience with this company that designed my business website.",
      rating: 5,
      color: "#f44336",
      image: "https://ahaanmedia.com/asc/testimonial/2.jpg",
    },
    {
      name: "Aman Jaiswal",
      review:
        "We partnered with this company for both social media branding and website development, and the results have been fantastic. Our business conversions increased by 50% thanks to their effective strategies and high-quality work. The team is knowledgeable, creative, and results-driven. Highly recommended for any business looking to grow!",
      rating: 5,
      color: "#2196F3",
      image: "https://ahaanmedia.com/asc/testimonial/7.jpg",
    },
    {
      name: "Dennis Johnson",
      review:
        "These guys did a wonderful job and very quickly, the page was so nice, I already hired them to redo the whole site. will use again and again",
      rating: 5,
      color: "#f7a500",
      image: "https://ahaanmedia.com/asc/testimonial/6.jpg",
    },
    {
      name: "Valynn Johnson",
      review:
        "All I can say is WOW. This company did exactly what they said they would do and went over the top with ideas to better my Website. THANK YOU!!",
      rating: 5,
      color: "#4CAF50",
      image: "https://ahaanmedia.com/asc/testimonial/5.jpg",
    },
    {
      name: "Dr. Kunal Dey",
      review:
        "It was a great experience to work with Vishal, he did the job beyond my expectations, highly recommend. Easy to communicate with and on time , I would actually say before time. Will hire him again!",
      rating: 5,
      color: "#f44336",
      image: "https://ahaanmedia.com/asc/testimonial/4.jpg",
    },
  ];
 
  // Set visible cards based on screen width
  useEffect(() => {
    const updateVisibleCards = () => {
      const width = window.innerWidth;
      if (width >= 1024) setVisibleCards(3);
      else if (width >= 768) setVisibleCards(2);
      else setVisibleCards(1);
    };
 
    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);
 
  // Scroll left/right
  const scroll = (dir) => {
    const maxIndex = testimonials.length - visibleCards;
    let newIndex = dir === "left" ? index - 1 : index + 1;
    if (newIndex < 0) newIndex = 0;
    if (newIndex > maxIndex) newIndex = maxIndex;
    setIndex(newIndex);
  };
 
  return (
    <div className="container section-header-tech">
      <h6 className="subtitle">
          Testimonials <span className="divider"></span>
        </h6>
        <h2 className="text-center mb-4 title">What Our Clients Say</h2>
         <p className="image-carousel-content"  >
        Driven to be future-ready, and push beyond the building blocks of
        technology, digital, and marketing, Ahaan Software Consulting proudly
        participated in The Asia Business Show 2024 in Singapore—the powerhouse
        of innovation and enterprise!
      </p>
      <div className="testimonial-slider">
        <div className="testimonial-wrapper">
          <button
            className={`testimonial-arrow-btn left ${index === 0 ? "disabled" : ""}`}
            onClick={() => scroll("left")}
          >
            <FaChevronLeft />
          </button>
 
          <div
            className="testimonial-track"
            style={{
              transform: `translateX(-${index * (100 / visibleCards)}%)`,
            }}
          >
            {testimonials.map((t, i) => (
              <div
                className="testimonial-card"
                key={i}
                style={{
                  flex:
                    visibleCards === 1
                      ? "0 0 auto"
                      : `0 0 calc(${100 / visibleCards}% - 20px)`,
                  height: "auto",
                }}
              >
                <div className="quote-icon" style={{ color: t.color }}>
                  “
                </div>
                <div className="testimonial-content">
                  <h3 style={{ color: t.color }}>{t.name}</h3>
                  <p className="review">{t.review}</p>
                  <div className="testimonial-stars">
                    {Array(5)
                      .fill(0)
                      .map((_, j) => (
                        <span
                          key={j}
                          style={{ color: j < t.rating ? t.color : "#ccc" }}
                        >
                          ★
                        </span>
                      ))}
                  </div>
                </div>
                <div
                  className="user-icon"
                  style={{ border: `6px solid ${t.color}` }}
                >
                  <img src={t.image} alt={t.name} />
                </div>
              </div>
            ))}
          </div>
 
          <button
            className={`testimonial-arrow-btn right ${
              index >= testimonials.length - visibleCards ? "disabled" : ""
            }`}
            onClick={() => scroll("right")}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};
 
export default Testimonials;
 
 