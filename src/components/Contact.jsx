import React, { useState } from "react";
import StarBorder from "./StarBorder";

const Contact = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleEmailClick = (e) => {
    setShowMessage(true);
    // Hide message after 3 seconds
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
    // We do not prevent default so the mailto link works
  };

  return (
    <section id="contact">
      <div className="contact-block">
        <div className="eyebrow">Get in touch</div>
        {/* <h2>EMAIL ME!!!</h2> */}
        <p>
          I'd love to connect with like minded folks in tech and Data Science.
        </p>
        {showMessage && (
          <p
            style={{
              marginTop: "12px",
              padding: "8px 16px",
              background: "rgba(242,242,240,0.1)",
              borderRadius: "999px",
              display: "inline-block",
              fontSize: "0.85rem",
              color: "var(--ink)",
            }}
          >
            Opening your email client...
          </p>
        )}
        <div className="cta">
          <StarBorder
            as="a"
            href="mailto:r3basnet@uwaterloo.ca"
            onClick={handleEmailClick}
            color="#00ffef"
            speed="4s"
            thickness="2"
            backgroundColor="rgba(10,10,10,0.8)"
            textColor="#00ffef"
            borderColor="#003333"
          >
            Email me
          </StarBorder>
        </div>
        <div className="socials">
          <a href="https://linkedin.com/in/rmbasnet/">LinkedIn</a>
          <a href="https://github.com/rmbasnet">GitHub</a>
          <a href="#top">Back to top</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
