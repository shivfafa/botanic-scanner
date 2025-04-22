import React, { useState, useEffect } from "react";
import styled from "styled-components";
import image1 from "../images/botanic1.jpg";
// import image2 from '../images/botanic2.jpg'
import image3 from "../images/botanic3.jpg";
import { NavLink } from "react-router-dom";

const Slideshow = styled.div`
  width: 100%;
  height: 672px;
  position: relative;
  overflow: hidden;
`;

const Slide = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-size: cover;
  background-position: center;
  transition: opacity 0.3s ease-in-out;
  opacity: ${(props) => (props.active ? "1" : "0")};
  backdrop-filter: blur(200px); /* Add the blur effect here */

  .container {
    width: 45rem;
    margin-top: 130px;
    margin-left: 200px;
    color: white;

    h1 {
      font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
      font-size: 60px;
      margin-top: 0.3rem;
      margin-bottom: 0.5rem;
    }

    .sPara {
      font-size: 16px;
      font-weight: 500;
      line-height: 25px;
    }

    .fPara {
      font-size: 16px;
      font-weight: 500;
      position: relative;
    }

    .fPara::after {
      content: "";
      position: absolute;
      bottom: -5px;
      font-weight: bold;
      left: 0;
      width: 44%;
      height: 2px;
      background-color: white;
    }

    .btn {
      position: relative;
      display: inline-block;
      vertical-align: middle;
      /* -webkit-appearance: none; */
      border: none;
      outline: none;
      background-color: ${({ theme }) => theme.colors.yellow};
      color: #334b35;
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      padding: 18px 50px 18px;
      border-radius: 10px;
      letter-spacing: 0.1em;
      -webkit-transition: all 0.3s linear;
      transition: all 0.3s linear;
      /* overflow: hidden; */
      /* z-index: 1; */
      margin-top: 25px;
      width: 13rem;
      height: 4rem;

      &:hover {
        background-color: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }
`;

const images = [
  {
    imageUrl: image1,
  },
  {
    imageUrl: image3,
  },
];

export default function SlideShow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Slideshow>
      {images.map((image, index) => (
        <Slide
          key={index}
          active={index === currentSlide}
          style={{ backgroundImage: `url(${image.imageUrl})` }}
        >
          <div className="container">
            <p className="fPara">Nurturing nature, cultivating natural goods</p>
            <h1>
              Welcome to <br /> Botanic Scanner
            </h1>
            <p className="sPara">
              Embrace the bountiful harvest, powered by cutting-edge technology.
              Welcome to our world of natural goods, where we nurture crops and
              protect them from diseases
            </p>
            <NavLink to="/service"><button className="btn">Detect Now</button></NavLink>
          </div>
        </Slide>
      ))}
    </Slideshow>
  );
}
