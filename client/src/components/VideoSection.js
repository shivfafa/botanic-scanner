import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { MdOutlineSlowMotionVideo } from "react-icons/md";

const Wrapper = styled.section`
  margin-top: 250px;
  background-image: url(${require("../images/Service.jpg")});
  /* opacity: 50%; */
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  height: 370px;

  .container {
    padding-top: 60px;
    display: flex;
    justify-content: center;
    gap: 30rem;
    align-items: center;

    .conatiner-1 {
      .heading-1 {
        font-size: 40px;
        color: white;
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

    .container-2 {
      font-size: 70px;
      color: white;
      .nav{
        color: white;
      }
    }
  }
`;

export default function VideoSection() {
  const handleNavLinkClick = () => {
    // Open the video when NavLink is clicked
    const videoUrl = "https://www.youtube.com/embed/nziA33FrhoI"; // Replace with your video URL
    window.open(videoUrl);
  };
  return (
    <Wrapper>
      <div className="container">
        <div className="conatiner-1">
          <h1 className="heading-1">
            Agriculture Matters to
            <br />
            the Future of Development
          </h1>
          <NavLink to="/service">
            <button className="btn">Detect Now</button>
          </NavLink>
        </div>
        <div className="container-2">
          <NavLink to="/" onClick={handleNavLinkClick} className="nav">
            <MdOutlineSlowMotionVideo />
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
}
