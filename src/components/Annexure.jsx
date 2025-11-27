import React from "react";
import Card from "react-bootstrap/Card";
import Slider from "react-slick";
import bg1 from "../img/bg1.jpg";
function Annexure() { 
 
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    pauseOnHover: true
    
  };
  return (
    <div id="annexure" >
      <section className="container">
       
          <div className="jumbotron mb-3 text-center">
            <h1 className="display-4">My Work Experience</h1>
            <p className="text-center">
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
          </div>
          <div className="row mt-5">
            <div className="slider-container">
            <Slider {...settings}> 
                <Card>
                  <img src={bg1} alt="bg1" className="slimg" />
                  <Card.Body>
                    <Card.Title>MCIT Ethiopia</Card.Title>
                    <Card.Text>
                    FineDocs offers ECM solutions, including DMS, BPM, Capture, and Cloud. We are mapping ECM products for five Ethiopian ministries.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="text-end">
                    <small className="text-muted font-italic">
                         <a href="/login">Preview Project</a>
                    </small>
                  </Card.Footer>
                </Card>
                <Card>
                  <img src={bg1} alt="bg1" className="slimg" />
                  <Card.Body>
                    <Card.Title>  Old Castle Material Group USA</Card.Title>
                    <Card.Text>
                    Customer Portal and Admin Portal-Oldcastle Materials is the leading vertically integrated supplier of aggregates, asphalt, ready-mix concrete, and
                    construction and paving services in the United States...
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="text-end">
                    <small className="text-muted font-italic">
                    <a href="/login">Preview Project</a>
                    </small>
                  </Card.Footer>
                </Card>
                <Card>
                  <img src={bg1} alt="bg1" className="slimg" />
                  <Card.Body>
                    <Card.Title>ICMR-NICPR</Card.Title>
                    <Card.Text>
                    ICMR-NICPR (ICMR-National Institute of Cancer Prevention and Research),
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="text-end">
                    <small className="text-muted font-italic">
                    <a href="/login">Preview Project</a>
                    </small>
                  </Card.Footer>
                </Card>
                <Card>
                  <img src={bg1} alt="bg1" className="slimg" />
                  <Card.Body>
                    <Card.Title>FineDocs</Card.Title>
                    <Card.Text>
                    FineDocs is a document management system which provides solutions to store their document for any kind of business
                    like banking, telecom, healthcare, financial industry, etc.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="text-end">
                    <small className="text-muted font-italic">
                    <a href="/login">Preview Project</a>
                    </small>
                  </Card.Footer>
                </Card>
                <Card>
                  <img src={bg1} alt="bg1" className="slimg" />
                  <Card.Body>
                    <Card.Title>Ericsson Spark USA</Card.Title>
                    <Card.Text>
                      Ericsson is one of the leading providers of Information and Communication Technology (ICT) to service providers
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="text-end">
                    <small className="text-muted font-italic">
                    <a href="/login">Preview Project</a>
                    </small>
                  </Card.Footer>
                </Card>
                <Card>
                  <img src={bg1} alt="bg1" className="slimg" />
                  <Card.Body>
                    <Card.Title>pyramidcore -Product Application</Card.Title>
                    <Card.Text>
                    PyramidCore are limited, it serves as a login portal for employees and associates, facilitating access to various internal resources and tools
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="text-end">
                    <small className="text-muted font-italic">
                    <a href="/login">Preview Project</a>
                    </small>
                  </Card.Footer>
                </Card>
                <Card>
                  <img src={bg1} alt="bg1" className="slimg" />
                  <Card.Body>
                    <Card.Title>Emcure</Card.Title>
                    <Card.Text>
                    Emcure Pharmaceuticals is driven by the purpose to develop, manufacture and market a broad range of pharmaceutical products globally
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="text-end">
                    <small className="text-muted ">
                    <a href="/login">Preview Project</a>
                    </small>
                  </Card.Footer>
                </Card>
              </Slider>
             
            </div>
          </div>
        
      </section>
    </div>
  );
}

export default Annexure;
