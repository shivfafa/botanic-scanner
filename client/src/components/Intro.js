import React from "react";
import styled from "styled-components";
import image1 from "../images/bot4.jpg";
import { MdGppGood } from "react-icons/md";
import { MdOutlineYard } from "react-icons/md";

import logo from "../logo58.png";

const Wrapper = styled.section`
  margin: 20px 0;
  padding: 120px 200px 120px;
  /* border: 2px solid black; */
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  .container-1 {
    width: 35rem;
    .img1 {
      height: 40rem;
      width: 30rem;
      margin-top: 20px;
      // margin-left: auto;
      margin-right: auto;
      border-radius: 10px;
      position: relative;
      top: 0;
      left: 0;
    }

    .fcontainer-1 {
      width: 25rem;
      height: 7.5rem;
      /* border:2px solid green; */
      border-radius: 10px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      background-color: ${({ theme }) => theme.colors.background};
      color: ${({ theme }) => theme.colors.white};
      position: absolute;
      top: 93.7rem;
      left: 280px;

      .plantlogo {
        align-items: center;
        font-size: 2.5rem;
        color: ${({ theme }) => theme.colors.yellow};
        /* padding-left:30px; */
      }
    }

    .mfcontainer-1 {
      border-left: 0.1px solid ${({ theme }) => theme.colors.lightgray};
      height: 80px;
      padding-left: 20px;
    }

    .sfcontainer-1 {
      /* border: 2px solid black; */
      margin-right: 20px;
      margin-left: -35px;
      h1 {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
          Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
          sans-serif;
      }
      p {
        margin-top: -20px;
      }
    }
  }

  .container-2 {
    /* border: 2px solid black; */
    margin-left : -40px;
    margin-top : -50px;
    height: 35rem;
    width: 35rem;
    /* height: 40rem; */

    .logo1 {
      width: 40px;
      height: 30px;
    }

    .intro-para {
      font-size: 14px;
      line-height: 20px;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-bottom: -20px;
      color: ${({ theme }) => theme.colors.lightblack};
      margin-top: -1px;
    }
    .heading-1 {
      font-size: 50px;
      line-height: 1em;
      font-weight: 700;
      text-transform: none;
      /* letter-spacing: -0.04em; */
      color: ${({ theme }) => theme.colors.darkgreen};
    }

    .heading-2 {
      font-size: 24px;
      line-height: 26px;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.background};
    }

    .spec-para {
      position: relative;
      display: block;
      margin-top: 30px;
      color: ${({ theme }) => theme.colors.lightblack};
      font-weight: 400;
    }

    .list-items {
      position: relative;
      /* display: block; */
      /* margin-top: 20px; */
      /* color: ${({ theme }) => theme.colors.black}; */
      div {
        display: flex;
        align-items: center;
        gap: 15px;
        font-size: 15px;
        margin-bottom: -30px;
        font-weight: 400;

        .icon {
          color: ${({ theme }) => theme.colors.yellow};
          font-size: 20px;
          align-items: center;
          /* padding-top: 20px; */

          &:hover {
            color: ${({ theme }) => theme.colors.background};
          }
        }

        .lidata {
          padding-bottom: 6px;
        }
      }
    }

    .video-section {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      /* border: 2px solid black; */
      margin-top: 30px;

      .video-section-1 {
        padding-left: 10px;
        iframe {
          border-radius: 15px;
        }
      }

      .video-section-2 {
        border-left: 10px solid ${({ theme }) => theme.colors.yellow};
        height: 70px;
        margin-left: 15px;
        border-radius: 20px;
      }

      .video-section-3 {
        margin-left: 20px;

        p {
          margin-bottom: -20px;
          color: ${({ theme }) => theme.colors.lightblack};
          font-weight: 500;
        }

        h1 {
          margin-bottom: -20px;
        }
      }
    }
  }
`;

export default function Intro() {
  return (
    <Wrapper>
      <div className="container-1">
        <img src={image1} alt="" className="img1" />
        <div className="fcontainer-1">
          <div className="ffcontainer-1">
            <h1 className="plantlogo">
              <MdOutlineYard />
            </h1>
          </div>
          <div className="mfcontainer-1"></div>
          <div className="sfcontainer-1">
            <h1>87600</h1>
            <p>Successfully Project Completed</p>
          </div>
        </div>
      </div>
      <div className="container-2">
        <img src={logo} alt="" className="logo1" />
        <p className="intro-para">OUR INTRODUCTION</p>
        <h1 className="heading-1">
          The Botanic <br /> Scanner
        </h1>
        <h3 className="heading-2">We're Leader in Agriculture Market </h3>
        <p className="spec-para">
          {/* There are many variations of passages of available but the majority
          <br />
          have suffered alteration in some form, by injected humou or randomised
          <br />
          words even slightly believable. */}
          In our crop disease detection project, we achieved promising results with <br/>
          advanced methodologies and teamwork. Looking forward to impactful innovations in<br/> 
          agriculture.
        </p>
        <div className="list-items">
          <div>
            <p className="icon">
              <MdGppGood />
            </p>
            <p className="lidata">Detect Disease of Your Relevant Crop</p>
          </div>
          <div>
            <p className="icon">
              <MdGppGood />
            </p>
            <p className="lidata">
              Learn About Cultivation Process of Your Crop
            </p>
          </div>
          <div>
            <p className="icon">
              <MdGppGood />
            </p>
            <p className="lidata">Query! Get Answer of Your Query</p>
          </div>
          <div>
            <p className="icon">
              <MdGppGood />
            </p>
            <p className="lidata">Get Precautionary Measures</p>
          </div>
          <div>
            <p className="icon">
              <MdGppGood />
            </p>
            <p className="lidata">Get Recomendation for suitable Crop for your Land </p>
          </div>
        </div>

        <div className="video-section">
          <div class="video-section-1">
            <iframe
              width="150"
              height="70"
              src="https://www.youtube.com/embed/nziA33FrhoI?modestbranding=1"
              frameborder="0"
              // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              title="youtube video"
            />
          </div>

          <div className="video-section-2"> </div>
          <div className="video-section-3">
            <p>Watch our Video</p>
            <h3>Tips for your Crops</h3>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
