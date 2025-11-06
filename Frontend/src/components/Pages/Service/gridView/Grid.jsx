import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Grid.css";

// ✅ Helper to convert any hex color to RGBA safely
const hexToRgba = (hex, alpha = 0.25) => {
  let r = 0,
    g = 0,
    b = 0;
  if (hex.length === 4) {
    // #RGB
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  } else if (hex.length === 7 || hex.length === 9) {
    // #RRGGBB or #RRGGBBAA
    r = parseInt(hex.slice(1, 3), 16);
    g = parseInt(hex.slice(3, 5), 16);
    b = parseInt(hex.slice(5, 7), 16);
  }
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const cardData = [
  {
    image: "https://ahaanmedia.com/asc/Service/card1.png",
    title: "UI/UX Design",
    description:
      "UI/UX demands a deep understanding of online customer behaviour and continuous testing. With real market insights from diverse projects, we craft dynamic websites and mobile apps that deliver seamless, engaging brand interactions.",
    features: [
      "Graphic",
      "Wireframing",
      "Web app",
      "Architecture",
      "Mobile App",
    ],
    icons: [
      "https://ahaanmedia.com/asc/technology/Adobe.png",
      "https://ahaanmedia.com/asc/technology/Canva.png",
      "https://ahaanmedia.com/asc/technology/Framer.png",
      "https://ahaanmedia.com/asc/technology/Figma.png",
      "https://ahaanmedia.com/asc/technology/Photoshop.png",
      "https://ahaanmedia.com/asc/technology/Wix.png",
    ],
    color: "#ff4d4d",
  },
  {
    image: "https://ahaanmedia.com/asc/Service/card2.png",
    title: "Web Development",
    description:
      "Content is king, but your website is the castle! Build a dynamic “digital empire” for your brand with a visually captivating, SEO-friendly, feature-loaded, and mobile-responsive website – crafted by our expert team.",
    features: [
      "Frontend",
      "Backend",
      "API & Integration",
      "WordPress",
      "Shopify",
      "Mern Stack",
    ],
    icons: [
      "https://ahaanmedia.com/asc/technology/Next.png",
      "https://ahaanmedia.com/asc/technology/React.png",
      "https://ahaanmedia.com/asc/technology/Node.png",
      "https://ahaanmedia.com/asc/technology/JS.png",
      "https://ahaanmedia.com/asc/technology/Nuxt.png",
      "https://ahaanmedia.com/asc/technology/HTML.png",
      "https://ahaanmedia.com/asc/technology/CSS.png",
    ],
    color: "#9a4dff",
  },
  {
    image: "https://ahaanmedia.com/asc/Service/card3.png",
    title: "Application Development",
    description:
      "Grow and promote your business on the go with a robust, custom-tailored mobile app. Leveraging cutting-edge technology, we build iOS, Android, and hybrid solutions designed for more engagement, better scalability, and greater performance.",
    features: ["Hybrid App", "Native App", "React Native", "Kotlin", "Flutter"],
    icons: [
      "https://ahaanmedia.com/asc/technology/React.png",
      "https://ahaanmedia.com/asc/technology/Node.png",
    ],
    color: "#00b894",
  },
  {
    image: "https://ahaanmedia.com/asc/Service/card4.png",
    title: "E-commerce Development",
    description:
      "Boost sales and elevate customer satisfaction with our expert e-commerce web development solutions. We craft secure, high-performing stores with robust strategies to expand your customer base and drive measurable results that strengthen your online presence, increase brand visibility, and ensure consistent business growth worldwide.",
    features: ["Shopify", "Magento", "WooCommerce", "BigCommerce"],
    icons: [
      "https://ahaanmedia.com/asc/technology/Wordpress.png",
      "https://ahaanmedia.com/asc/technology/Shopify.png",
      "https://ahaanmedia.com/asc/technology/Webflow.png",
      "https://ahaanmedia.com/asc/technology/Magento.png",
      "https://ahaanmedia.com/asc/technology/Odoo.png",
      "https://ahaanmedia.com/asc/technology/Woo.png",
    ],
    color: "#e15594ff",
  },
  {
    image: "https://ahaanmedia.com/asc/Service/card5.png",
    title: "Social Media Management",
    description:
      "We go beyond likes, comments, and shares to craft well-researched, insight-driven, and sustainable content strategies that truly resonate with your audience. Trust us to spark meaningful conversations, foster a genuine community, and make real impact!",
    features: [
      "Instagram Marketing",
      "LinkedIn Marketing",
      "Social Media Reputation",
      "Social Media Analytics",
    ],
    icons: [
      "https://cdn-icons-png.flaticon.com/64/1384/1384063.png",
      "https://cdn-icons-png.flaticon.com/64/174/174857.png",
      "https://cdn-icons-png.flaticon.com/64/1384/1384060.png",
      "https://cdn-icons-png.flaticon.com/64/281/281764.png",
    ],
    color: "#0984e3",
  },
  {
    image: "https://ahaanmedia.com/asc/Service/card6.png",
    title: "Google Marketing",
    description:
      "Guesswork wastes money—your business deserves better! Our Google Ads experts have mastered the art of high-performing campaigns. With data-driven precision, we optimize keywords, streamline chaotic account structures, and craft compelling copy and creatives. The result? Ad campaigns that don’t just run—they dominate!",
    features: [
      "Google Ads",
      "Google Shopping",
      "Google Video Ads",
      "Google Analytics",
    ],
    icons: [
      "https://cdn-icons-png.flaticon.com/64/732/732200.png",
      "https://cdn-icons-png.flaticon.com/64/281/281764.png",
    ],
    color: "#f9a825",
  },
];

const Grid = () => {
  return (
    <Container className="my-5 service-section">
      {cardData.map((service, index) => {
        const IconList = service.icons.map((url, i) => (
          <div
            key={i}
            className="icon-bubble"
            style={{ "--icon-color": service.color }}
          >
            <img
              src={url}
              alt="tech icon"
              className="service-tech-icon"
              loading="lazy"
            />
          </div>
        ));

        const isReverse = index % 2 !== 0;

        return (
          <Row
            key={service.title}
            className={`align-items-center my-5 ${
              isReverse ? "flex-md-row-reverse" : ""
            }`}
          >
            <Col md={5}>
              <div
                className="service-image-box"
                style={{
                  "--border-color": service.color, // 🔹 dynamic theme color
                  background: `linear-gradient(135deg, ${hexToRgba(
                    service.color,
                    0.25
                  )}, #ffffff00)`,
                  padding: "30px",
                }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="img-fluid service-image"
                />
              </div>
            </Col>

            <Col md={7}>
              <div className="service-content px-3 mt-4 mt-md-0">
                <h1
                  className="service-title animated-heading"
                  style={{ "--main-color": service.color }}
                >
                  {service.title}
                </h1>

                <div className="tech-stack mb-2">
                  {service.features.map((item, i) => (
                    <span key={i}>
                      {item}
                      {i < service.features.length - 1 && (
                        <span className="dot"> • </span>
                      )}
                    </span>
                  ))}
                </div>

                <p className="service-description text-secondary">
                  {service.description}
                </p>

                <div className="button-icon-row">
                  <Button
                    variant="outline-light"
                    className="explore-btn"
                    style={{
                      borderColor: service.color,
                      color: service.color,
                    }}
                  >
                    Explore More
                  </Button>

                  <div className="service-icons">{IconList}</div>
                </div>
              </div>
            </Col>
          </Row>
        );
      })}
    </Container>
  );
};

export default Grid;
