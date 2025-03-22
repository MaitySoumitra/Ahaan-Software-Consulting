import React from "react";
import "./WhatsAppChat.css"; // Import CSS file

const WhatsAppChat = () => {
  const phoneNumber = "+918981744661"; // Replace with your WhatsApp number

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      className="whatsapp-chat-icon"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp Chat"
      />
    </a>
  );
};

export default WhatsAppChat;
