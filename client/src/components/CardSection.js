import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import card1 from "../images/card1.jpg";
import card2 from "../images/card2.jpg";
import card3 from "../images/card3.jpg";

const Wrapper = styled.section`
  margin: 150px 0;
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    .container-1 {
      width: 320px;
      height: 450px;
      position: relative;
      top: 0;
      left: 0;
      img {
        width: 100%;
        height: 100%;
        border-radius: 20px;
      }
    }

    .container-2 {
      width: 320px;
      height: 450px;
      position: relative;
      top: 0;
      left: 0;
      img {
        width: 100%;
        height: 100%;
        border-radius: 20px;
      }
    }

    .container-3 {
      width: 320px;
      height: 450px;
      background-color: ${({ theme }) => theme.colors.yellow};
      border-radius: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;

      img {
        width: 200px;
        height: 200px;
        border-radius: 50%;
      }

      .para {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        /* height: 100%; */
        text-align: center;
        font-weight: bold;
        font-size: 2rem;
        // font-style: italic;
        color: ${({ theme }) => theme.colors.darkgreen};
        margin-top: 40px;
      }

      .btn {
        margin-top: 20px;
        width: 12rem;
        height: 3.2rem;
        border-radius: 10px;
        border: none;
        background-color: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }

  .container2 {
    /* border: 2px solid black; */
    .container-11 {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      text-align: center;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); */
      background-color: white;
      width: 280px;
      height: 90px;
      position: absolute;
      top: 137.6rem;
      left: 18.93rem;

      .link {
        text-decoration: none;
        h1 {
          text-decoration: none;
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: 300px;
          color: ${({ theme }) => theme.colors.background};
          font-size: 23px;
          &:hover {
            color: ${({ theme }) => theme.colors.yellow};
            cursor: pointer;
          }
        }
      }
    }

    .container-21 {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      text-align: center;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); */
      background-color: white;
      width: 280px;
      height: 90px;
      position: absolute;
      top: 137.6rem;
      left: 40.91rem;
      .link {
        text-decoration: none;
        h1 {
          text-decoration: none;
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: 300px;
          color: ${({ theme }) => theme.colors.background};
          font-size: 23px;
          &:hover {
            color: ${({ theme }) => theme.colors.yellow};
            cursor: pointer;
          }
        }
      }
    }
  }
`;

export default function CardSection() {
  return (
    <Wrapper>
      <div className="container">
        <div className="container-1">
          <img src={card1} alt="" />
        </div>
        <div className="container-2">
          <img src={card2} alt="" />
        </div>
        <div className="container-3">
          <img src={card3} alt="" />
          <p className="para">
            The Botanic <br /> Scanner
          </p>
          <NavLink to="/service">
            <button className="btn">Detect Now</button>
          </NavLink>
        </div>
      </div>
      <div className="container2">
        <div className="container-11">
          <NavLink className="link" to="/cultivation">
            <h1>
              Cultivation
              <br /> Process
            </h1>
          </NavLink>
        </div>
        <div className="container-21">
          <NavLink className="link" to="/croprecomendation">
            <h1>
              Crop <br /> Recomendation
            </h1>
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
}
