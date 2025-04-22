import React from "react";
import logo from "../logo58.png";
import styled from "styled-components";
import expert1 from "../images/expert1.JPG";
import expert2 from "../images/expert2.JPG";
import expert3 from "../images/expert3.jpg";
import { useState } from "react";
import {
  FaTwitter,
  FaFacebook,
  FaPinterest,
  FaInstagram,
  
} from "react-icons/fa";

const Wrapper = styled.section`
margin-bottom: 250px;
margin-top: 200px;
  .container-1 {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    /* gap: 10px; */
    .logo1 {
      width: 40px;
      height: 30px;
    }
    .para {
      font-weight: 400;
      color: ${({ theme }) => theme.colors.yellow};
    }
    .heading {
      font-size: 35px;
      margin-top: -10px;
      /* line-height: 10px; */
    }
  }

  .container-2 {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    .container-21 {
      width: 240px;
      height: 300px;
      position: relative;
      top: 0;
      left: 0;
      img {
        width: 100%;
        height: 100%;
        border-radius: 20px;

        &:hover {
          transform: scale(1.1);
        }
      }

      .image-hover-details {
        display: flex;
        /* justify-content: center;
        align-items: center; */
        flex-direction: column;
        padding-top: 20px;
        border-radius: 10px;
        /* border: 2px solid green; */
        height: 100px;
        width: 215px;
        position: absolute;
        top: 245px;
        left: 13px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
          0 6px 20px 0 rgba(0, 0, 0, 0.19);
        text-align: center;
        background-color: white;
        /* opacity: 50%; */

        /* &:hover {
          transform: scale(1.1);
        } */

        

        .para-11{
          display: flex;
          align-items: center;
          justify-content: center;
          /* padding-top: 150px; */
          line-height: 0.5px;
          color: ${({theme})=>theme.colors.yellow};
          font-weight: bold;
          font-size: 10px;
        }
        .heading-11{
          display: flex;
          align-items: center;
          justify-content: center;
          /* padding-bottom: 150px; */
          line-height: 0.5px;
          color: ${({theme})=>theme.colors.darkgreen};
          /* font-weight: bold; */
          font-size: 20px;
        }

        .logo-11{
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1rem;
          font-size: 14px;
          background-color: ${({theme})=>theme.colors.background};
          color: ${({theme})=>theme.colors.white};
          height:25px;
          margin-top: 13.5px;
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
        }
      }
    }
  }
`;

export default function Experts() {
  const [showDetails1, setShowDetails1] = useState(false);
  const [showDetails2, setShowDetails2] = useState(false);
  const [showDetails3, setShowDetails3] = useState(false);
  const handleMouseEnter1 = () => {
    setShowDetails1(true);
  };
  const handleMouseLeave1 = () => {
    setShowDetails1(false);
  };
  const handleMouseEnter2 = () => {
    setShowDetails2(true);
  };
  const handleMouseLeave2 = () => {
    setShowDetails2(false);
  };
  const handleMouseEnter3 = () => {
    setShowDetails3(true);
  };
  const handleMouseLeave3 = () => {
    setShowDetails3(false);
  };
  return (
    <Wrapper>
      <div className="container-1">
        <img src={logo} alt="" className="logo1" />
        <p className="para">PROFESSIONAL PEOPLE</p>
        <h1 className="heading">Meet The Experts</h1>
      </div>

      <div className="container-2">
        <div
          className="container-21"
          onMouseEnter={handleMouseEnter1}
          onMouseLeave={handleMouseLeave1}
        >
          <img src={expert1} alt="" />
          {showDetails1 && (
            <div className="image-hover-details">
              <p className="para-11">Expert</p>
              <h1 className="heading-11">M AbuBakar</h1>
              <div className="logo-11">
                <FaFacebook/>
                <FaTwitter/>
                <FaInstagram/>
                <FaPinterest/>
              </div>
            </div>
          )}
        </div>
        <div
          className="container-21"
          onMouseEnter={handleMouseEnter2}
          onMouseLeave={handleMouseLeave2}
        >
          <img src={expert3} alt="" />
          {showDetails2 && (
            <div className="image-hover-details">
              <p className="para-11">Expert</p>
              <h1 className="heading-11">Maida Qaisar</h1>
              <div className="logo-11">
                <FaFacebook/>
                <FaTwitter/>
                <FaInstagram/>
                <FaPinterest/>
              </div>
            </div>
          )}
        </div>
        <div
          className="container-21"
          onMouseEnter={handleMouseEnter3}
          onMouseLeave={handleMouseLeave3}
        >
          <img src={expert2} alt="" />
          {showDetails3 && (
            <div className="image-hover-details">
              <p className="para-11">Expert</p>
              <h1 className="heading-11">M Saqlain</h1>
              <div className="logo-11">
                <FaFacebook/>
                <FaTwitter/>
                <FaInstagram/>
                <FaPinterest/>
              </div>
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
}
