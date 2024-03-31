import React from "react";
import "./hero.css";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const Hero = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="slider">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/sahincloudinary/image/upload/f_auto,q_auto/v1/nss_events/team/jvw4nonbn9no8y77ntjl"
            alt="first"
          />
          <Carousel.Caption>
            <h2>NSS Inauguration</h2>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w=100"
            src="https://res.cloudinary.com/dvm4ovv0x/image/upload/f_auto,q_auto/v1/NSS_EVENTS/vqrnipk4ao3b9mucnzpf"
            alt="third"
          />
          <Carousel.Caption>
            <h2>Village Survey</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w=100"
            src="https://res.cloudinary.com/sahincloudinary/image/upload/f_auto,q_auto/v1/nss_events/team/alxumd0y2gadbc9tevco"
            alt="second"
          />
          <Carousel.Caption>
            <h2>Unity Run</h2>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Hero;
