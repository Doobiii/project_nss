import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Hero from "../hero/Hero";
import "./home.css";

const Home = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div>
      <div className="home-page">
        <Hero />

        <div className="container my-5 ">
          <div className="row mx-5">
            <div className="col-lg-6 d-flex justify-content-center d-none d-lg-flex">
              <img
                src="https://res.cloudinary.com/dvm4ovv0x/image/upload/f_auto,q_auto/v1/NSS_HOME/g5avbxb0lgm4ie3sgbfo"
                className="img-fluid w-55"
                alt="about img"
              />
            </div>
            <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center text-center">
              <h2 className="fs-1 mb-5 text-uppercase fw-bold">About Us</h2>
              <p className="mb-2 ">
                Welcome to the NSS unit of NIT Silchar, where we serve our
                community through various social initiatives and volunteering
                activities. Committed to fostering positive change, we strive to
                make a meaningful impact through teamwork, empathy, and service
                to society.
              </p>
              <p className="mb-2 home-about">
                Our mission is to empower students to become catalysts for
                social change. By providing opportunities for volunteering,
                leadership development, and skill enhancement, we aim to
                cultivate a generation of socially conscious leaders who are
                equipped to tackle the pressing issues facing our world today.
              </p>
              <p className="mb-5 home-about font-weight-bold ">
                Join us in our journey of service and transformation!
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

        <div className="status p-12  font-sans min-h-1/2 mx-20">
          <p className="data text-5xl my-3 font-bold 2xl:px-36 xl:px-36 lg:px-36 md:px-24">
            PRINCIPAL DATA
          </p>
          <div className="xl:12 lg:px-20 md:px-24 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bigbox1 grid md:grid-cols-2 ">
              <div className=" boxes text-4xl font-bold flex flex-col items-center justify-center ">
<<<<<<< HEAD
                <div className="figures flex items-center text-red-500 ">
                  <p className="num text-7xl text-red-500 py-4">165</p>
                  {/* <span className="plus block">+</span> */}
=======
                <div className="figures flex items-center text-[#e12129] ">
                  <p className="num text-7xl text-[#e12129] py-4">165</p>
>>>>>>> 487f68f (principal data-mini changes)
                </div>
                <p className=" des text-lg font-bold">Volunteers</p>
              </div>

              <div className=" boxes text-4xl font-bold flex flex-col items-center justify-center ">
<<<<<<< HEAD
                <div className="figures flex items-center text-red-500 ">
                  <p className="num text-7xl text-red-500 py-4">20</p>
=======
                <div className="figures flex items-center text-[#e12129] ">
                  <p className="num text-7xl text-[#e12129] py-4">25</p>
>>>>>>> 487f68f (principal data-mini changes)
                  <span className="plus block">+</span>
                </div>
                <p className="des text-lg font-bold">Total Events</p>
              </div>
            </div>

            <div className="bigbox2 grid md:grid-cols-2">
              <div className=" boxes text-4xl font-bold flex flex-col items-center justify-center md:">
<<<<<<< HEAD
                <div className="figures flex items-center text-red-500 ">
                  <p className="num text-7xl text-red-500 py-4">4</p>
                  {/* <span className="plus block">+</span> */}
=======
                <div className="figures flex items-center text-[#e12129] ">
                  <p className="num text-7xl text-[#e12129] py-4">2</p>
                  <span className="plus block">+</span>
>>>>>>> 487f68f (principal data-mini changes)
                </div>
                <p className="des text-lg font-bold">Donation Camps</p>
              </div>
              <div className=" boxes text-4xl font-bold flex flex-col items-center justify-center">
<<<<<<< HEAD
                <div className="figures flex items-center text-red-500 ">
                  <p className="num text-7xl text-red-500 py-4">2</p>
                  {/* <span className="plus block">+</span> */}
=======
                <div className="figures flex items-center text-[#e12129] ">
                  <p className="num text-7xl text-[#e12129] py-4">5</p>
                  <span className="plus block">+</span>
>>>>>>> 487f68f (principal data-mini changes)
                </div>
                <p className=" des text-lg font-bold">Expert Talks</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
