import React from "react";
import "./event.css";
import eventImg from "../images/img1.jpg";
import Card from "../card/Card";
const Event = () => {
  const cardsData = [
    { title: "Card 1", content: "Content for Card 1" },
    { title: "Card 2", content: "Content for Card 2" },
    { title: "Card 3", content: "Content for Card 3" },
    { title: "Card 4", content: "Content for Card 4" },
    { title: "Card 5", content: "Content for Card 5" },
  ];
  return (
    <div className="event-page">
      <header className="mt-0">
        <div className="container h-100 d-flex align-items-center justify-content-center">
          <h1 className="text-light display-2">Event</h1>
        </div>
      </header>

      <div className="container my-5">
        <div className="row column-gap-0">
          <div className="col-lg-6 col-md-12 d-flex flex-column align-items-center justify-content-center ">
            <img src={eventImg} className="img-fluid w-55" alt="about img" />
          </div>
          <div className="col-lg-6 col-md-12 d-flex flex-column align-items-center justify-content-center text-center">
            <h2 className="fs-1 mb-5 text-uppercase fw-bold">
              NSS Inauguration
            </h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Provident voluptate aut dolore ullam quasi numquam quod molestias
              cum officiis perspiciatis?
            </p>
            <p className="mb-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab magni
              animi tenetur eaque vel accusamus placeat quaerat ad. Similique
              quaerat qui doloribus assumenda deserunt tenetur quas suscipit
              officiis quod sequi?
            </p>
          </div>
        </div>

        <div className="events my-4 row gap-10">
          <div className="upcoming-event">
            {/* <Heading title="Upcoming Events" /> */}
            <div className="row gap-0 flex align-items-center justify-content-center">
              {cardsData.map((card, index) => (
                <div
                  key={index}
                  className="col-lg-6 col-xl-4 col-sm-12 col-md-6  "
                >
                  <Card title={card.title} content={card.content} />
                </div>
              ))}
            </div>
          </div>
          <div className="past-events">
            {/* <Heading title="Past Events" /> */}
            <div className="row gap-0 flex align-items-center justify-content-center">
              {cardsData.map((card, index) => (
                <div
                  key={index}
                  className="col-lg-6 col-xl-4 col-sm-12 col-md-6  "
                >
                  <Card title={card.title} content={card.content} />
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
