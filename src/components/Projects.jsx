import React from "react";
import MagicBento from "./MagicBento";

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="h">Projects</h2>
      <div className="wrap">
        <MagicBento
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={300}
          particleCount={12}
          glowColor="242, 242, 240"
        />
      </div>
    </section>
  );
};

export default Projects;