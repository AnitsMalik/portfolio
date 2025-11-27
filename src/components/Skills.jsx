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
                  </div>
                  <h5 className="card-title">UX/UI Design</h5>
                  <p className="card-text">
                    With expertise in UX/UI design, user research, interaction
                    design, information architecture, usability testing, and
                    visual design, I craft seamless product experiences.
                  </p>
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
                  </div>
                  <h5 className="card-title">Graphic Designer</h5>
                  <p className="card-text">
                    Creative Graphic Designer with expertise in branding, visual
                    storytelling, and user-centric design to craft compelling
                    and impactful experiences.
                  </p>
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
                  </div>
                  <h5 className="card-title">Web Development</h5>
                  <p className="card-text">
                    Skilled in web development, creating responsive,
                    user-friendly websites with clean code, CMS integration, and
                    optimal performance.
                  </p>
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
                  </div>
                  <h5 className="card-title">CMS Websites </h5>
                  <p className="card-text">
                    Experienced in designing and managing CMS websites for
                    seamless content creation and user engagement.
                  </p>
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
                  </div>
                  <h5 className="card-title">SEO & Google Analytics</h5>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
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
                  </div>
                  <h5 className="card-title">Web Securities</h5>
                  <p className="card-text">
                    Experienced in web security, implementing best practices to
                    protect websites from vulnerabilities, threats, and
                    unauthorized access.
                  </p>
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
                  </div>
                  <h5 className="card-title">Video Editing & Tutorilas</h5>
                  <p className="card-text">
                    Skilled in video editing and creating engaging tutorials
                    with smooth transitions, visual effects, and clear
                    storytelling.
                  </p>
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
                  </div>
                  <h5 className="card-title">Hosting & Domain </h5>
                  <p className="card-text">
                    Experienced in domain registration and web hosting
                    management, ensuring secure, reliable, and high-performance
                    website deployment.
                  </p>
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
