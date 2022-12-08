// npm install --save styled-components

import React from "react";
import styled from "styled-components";
import PageHero from "../components/PageHero";

import "./About.css";
import aboutImg from "../assets/team.jpg";
import missionImg from "../assets/purpose.jpg";
import historyImg from "../assets/historyPhoto.jpg";

const AboutPage = () => {
  return (
    <main className="page ">
      <Wrapper className="page section ">
        {" "}
        {/* needs wrapper instead of div*/}
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className="title">
            <h2>Our Team</h2>
          </div>
          <p>
            <li> Yi </li>
            <li> Wenzhe </li>
            <li> Nada</li>
            <p>
              We are a group of John Abbott college students in the program of full stack development. We are dedicated to work as a cohesive group to make a user friendly e-commerce website.
            </p>
          </p>
        </article>
      </Wrapper>
      <Wrapper className="page section ">
        {" "}
        {/* needs wrapper instead of div*/}
        <img src={missionImg} alt="our mission" />
        <article>
          <div className="title">
            <h2>Motivation for the Website</h2>
          </div>
          <p>
            Online shopping has increased during the pandemic. Trading companies who could survive are those who had online shopping websites.Companies realized the importance of having such online platforms. Because of the importance of “Ecommerce” and the demand for such websites, we did our project on this topic. Our website connects shoppers to products, namely furniture to make online purchases.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  .title {
    text-align: left;
  }
  /* overflow: hidden; */
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default AboutPage;
