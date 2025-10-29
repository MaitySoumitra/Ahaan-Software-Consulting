import React, { useState, useEffect } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import './Testimonials.css'
const TestimonialCarousel = () => {
    const testimonials = [
        {
          id: 1,
          quote: "I had a very wonderful exprince with ahaan software they created our clothing brand website heliclothing( mens lcasual wear) Really apriciated their work",
          name: "Sam Jais",
          image: "https://ahaanmedia.com/asc/testimonial/1.jpg", 
        },
        {
          id: 2,
          quote: "Good designing & development company. Recently, they have designed my website and currently doing marketing for Solar Installation services. Work quality is excellent and they met my expectations. Thanks to your entire team. 👍",
          name: "Samuel Watson",
          image: "https://ahaanmedia.com/asc/testimonial/3.jpg", 
        },      
        {
          id: 3,
          quote: "Disciplined job and are ethically trustworthy. The team of this company are always available for inquiries and questions, and they provide support, key insight, ideas and direction when possible. I think they have a good team, well organized and efficient with their time. Nice experience with this company that designed my business website.",
          name: "Rosanna Feyerabend",
          image: "https://ahaanmedia.com/asc/testimonial/2.jpg", 
        },
        {
          id: 4,
          quote: "We partnered with this company for both social media branding and website development, and the results have been fantastic. Our business conversions increased by 50% thanks to their effective strategies and high-quality work. The team is knowledgeable, creative, and results-driven. Highly recommended for any business looking to grow!",
          name: "Aman Jaiswal",
          image: "https://ahaanmedia.com/asc/testimonial/7.jpg", 
        },
        {
          id: 5,
          quote: "These guys did a wonderful job and very quickly, the page was so nice, I already hired them to redo the whole site. will use again and again",
          name: "Dennis Johnson",
          image: "https://ahaanmedia.com/asc/testimonial/6.jpg", 
        },
        {
          id: 6,
          quote: "All I can say is WOW. This company did exactly what they said they would do and went over the top with ideas to better my Website. THANK YOU!!",
          name: "Valynn Johnson",
          image: "https://ahaanmedia.com/asc/testimonial/5.jpg", 
        },
        {
          id: 6,
          quote: "It was a great experience to work with Vishal, he did the job beyond my expectations, highly recommend. Easy to communicate with and on time , I would actually say before time. Will hire him again!",
          name: "Dr. Kunal Dey",
          image: "https://ahaanmedia.com/asc/testimonial/4.jpg", 
        },
      ];

  const [currentIndex, setCurrentIndex] = useState(0);


  

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, 5000); // 5000ms = 5 seconds

  return () => clearInterval(interval); // cleanup on unmount
}, [testimonials.length]);


  return (
    <div className="testimonial-section py-5" style={{ backgroundColor: "#f9f9f9" }}>
      <div className="container">
        <h2 className="text-center mb-4" style={{ fontWeight: "bold",color:"#C5872B" }}>What Our Clients Say</h2>
        <div className="carousel">
          <div className="testimonial-card">
            <div className="d-flex justify-content-center mb-3" style={{ position: "relative", top: "-40px" }}>
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="rounded-circle"
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",
                  border: "4px solid #ffffff",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                }}
              />
            </div>
            <h5 className="mb-1" style={{ fontWeight: "bold" }}>{testimonials[currentIndex].name}</h5>
            <p className="text-muted">{testimonials[currentIndex].designation}</p>
            <div className="testi-text"><p className="text-secondary fst-italic ">"{testimonials[currentIndex].quote}"</p></div>
            
          </div>
          <div className="carousel-navigation">
            <button onClick={prevTestimonial} className="prev-button"><FaAngleLeft /></button>
            <button onClick={nextTestimonial} className="next-button"><FaAngleRight /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
