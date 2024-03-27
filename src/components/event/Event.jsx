import React from "react";
import "./event.css";
import eventImg from "../images/img1.jpg";
import Card from "../card/Card";
import Heading from "../shared/Heading/Heading";
import past_events from "../../db/past-event";
import upcoming_events from "../../db/upcoming-event";
const Event = () => {

  return (
    <div className="event-page">
      <header className="mt-0">
        <div className="container h-100 d-flex align-items-center justify-content-center">
          <h1 className="text-light display-2">Event</h1>
        </div>
      </header>
      <Heading title="Events in Focus" />
      <div className="container my-5">
        <div className="row column-gap-0 mx-4">
          <div className="col-lg-6 col-md-12 d-flex flex-column align-items-center justify-content-center ">
            <img src={eventImg} className="img-fluid w-55" alt="about img" />
          </div>
          <div className="col-lg-6 col-md-12 d-flex flex-column align-items-center justify-content-center text-center">
            <h2 className="fs-1 mb-5 text-uppercase fw-bold">
              NSS Inauguration
            </h2>
            <p>
              The NSS inauguration at NIT Silchar, held on 11th August 2023, was
              a momentous occasion, uniting students, faculty, and
              administration in the Bhupen Hazarika Auditorium. With meticulous
              planning, the event commenced with the ceremonial lighting of
              diyas, symbolizing enlightenment and service.
            </p>
            <p className="mb-5">
              Our esteemed Director Professor Dilip Kumar Baidya inaugurated NSS
              NIT Silchar, setting the stage for a purposeful journey. This was
              followed by insightful speeches from him, the Deans, the NSS
              Programme Officer, and the NSS President, inspiring collaboration,
              and a commitment to service. NSS NIT Silchar pledges to sustain
              impactful service, uplifting communities and enhancing the
              college's reputation.
            </p>
          </div>
        </div>

        <div className="events my-4 row gap-10">
          <div className="upcoming-event">
            <Heading title="Upcoming Events" />
            <div className="row gap-0 flex align-items-center justify-content-center">
              {upcoming_events.map((card, index) => (
                <div
                  key={index}
                  className="col-lg-6 col-xl-4 col-sm-12 col-md-6 d-flex align-items-center justify-content-center"
                >
                  <Card title={card.title} content={card.content} imgUrl={card.imgUrl} />
                </div>
              ))}
            </div>
          </div>
          <div className="past-events">
            <Heading title="Past Events" />
            <div className="row gap-0 flex align-items-center justify-content-center">
              {past_events.map((card, index) => (
                <div
                  key={index}
                  className="col-lg-6 col-xl-4 col-sm-12 col-md-6 d-flex align-items-center justify-content-center"
                >
                  <Card title={card.title} content={card.content} imgUrl={card.imgUrl}/>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
