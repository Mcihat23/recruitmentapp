import React from "react";
import { MDBFooter, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBFooter className="text-center" color="white" bgColor="dark">
      <MDBContainer className="p-4">
        <section className="mb-4">
          <p>HR services resources and insights</p>
        </section>

        <section className="">
          <MDBRow>
            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">What We Offer</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                    Talents
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    HR Services
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Payroll
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Integrations
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">Who We Serve</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                    Businesses
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Industry
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Partners
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">Resources</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                    Small Business Resources
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Midsized & Enterprise Business Resources
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Tools
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Webinars & Events
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">About Recruiter</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                    Worldwide Locations
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Corporate Social Responsibility
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Awards and Recognition
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2022 Copyright: Designed and Developed by{" "}
        <a
          className="text-white"
          href="https://github.com/Mcihat23"
          target="_blank"
          rel="noreferrer noopener"
        >
          Mustafa Cihat Aksoy
        </a>
      </div>
    </MDBFooter>
  );
}
