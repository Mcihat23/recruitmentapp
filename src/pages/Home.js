import React from "react";
import FormComp from "../components/FormComp,";
import { Carousel } from "react-bootstrap";

function Home() {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item style={{ height: "36rem" }}>
          <img
            style={{ opacity: "0.9" }}
            className="d-block w-100"
            src="https://www.lucasgroup.com/wp-content/uploads/2019/10/ATS-Resume.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="text-dark">Better Recruiting</h3>
            <p className="text-dark">
              Bring the best talent into your organization
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "36rem" }}>
          <img
            style={{
              opacity: "0.9",
            }}
            className="d-block w-100"
            src="https://timewise.co.uk/wp-content/uploads/2019/04/Recruitmentservices-e1556718012449-1500x885.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 className="text-dark">Better Results</h3>
            <p className="text-dark">
              Find candidates that turn into high-performing employees
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "36rem" }}>
          <img
            style={{ opacity: "0.9" }}
            className="d-block w-100"
            src="https://media-exp1.licdn.com/dms/image/C4D12AQFvR6webwTsKw/article-cover_image-shrink_720_1280/0/1533823206296?e=1652918400&v=beta&t=D4kkHNCpgFQ9-dfeqQGJaYONyaYVfvu042aOabCEgvU"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="text-dark">Talent Hunting</h3>
            <p className="text-dark">
              Useful and effective way to onboard new Talents
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <FormComp />
    </div>
  );
}

export default Home;
