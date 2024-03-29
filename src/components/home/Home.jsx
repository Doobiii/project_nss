import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import AboutImg from "../images/img1.jpg";
import Hero from "../hero/Hero";

const Home = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div>
      <div className="home-page">
        <Hero />

        <div className="container my-5">
          <div className="row mx-5">
            <div className="col-lg-6 d-flex justify-content-center d-none d-lg-flex">
              <img src={AboutImg} className="img-fluid w-55" alt="about img" />
            </div>
            <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center sm:text-center">
              <h2 className="fs-1 mb-5 text-uppercase fw-bold">About Us</h2>
              <p className="mb-2 ">
                Welcome to the NSS unit of NIT Silchar, where we serve our
                community through various social initiatives and volunteering
                activities. Committed to fostering positive change, we strive to
                make a meaningful impact through teamwork, empathy, and service
                to society. Join us in our journey of service and
                transformation.
              </p>
              <p className="mb-5 home-about">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
                magni animi tenetur eaque vel accusamus placeat quaerat ad.
                Similique quaerat qui doloribus assumenda deserunt tenetur quas
                suscipit officiis quod sequi?
              </p>
              <Link to="/About">
                <Button
                  variant="outline-success"
                  onClick={scrollToTop}
                  size="lg"
                >
                  More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
