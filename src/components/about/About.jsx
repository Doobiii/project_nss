import React from "react";
import "./about.css";
import aboutImg from "../images/img1.jpg";
import {
  Card,
  CardBody,
  CardText,
  CardFooter,
  CardTitle,
} from "react-bootstrap";
import Person1 from "../images/person1.jpg";
import Header from "../shared/Title-page/Header";
function About() {
  return (
    <div className="about-page">
      <Header
        title="About Us"
        backgroundImage="https://res.cloudinary.com/sahincloudinary/image/upload/f_auto,q_auto/v1/nss_events/team/sutlpsi5a0evt6kutntt"
      />

      <div className="container my-5 text-center">
        <p className="mb-2">
          Welcome to the official website of the{" "}
          <span className="font-weight-bold">National Service Scheme</span>(NSS)
          unit of the National Institute of Technology (NIT) Silchar!
        </p>
        <p>
          Established with a vision to foster a spirit of social responsibility
          and community engagement among the youth, our NSS unit is committed to
          bringing about positive change through various initiatives and
          projects. With a team of enthusiastic volunteers and mentors, we
          strive to make a meaningful impact in the lives of people, especially
          those from marginalized communities. Our mission encompasses a wide
          array of activities, including awareness campaigns, cleanliness
          drives, health camps, educational outreach programs, and environmental
          conservation efforts. Through these initiatives, we aim to empower
          individuals, uplift communities, and contribute to the holistic
          development of society.
        </p>

        <div className="row gap-0 my-4 px-sm-2">
          <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center ">
            <img
              src="https://res.cloudinary.com/sahincloudinary/image/upload/f_auto,q_auto/v1/nss_events/team/tlk4goagexcsktbrukjk"
              className="img-fluid h-3/4 w-3/4 rounded mb-3 mb-lg-0"
              alt=""
            />
          </div>
          <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center">
            <img
              src="https://res.cloudinary.com/sahincloudinary/image/upload/f_auto,q_auto/v1/nss_events/team/efe7e2wxiao16vcw5fk7"
              className="img-fluid h-3/4 w-3/4 rounded ml-md-3 "
              alt=""
            />
          </div>
        </div>

        <p>
          Driven by the values of empathy, integrity, and inclusivity, we
          believe in the power of collective action to bring about
          transformative change. Whether it's organizing blood donation camps to
          save lives or conducting skill development workshops to empower youth,
          every endeavor of our NSS unit is rooted in the spirit of service and
          solidarity. As we embark on this journey of service and social
          responsibility, we invite you to join hands with us in making a
          difference. Together, let's work towards building a more equitable and
          sustainable future for all. Get involved. Make a difference. Be the
          change.
        </p>
      </div>
      <div className="content-section container p-5">
        <div className="row ">
          <div className="col-lg-6 deta">
            <Card className="h-100 shadow">
              <CardBody>
                <div className="p-4">
                  <CardText>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi iste culpa perspiciatis. Magnam, explicabo cumque.
                  </CardText>
                </div>
              </CardBody>
              <CardFooter className="d-flex align-items-center">
                <img
                  src={Person1}
                  className="img-fluid rounded-circle mx-3 shadow"
                  alt=""
                />
                <CardTitle className="text-success">
                  S. Shankar Sir
                  <br />
                  Programme Officer
                </CardTitle>
              </CardFooter>
            </Card>
          </div>
          <div className="col-lg-6 deta">
            <Card className="h-100 shadow">
              <CardBody>
                <div className="p-4">
                  <CardText>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi iste culpa perspiciatis. Magnam, explicabo cumque.
                  </CardText>
                </div>
              </CardBody>
              <CardFooter className="d-flex align-items-center">
                <img
                  src={Person1}
                  className="img-fluid rounded-circle mx-3 shadow"
                  alt=""
                />
                <CardTitle className="text-success">
                  Pranto Das
                  <br />
                  President
                </CardTitle>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
