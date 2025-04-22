import React from "react";
import corn from "../images/corn.jpg";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { GiCorn } from "react-icons/gi";
import { IconContext } from "react-icons";

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  .card {
    width: 190px;
    height: 450px;
    border: 1px solid #ccc;
    border-radius: 15px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 2px;
    /* bacbackground-color: ${({ theme }) => theme.colors.white}; */
    position: relative;
      top: 0;
      left: 0;

    .card-image {
      width: 100%;
      height: 200px;
      border-top-left-radius: 15px;
      border-top-right-radius: 15px;
      object-fit: cover;
      margin-bottom: 10px;
    }

    .card-description {
      font-size: 16px;
      color: #333;
      margin-bottom: 20px;
    }

    .card-button {
      display: inline-block;
      padding: 10px 20px;
      background-color: #3498db;
      color: #fff;
      text-decoration: none;
      border-radius: 4px;
      transition: background-color 0.3s ease;
      &:hover {
        background-color: #2980b9;
      }
    }
  }

  .image-1 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  box-shadow: 10px 10px 8px #888888;
  position: absolute;
      top: 152rem;
      left: 46rem;
background-color: white;
  

  .top-react-icons {
  font-size: 70px;
  color: ${({theme})=> theme.colors.yellow};

}
}


`;

const TestingCards = () => {
  return (
    <Wrapper>
      <div className="card">
        <img src={corn} alt="" className="card-image" />
        <p className="card-description">Corn/Maize</p>
        <p className="card-description">About Your self </p>
        <NavLink to="\home" className="card-button">
          Buy Now
        </NavLink>
      </div>

      <div className="image-1">
        <IconContext.Provider value={{ className: "top-react-icons" }}>
          <GiCorn />
        </IconContext.Provider>
      </div>
    </Wrapper>
  );
};

export default TestingCards;
