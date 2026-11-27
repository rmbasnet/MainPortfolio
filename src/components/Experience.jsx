import React from "react";

const Experience = () => {
  const experiences = [
    {
      role: "Machine Learning Researcher",
      org: "Algoma Computer Science",
      period: "August 2025 – June 2026",
      bullets: [
        "Teaching Assistant for Calculus, Pre-calculus, Introduction to Java I & II.",
        "Assisted the professor by leading discussions, grading assignments and quizzes, and review sessions.",
        "Monitoredand evaluating student performances and providing the best mentorship.",
      ],
    },
    {
      role: "Teaching Assistant",
      org: "Algoma University ",
      period: "Sept 2024 – April 2026",
      bullets: [
        "Defined product roadmap and prioritized features based on user feedback",
        "Coordinated between engineering, design, and marketing teams",
        "Analyzed user metrics to inform product decisions and improvements",
        "Managed agile development process using Scrum methodologies",
      ],
    },
    {
      role: "IT Service Desk Assistant",
      org: "Algoma IT Department",
      period: "April 2024 – April 2025",
      bullets: [
        "Provided first-level technical support rearding issues related to hardware, software, and network connectivity.",
        "Assisted in setting up, configuring, and maintaining IT equipment for classrooms and events.",
        "Ensured systems are up-to-date and secure with software installations, updates, and configurations.",
      ],
    },
    {
      role: "Resident Advisor",
      org: "Algoma Residence",
      period: "August 2024 – June 2026",
      bullets: [
        "Serving as a primary point of contact and support for residents, promoting a safe, inclusive, and respectful living environment for over 200 students.",
        "Providing peer mentorship and guidance to students, offering emotional support and referring residents to appropriate campus resources.",
      ],
    },
  ];

  return (
    <section id="experience">
      <div className="exp-header">
        <h2 className="h" style={{ marginBottom: 0 }}>
          Experience
        </h2>
        <a className="resume-btn" href="#" download>
          Download résumé
        </a>
      </div>
      <div className="exp-list">
        {experiences.map((exp, index) => (
          <div className="exp-item" key={index}>
            <div className="exp-top">
              <div>
                <h3>{exp.role}</h3>
                <div className="org">{exp.org}</div>
              </div>
              <div className="when">{exp.period}</div>
            </div>
            <ul>
              {exp.bullets.map((bullet, bulletIndex) => (
                <li key={bulletIndex}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
