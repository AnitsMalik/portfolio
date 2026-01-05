import React from "react";
import Card from "react-bootstrap/Card";
import Slider from "react-slick";
//import mcit_1 from "../mockups/mcit/mcit_1.jpg";



function importAll(r) {
  return r.keys().map(r);
}
function Annexure() {
  const mcitMockups = importAll(
  require.context("../public/mockups/mcit", false, /\.(png|jpe?g|svg|webp)$/)
);

const pyramid = importAll(
  require.context("../public/mockups/pyramid", false, /\.(png|jpe?g|svg|webp)$/)
);

const Acyutah = importAll(
  require.context("../public/mockups/acyutah", false, /\.(png|jpe?g|svg|webp)$/)
);

const icmrMockups = importAll(
  require.context("../public/mockups/icmr", false, /\.(png|jpe?g|svg|webp)$/)
);
  const [activeProject, setActiveProject] = React.useState(null);
  const [lightboxImage, setLightboxImage] = React.useState(null);
  
  // Custom arrow buttons
  const NextArrow = ({ onClick }) => (
    <div className="custom-arrow next" onClick={onClick}>
      ▶
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div className="custom-arrow prev" onClick={onClick}>
      ◀
    </div>
  );

  ; // Fix missing semicolon

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const projects = [
    {
      id: 1,
      title: "ICMR–NICPR",
      company: "Ministry of Health and Family Welfare, Government of India",
      duration: "Feb 2021 – Present",
      desc: "Manage and maintain all organizational websites, portals, domains, and hosting environments.",
      tech: ["Python Flask", "WordPress", "React", "Tailwind"],
      role: ["IT Consultant", "Built Patient Management", "Improved UI architecture"],
      mockups: icmrMockups,
      link: "https://nicpr.org/"
    },
    
    {
      id: 2,
      title: "Pyramid It Consulting Pvt. Ltd.",
      company: "Pyramid it consulting, Celsior Technologies",
      duration: "2020 – 2021",
      desc: "PyramidCore 2.0, iRecruite, Customer Portal, ",
      tech: ["Angular", "Bootstrap", "HTML", "CSS"],
      role: ["Senior Software Engineer", "UX/UI Designer", "Front-end Developer"],
      mockups: pyramid,
      link: "https://pyramidci.com/",
    },
    {
      id: 3, 
      title: "Acyutah",
      company: "Acyutah Pvt. Ltd.",
      duration: "2019 – 2020",
      desc: "Enterprise ECM solution mapping using DMS, BPM, Capture and Cloud workflows for multiple ministries.",
      tech: ["WordPress", "Market Materials", "Angular", "HTML"],
      role: ["Senior Software Engineer", "UX/UI Designer", "Front-end Developer"],
      mockups: Acyutah,
      link: "/login",
    },
    {
      id: 4,
      title: "MCIT Ethiopia",
      company: "Ministry of Communication & IT, Ethiopia",
      duration: "2018 – 2019",
      desc: "Enterprise ECM solution mapping using DMS, BPM, Capture and Cloud workflows for multiple ministries.",
      tech: ["Angular", "ECM", "BPM", "Cloud"],
      role: ["Designed UI workflows", "Built dashboard modules", "Improved UX architecture"],     
      desc: "Document management platform for banking, telecom, healthcare with automated workflows and secure modules.",
      mockups: mcitMockups,
      link: "/login",
    },
    {
      id: 5,
      title: "MCIT Ethiopia",
      company: "Ministry of Communication & IT, Ethiopia",
      duration: "2018 – 2019",
      desc: "Enterprise ECM solution mapping using DMS, BPM, Capture and Cloud workflows for multiple ministries.",
      tech: ["Angular", "ECM", "BPM", "Cloud"],
      role: ["Designed UI workflows", "Built dashboard modules", "Improved UX architecture"],      
      desc: "UI/UX development for enterprise ICT platform, improving interaction flows and usability for global teams.",
      link: "/login",
    },
    {
      id: 6,
      title: "MCIT Ethiopia",
      company: "Ministry of Communication & IT, Ethiopia",
      duration: "2018 – 2019",
      desc: "Enterprise ECM solution mapping using DMS, BPM, Capture and Cloud workflows for multiple ministries.",
      tech: ["Angular", "ECM", "BPM", "Cloud"],
      role: ["Designed UI workflows", "Built dashboard modules", "Improved UX architecture"],      
      desc: "Enterprise login and workflow system for employee & associate access to internal tools and resources.",
      link: "/login",
    },
    {
      id: 7,
      title: "MCIT Ethiopia",
      company: "Ministry of Communication & IT, Ethiopia",
      duration: "2018 – 2019",
      desc: "Enterprise ECM solution mapping using DMS, BPM, Capture and Cloud workflows for multiple ministries.",
      tech: ["Angular", "ECM", "BPM", "Cloud"],
      role: ["Designed UI workflows", "Built dashboard modules", "Improved UX architecture"],      
      desc: "UI/UX development for global pharma product modules and digital communication dashboards.",
      link: "/login",
    },
  ];

  return (
    <div id="annexure">
      <section className="container py-5">
        <div className="text-center mb-4">
          <h1 className="display-5 fw-bold">Project Annexure</h1>
          <p className="text-muted">
            A curated selection of my major enterprise projects showcasing UI/UX design, frontend engineering, and system development.
          </p>
        </div>

        <div className="slider-container">
          <Slider {...settings}>
            {projects.map((p) => (
              <Card key={p.id} className="mx-2 shadow-sm border rounded p-3" style={{ minHeight: '280px' }}>
                <Card.Body>
                  <h5 className="fw-bold">{p.title}</h5>
                  <p className="text-muted small mb-1"><strong>Company:</strong> {p.company}</p>
                  <p className="text-muted small mb-2"><strong>Duration:</strong> {p.duration}</p>
                  <p className="text-muted small">{p.desc}</p>

                  <div className="mt-2">
                    <strong className="small">Technologies:</strong>
                    <div className="d-flex flex-wrap gap-1 mt-1">
                      {p.tech?.map((t, idx) => (
                        <span key={idx} className="badge bg-light text-dark border">{t}</span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-3">
                    <strong className="small">Role Highlights:</strong>
                    <ul className="small text-muted ps-3">
                      {p.role?.map((r, idx) => (
                        <li key={idx}>{r}</li>
                      ))}
                    </ul>
                  </div>
                </Card.Body>

                <Card.Footer className="bg-white d-flex justify-content-between">
                  <button className="btn btn-sm btn-outline-primary" onClick={() => setActiveProject(p)}>Open Mockups</button>
                  {p.link && (
                    <a href={p.link} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Live Demo</a>
                  )}
                </Card.Footer>
              </Card>
            ))}
          </Slider>
        </div>
      </section>

      {/* Lightbox Modal */}
    {activeProject && (
  <div className="lightbox-overlay" onClick={() => setActiveProject(null)}>
    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>

      {/* Close Button (Top Right) */}
      <button 
        className="close-btn" 
        onClick={() => setActiveProject(null)}
      >
        ✖
      </button>

      <h5 className="mb-3 fw-bold zoomtitle">{activeProject.title} – Mockups</h5>

      <div className="lightbox-grid">
        {activeProject.mockups?.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt="mockup"
            className="lightbox-thumb"
            onClick={() => setLightboxImage(img)}
          />
        ))}
      </div>

    </div>
  </div>
)}
      {/* Fullscreen Image Zoom */}
    {lightboxImage && (
  <div className="zoom-overlay" onClick={() => setLightboxImage(null)}>
    <div className="zoom-inner" onClick={(e) => e.stopPropagation()}>

      {/* Prev Button */}
      <button
        className="zoom-nav prev"
        onClick={() => {
          const imgs = activeProject.mockups;
          const index = imgs.indexOf(lightboxImage);
          const prevIndex = index === 0 ? imgs.length - 1 : index - 1;
          setLightboxImage(imgs[prevIndex]);
        }}
      >
        ◀
      </button>

      {/* Main Image */}
      <img src={lightboxImage} alt="zoom" className="zoom-image" />

      {/* Next Button */}
      <button
        className="zoom-nav next"
        onClick={() => {
          const imgs = activeProject.mockups;
          const index = imgs.indexOf(lightboxImage);
          const nextIndex = index === imgs.length - 1 ? 0 : index + 1;
          setLightboxImage(imgs[nextIndex]);
        }}
      >
        ▶
      </button>

    </div>
  </div>
)}
    </div>
  );
}

export default Annexure;
