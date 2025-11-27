import React from "react";
import Card from "react-bootstrap/Card";
import Slider from "react-slick";
import bg1 from "../img/bg1.jpg";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import bckv from "../img/bckv.mp4";
import cl1 from "../img/cl1.jpg";
import sandeep from "../img/sandeep.jpeg";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}
function Testimonials() {
  const settings = {
    dots: false,
    // infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div id="testimonials" className="xcontainer-fluid mb-5">
      <section className="xrow">
        <div className="xrow mt-5 ">
          <video
            autoPlay
            loop
            muted
            src={bckv}
            type="bckv/mp4"
            className="bckv"
          >

          </video>
          <div className="bncontentst position-absolute start-50 translate-middle mt-5">
            <div className="tstmt mt-5">
              <h1 className="display-4 text-center text-white mt-5">Testimonials</h1>
              <p className="text-center text-white mt-2 mb-4">
                This is a simple hero unit, a simple jumbotron-style component
                for calling extra attention to featured content or information.
              </p>
            </div>
            <div className="slider-container ">
              <Slider {...settings}>
                <Card className="shadow testcrd">
                  <img src={cl1} alt="bg1" className="tstimg" />
                  <Card.Body className="text-center">
                    <Card.Title className="text-center mt-2 mb-4">
                      Jorge Rodriguez - Oldcastle Materials-USA
                    </Card.Title>
                    <Card.Text className="mb-4"> 
                      <FaQuoteLeft className="quoticn" />
                      Working with Anit was an absolute pleasure. They took the
                      time to understand our needs and delivered designs that
                      aligned perfectly with our brand. Their responsiveness and
                      attention to feedback made the process seamless and
                      stress-free <FaQuoteRight className="quoticn" />{" "}
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className="shadow testcrd">
                  <img src={sandeep} alt="sandeep" className="tstimg" />
                  <Card.Body className="text-center">
                  <Card.Title className="text-center mt-2 mb-4">
                      Sandedep Sharma - Associate Director at Deloitte
                    </Card.Title>
                    <Card.Text className="mb-4"> 
                      "It was fun working with Anit. He has lots of innovative
                      methods & good knowledge to get the job done. He has a
                      great interpersonal skills, always enthusiatic & very
                      happy person. Wish him good luck for his future
                      endeavour."
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className="shadow testcrd">
                  <img src={bg1} alt="bg1" className="tstimg" />
                  <Card.Body className="text-center">
                  <Card.Title className="text-center mt-2 mb-4">
                    OMC Client</Card.Title>
                    <Card.Text className="mb-4"> 
                      <FaQuoteLeft className="quoticn" /> Anit is one of the
                      most creative and versatile UI designer I’ve ever had the
                      chance to collaborate with and brings with him an energy
                      that is truly contagious to all those around him. He is
                      incredibly well-rounded and able to overcome any
                      challenge.
                      <FaQuoteRight className="quoticn" />
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className="shadow testcrd">
                  <img src={bg1} alt="bg1" className="tstimg" />
                  <Card.Body>
                  <Card.Title className="text-center mt-2 mb-4">Card title</Card.Title>
                  <Card.Text className="mb-4"> 
                      <FaQuoteLeft className="quoticn" /> Working with Anit was
                      an absolute pleasure. They took the time to understand our
                      needs and delivered designs that aligned perfectly with
                      our brand. Their responsiveness and attention to feedback
                      made the process seamless and stress-free
                      <FaQuoteRight className="quoticn" />
                    </Card.Text>
                  </Card.Body>
                </Card>
               
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonials;
