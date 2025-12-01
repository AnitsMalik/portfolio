import React from "react";

import ux from "../img/ux.mp4";
import designer from "../img/designer.mp4";
import web_developer from "../img/web_developer.mp4";
import cms from "../img/cms.mp4";
import hosting from "../img/hosting.mp4";
import seo from "../img/seo.mp4";
import web_security from "../img/web_security.mp4";
import video_editing from "../img/video_editing.mp4";
function Skills() {
  return (
    <div id="skills" className="container">
      <section className="mt-5">
        <div>
          <div className="jumbotron mb-3 text-center">
            <h1 className="display-4">Expertise Area</h1>
            <p className="text-center">
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
          </div>
          <div className="row mt-5">
            <div className="col">
              <div className="card cursor-box zoom-in">
                <div className="card-body">
                  <div className="cardicon">
                    <video
                      autoPlay
                      loop
                      muted
                      src={ux}
                      type="ux/mp4"
                      className="ux"
                    ></video>
                     <h5 className="card-title mt-4 ps-2">UX/UI Design skills</h5>
                  </div>                 
                  <p className="card-text">
                   I design clean, intuitive, and user-focused digital interfaces that prioritize usability, clarity, and visual consistency. My work blends creative UI with structured UX methodology.
                  </p>
                      <ul className="ps-1">
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#8750f7"
                      className="bi bi-arrow-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                      />
                    </svg>
                    <span className="card-text"> User-centered design</span>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#8750f7"
                      className="bi bi-arrow-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                      />
                    </svg>
                    <span className="card-text"> Visual interface creation </span>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#8750f7"
                      className="bi bi-arrow-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                      />
                    </svg>
                    <span className="card-text"> Layout & design systems</span>
                  </li> 
                      </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card cursor-box zoom-in">
                <div className="card-body">
                  <div className="cardicon">
                    <video
                      autoPlay
                      loop
                      muted
                      src={designer}
                      type="designer/mp4"
                      className="ux"
                    ></video>
                      <h5 className="card-title">Wireframing & Prototyping</h5>
                  </div>
                
                  <p className="card-text">
                   I convert ideas into structured wireframes and interactive prototypes, helping teams visualize functionality and user flows early.
                  </p>
                  <ul className="ps-1">
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#8750f7"
                      className="bi bi-arrow-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                      />
                    </svg>
                    <span className="card-text"> Low/high-fidelity wireframes</span>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#8750f7"
                      className="bi bi-arrow-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                      />
                    </svg>
                    <span className="card-text"> Interactive prototypes </span>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#8750f7"
                      className="bi bi-arrow-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                      />
                    </svg>
                    <span className="card-text"> User flow mapping</span>
                  </li> 
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card cursor-box zoom-in">
                <div className="card-body">
                  <div className="cardicon">
                    <video
                      autoPlay
                      loop
                      muted
                      src={web_developer}
                      type="web_developer/mp4"
                      className="ux"
                    ></video>
                    <h5 className="card-title">Frontend Development</h5>
                  </div>
                  
                  <p className="card-text">
                  I build responsive, scalable, and modern UI components for enterprise apps using the latest front-end technologies.
                  </p>
                         <ul className="ps-1">
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#8750f7"
                      className="bi bi-arrow-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                      />
                    </svg>
                    <span className="card-text"> React, Flask, Angular, JavaScript</span>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#8750f7"
                      className="bi bi-arrow-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                      />
                    </svg>
                    <span className="card-text"> HTML5, CSS3 </span>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#8750f7"
                      className="bi bi-arrow-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                      />
                    </svg>
                    <span className="card-text"> Bootstrap & Tailwind CSS</span>
                  </li> 
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card cursor-box zoom-in">
                <div className="card-body">
                  <div className="cardicon">
                    <video
                      autoPlay
                      loop
                      muted
                      src={cms}
                      type="cms/mp4"
                      className="ux"
                    ></video>
                      <h5 className="card-title">Backend & API Integration </h5>
                  </div>
                
                  <p className="card-text">
                    I integrate UI with backend logic using Flask and REST APIs, ensuring smooth data flow and secure application interactions.
                  </p>
                    <ul className="ps-1">
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#8750f7"
                      className="bi bi-arrow-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                      />
                    </svg>
                    <span className="card-text"> Python Flask</span>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#8750f7"
                      className="bi bi-arrow-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                      />
                    </svg>
                    <span className="card-text"> REST API handling</span>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#8750f7"
                      className="bi bi-arrow-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                      />
                    </svg>
                    <span className="card-text"> Authentication & CRUD workflows</span>
                  </li> 
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col">
              <div className="card cursor-box zoom-in">
                <div className="card-body">
                  <div className="cardicon">
                    <video
                      autoPlay
                      loop
                      muted
                      src={seo}
                      type="seo/mp4"
                      className="ux"
                    ></video>
                     <h5 className="card-title">Database Management</h5>
                  </div>
                  
                  <p className="card-text">
                    I design and manage relational databases with optimized schemas and efficient query structures for stable application performance.
                  </p>
                    <ul className="ps-1">
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#8750f7"
                      className="bi bi-arrow-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                      />
                    </svg>
                    <span className="card-text"> PostgreSQL</span>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#8750f7"
                      className="bi bi-arrow-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                      />
                    </svg>
                    <span className="card-text"> Data modeling & schema design</span>
                  </li>
                 
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card cursor-box zoom-in">
                <div className="card-body">
                  <div className="cardicon">
                    <video
                      autoPlay
                      loop
                      muted
                      src={web_security}
                      type="web_security/mp4"
                      className="ux"
                    ></video>
                     <h5 className="card-title">CMS Development</h5>
                  </div>
                 
                  <p className="card-text">
                  I customize and manage CMS platforms to build dynamic, fast, and secure websites with custom themes.
                  </p>
                    <ul className="ps-1">
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#8750f7"
                      className="bi bi-arrow-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                      />
                    </svg>
                    <span className="card-text"> WordPress & Drupal</span>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#8750f7"
                      className="bi bi-arrow-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                      />
                    </svg>
                    <span className="card-text"> Hosting & domain setup</span>
                  </li>
                 <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#8750f7"
                      className="bi bi-arrow-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                      />
                    </svg>
                    <span className="card-text"> Website maintenance & optimization</span>
                  </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card cursor-box zoom-in">
                <div className="card-body">
                  <div className="cardicon">
                    <video
                      autoPlay
                      loop
                      muted
                      src={video_editing}
                      type="video_editing/mp4"
                      className="ux"
                    ></video>
                      <h5 className="card-title">Tools & Platforms</h5>
                  </div>
                
                  <p className="card-text">
                   I use modern design, development, and productivity tools to deliver seamless, high-quality project outcomes.
                  </p>
                    <ul className="ps-1">
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#8750f7"
                      className="bi bi-arrow-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                      />
                    </svg>
                    <span className="card-text"> Figma, Adobe XD, Photoshop</span>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#8750f7"
                      className="bi bi-arrow-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                      />
                    </svg>
                    <span className="card-text"> Git, VS Code, Visual Studio</span>
                  </li>
                 <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#8750f7"
                      className="bi bi-arrow-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                      />
                    </svg>
                    <span className="card-text"> Deployment & hosting tools</span>
                  </li>
                   <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#8750f7"
                      className="bi bi-arrow-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                      />
                    </svg>
                    <span className="card-text"> CorelDraw, Captivate, Filmora</span>
                  </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card cursor-box zoom-in">
                <div className="card-body ">
                  <div className="cardicon">
                    <video
                      autoPlay
                      loop
                      muted
                      src={hosting}
                      type="hosting/mp4"
                      className="ux"
                    ></video>
                     <h5 className="card-title">Accessibility & Usability </h5>
                  </div>
                 
                  <p className="card-text">
                   I apply usability principles and WCAG guidelines to ensure inclusive, accessible, and user-friendly digital experiences.
                  </p>
                   <ul className="ps-1">
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#8750f7"
                      className="bi bi-arrow-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                      />
                    </svg>
                    <span className="card-text"> UX- Mockup, Wireframing</span>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#8750f7"
                      className="bi bi-arrow-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                      />
                    </svg>
                    <span className="card-text"> Usability testing</span>
                  </li>
                 <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#8750f7"
                      className="bi bi-arrow-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                      />
                    </svg>
                    <span className="card-text"> WCAG compliance</span>
                  </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;
