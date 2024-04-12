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
            src="https://res.cloudinary.com/sahincloudinary/image/upload/f_auto,q_auto/v1/nss_events/team/alxumd0y2gadbc9tevco"
            alt="first"
          />
          <Carousel.Caption>
            <h2>Fit India</h2>
            <p>
              NSS NIT Silchar leads the way in fostering unity through action.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w=100"
            src="https://res.cloudinary.com/dkntkq8iv/image/upload/v1711890773/Diwali%20donation%20Drive/DiwaliDonation2.webp"
            alt="third"
          />
          <Carousel.Caption>
            <h2>Village Survey</h2>
            <p>
              NSS NIT Silchar's donation drive enriching young minds with the
              gift of learning.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w=100"
            src="https://res.cloudinary.com/dvm4ovv0x/image/upload/f_auto,q_auto/v1/NSS_EVENTS/vqrnipk4ao3b9mucnzpf"
            alt="second"
          />
          <Carousel.Caption>
            <h2>Village Survey</h2>
            <p>
              NSS NIT Silchar's donation drive brightening up lives and
              spreading hope.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Hero;
