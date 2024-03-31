import "./Header.scss";
import React from "react";

const Header = ({ title, backgroundImage }) => {
  return (
    <header className="mt-0 w-100 position-relative">
      <img
        src={
          backgroundImage
            ? backgroundImage
            : "https://res.cloudinary.com/sahincloudinary/image/upload/f_auto,q_auto/v1/nss_events/team/sutlpsi5a0evt6kutntt"
        }
        alt=""
        className="w-100"
      />
      <div className="container h-100 d-flex align-items-center justify-content-center">
        <h1 className="text-light display-2 position-absolute top-50 start-50 translate-middle">
          {title}
        </h1>
      </div>
    </header>
  );
};

export default Header;
