import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
function Portfolio() {
  return (
    <div id="portfolio" className="container">
      <section className="business_service_area">
        <CardGroup>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <div>
                <div>
                  <h2>
                    <i className="fa fa-linode"></i>UX/UI Design
                    <br /> INNOVATION
                  </h2>
                  <p>
                    Pushing boundaries to redefine what’s possible. We embrace
                    fresh ideas, cutting-edge technology.
                  </p>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <div>
                <div>
                  <h2>
                    <i className="fa fa-google-wallet" aria-hidden="true"></i>
                    CREATIVITY
                  </h2>
                  <p>
                    Turning imagination into reality. We craft unique, inspiring
                    solutions
                  </p>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <div>
                <div>
                  <h2>
                    <i className="fa fa-linode"></i>QUALITY
                  </h2>
                  <p>
                    Excellence in every detail. We are committed to delivering
                    work that meets highest standards
                  </p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </CardGroup>
      </section>
      
    </div>
  );
}

export default Portfolio;
