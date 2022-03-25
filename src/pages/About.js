import React from "react";
import { Container } from "react-bootstrap";

export default function About() {
  return (
    <div>
      <Container>
        <h2 className="text-center p-2 mt-3">Who We Are</h2>
        <p
          className="fs-6 lh-base"
          style={{ textIndent: "5rem", textAlign: "justify" }}
        >
          At Recruiter, what we do is about people. Although we have a strong
          history of providing solutions for human resource challenges, we
          strive to do more than that. We challenge ourselves to anticipate,
          think forward and take action in a way that empowers us to shape the
          changing world of work. For over 70 years, we’ve led the way in
          defining the future of business solutions.
        </p>

        <p
          className="fs-6 lh-base"
          style={{ textIndent: "5rem", textAlign: "justify" }}
        >
          Recruiter is proud to be named to FORTUNE Magazine’s “World’s Most
          Admired Companies®” list for 15 consecutive years*. We are a
          comprehensive global provider of cloud-based human capital management
          (HCM) solutions that unite HR, payroll, talent, time, tax and benefits
          administration, and a leader in business outsourcing services,
          analytics and compliance expertise. Our unmatched experience, deep
          insights and cutting-edge technology have transformed human resources
          from a back-office administrative function to a strategic business
          advantage.
        </p>
      </Container>
    </div>
  );
}
