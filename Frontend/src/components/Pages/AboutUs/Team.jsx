import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "./Team.css";

const teamMembers = [
  {
    "name": "Vishal",
    "position": "CEO & Founder",
    "description": "Vishal Jaiswal is the CEO, Founder, and Managing Director of Ahaan Software Consulting. A visionary leader, he drives strategic growth, innovation, and team excellence. With a focus on delivering impactful software solutions, Vishal leads the company toward continued success in the ever-evolving technology landscape.",
    "image": "https://ahaanmedia.com/asc/teams/Vishal_J.png"
  },
  {
    "name": "Soumya",
    "position": "Project Manager",
    "description": "Soumya is a skilled Project Manager with expertise in leading and managing projects to successful completion. He excels in resource management, team coordination, and client communication. With a focus on delivering high-quality results on time, Soumya Sir ensures efficient project execution while meeting organizational objectives and client expectations.",
    "image": "https://ahaanmedia.com/asc/teams/Soumya.png"
  },

  {
    "name": "Soumi",
    "position": "Web Developer",
    "description": "Soumi is a web developer proficient in Shopify, WordPress, WooCommerce, Odoo, and Webflow. She also has expertise in React.js, HTML, CSS, Bootstrap, and JavaScript, allowing her to build dynamic, responsive websites and e-commerce platforms with seamless integration and modern user interfaces across multiple platforms.",
    "image": "https://ahaanmedia.com/asc/teams/Soumi.png"
  },
  {
    "name": "Rimpa",
    "position": "UI/UX Designer",
    "description": "Rimpa is a UI/UX designer skilled in Figma, Framer, Wix, and logo creation. She also has knowledge of HTML, CSS, Bootstrap, JavaScript, WordPress, and Webflow, enabling her to design and build visually appealing, user-friendly, and functional digital experiences across various platforms and devices.",
    "image": "https://ahaanmedia.com/asc/teams/Rimpa.png"
  },
  {
    "name": "Surajit",
    "position": "UI/UX Designer",
    "description": "Surajit is a UI/UX designer skilled in Figma, Framer, Wix, Adobe Illustrator, and Photoshop, with expertise in logo creation. He also has knowledge of HTML, CSS, and Bootstrap, allowing him to design and develop visually appealing, user-friendly interfaces that blend creativity with functionality across digital platforms.",
    "image": "https://ahaanmedia.com/asc/teams/Surajit.png"
  },
  {
    "name": "Subhadeep",
    "position": "Web Developer",
    "description": "Subhadeep is a web developer skilled in Shopify, WordPress, WooCommerce, Odoo, and Webflow. He also has expertise in HTML, CSS, Bootstrap, and JavaScript, enabling him to create responsive, user-friendly websites and e-commerce platforms with seamless functionality and customizations across various digital platforms.",
    "image": "https://ahaanmedia.com/asc/teams/Subhadeep.png"
  },
  {
    "name": "Soumitra",
    "position": "Sr. Web Developer",
    "description": "Soumitra is a backend developer skilled in Node.js, MongoDB, Express.js, and Python. He also has frontend expertise in HTML, CSS, Bootstrap, Tailwind CSS, MUI, EJS, and JavaScript, along with experience in Shopify, enabling him to create scalable, dynamic web applications and e-commerce solutions.",
    "image": "https://ahaanmedia.com/asc/teams/Soumitra.png"
  },
  {
    "name": "Sugam",
    "position": "Frontend Developer",
    "description": "Sugam is a frontend web application developer skilled in React.js, HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, MUI, and EJS. He also works with WordPress and WooCommerce, creating responsive, user-friendly websites and web apps with clean code, modern design, and seamless functionality across all devices.",
    "image": "https://ahaanmedia.com/asc/teams/Sugam.png"
  }
];
const MeetOurTeam = () => {
  const [show, setShow] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const handleShow = (member) => {
    setSelectedMember(member);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <div className="container py-5 team-carousel-section section-header-tech">
      <h6 className="subtitle">
          Teams <span className="divider"></span>
        </h6>
      <h2 className="text-center title">Meet Our Team</h2>
         <p className="image-carousel-content"  >
        Driven to be future-ready, and push beyond the building blocks of
        technology, digital, and marketing, Ahaan Software Consulting proudly
        participated in The Asia Business Show 2024 in Singapore—the powerhouse
        of innovation and enterprise!
      </p>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={5}
        slidesPerGroup={1}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: { slidesPerView: 2 },
          576: { slidesPerView: 3 },
          992: { slidesPerView: 4 },
          1200: { slidesPerView: 5 },
        }}
      >
        {teamMembers.map((member, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="team-carousel-card text-center"
              onClick={() => handleShow(member)}
            >
              <img
                src={member.image}
                alt={member.name}
                className="team-carousel-img"
              />
              <h5 className="mt-3">{member.name}</h5>
              <p className="text-muted">{member.position}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal */}
      <Modal className="about-modal" show={show} onHide={handleClose} centered>
        {selectedMember && (
          <>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body className="text-center">
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="rounded-circle mb-3"
                style={{ width: "120px", height: "120px", objectFit: "cover" }}
              />
              <Modal.Title>{selectedMember.name}</Modal.Title>
              <h5 className="fw-bold">{selectedMember.position}</h5>
              <p className="text-muted mt-3">{selectedMember.description}</p>
            </Modal.Body>
          </>
        )}
      </Modal>
    </div>
  );
};

export default MeetOurTeam;
