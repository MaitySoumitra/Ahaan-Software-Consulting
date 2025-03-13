import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Team.css";
import { FaLinkedin } from "react-icons/fa";

const teamMembers = [
  {
    name: "Vishal Jaiswal",
    position: "CEO & Founder",
    image: "/Images/Vishal.png",
  },
  {
    name: "Sukanta Das",
    position: "Sales Manager",
    image: "/Images/Sukanta.png",
  },
  {
    name: "Soumya Bhattach...",
    position: "Project Manager",
    image: "/Images/Soumya.png",
  },
  {
    name: "Debadipta Naskar",
    position: "Human Resource",
    image: "/Images/Debadipta.png",
  },
  {
    name: "Aditi Dwivedi",
    position: "Business Associate",
    image: "/Images/Aditi.png",
  },
  {
    name: "Ujjawal Shaw",
    position: "Business Developer",
    image: "/Images/Ujjwal.png",
  },
  {
    name: "Surajit Bera",
    position: "UI/UX Designer",
    image: "/Images/Surajit.png",
  },
  {
    name: "Rimpa Dutta",
    position: "UI/UX Designer",
    image: "/Images/Rimpa.png",
  },
  {
    name: "Subhadeep Dey",
    position: "Web Developer",
    image: "/Images/Subhadeep.png",
  },
  {
    name: "Soumi Kanungo",
    position: "Web Developer",
    image: "/Images/Soumi.png",
  },
  {
    name: "Soumitra Maity",
    position: "Backend Developer",
    image: "/Images/Soumitra.png",
  },
  {
    name: "Sugam Karmakar",
    position: " Frontend Developer",
    image: "/Images/Sugam.png",
  },
];

const MeetOurTeam = () => {
  return (
    <div className="container py-5">
      <h2 className="text-primary-team fw-bold">
        Meet The Talented Minds Behind The Magic!
      </h2>
      <p className="text-muted team-text">
        Let’s collaborate to turn your creative, marketing, and development
        visions into immersive experiences and lasting partnerships. With a
        win-win mindset, we treat every client as an equal ally, working
        together to turn their visions into victory!
      </p>
      <div className="row mt-4">
        {teamMembers.map((member, index) => (
          <div key={index} className="col-md-3 col-sm-6 mb-4">
            <div className="team-member text-center">
              <img
                src={member.image}
                alt={member.name}
                className="team-image"
              />
              <div className="d-flex justify-content-left align-items-left gap-5 mt-4">
                <h5 className="fw-bold mb-0">{member.name}</h5>
                <FaLinkedin className="linkedin-icon" />
              </div>
              <p className="text-muted-position">{member.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetOurTeam;
