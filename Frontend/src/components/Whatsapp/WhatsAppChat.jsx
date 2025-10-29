import React from "react";
import "./WhatsAppChat.css";

const WhatsAppChat = () => {
  const phoneNumber = "+13214210740";

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
