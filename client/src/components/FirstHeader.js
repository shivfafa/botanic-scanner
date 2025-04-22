// import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React from "react";
// import {BiLogoTwitter} from "react-icons/bi";
import {
  FaTwitter,
  FaFacebook,
  FaPinterest,
  FaInstagram,
  FaClock,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 130px;
  /* border: 2px solid black; */
  background-color: ${({ theme }) => theme.colors.lightgray};
  /* background-color: #f6f4ec; */
  color: ${({ theme }) => theme.colors.lightblack};
  font-size: 12px;
  line-height: 22px;
  font-weight: 500;
  height: 2.2rem;

  .fContainer {
    display: flex;
    gap: 1.4rem;
    align-items: center;

    .fsContainer {
      gap: 1rem;
      /* background-color: green; */
      height:2.2rem;
      display: flex;
      align-items: center;
      padding: 0px 13px;
      background-color: ${({ theme }) => theme.colors.gray};
      /* background-color: #eceae0; */
      div {
        &:hover {
          color: ${({ theme }) => theme.colors.yellow};
        }
      }
    }
  }

  .sContainer {
    display: flex;
    /* gap:rem; */
    align-items: center;

    .sfContainer {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0 10px;
      /* background-color: green; */
      /* height:2rem; */
      .para{
        color: ${({ theme }) => theme.colors.lightblack};
          text-decoration: none;
        .link{
          color: ${({ theme }) => theme.colors.lightblack};
          text-decoration: none;
        }
      }
      div {
        margin-top: 3px;
        color: ${({ theme }) => theme.colors.background};
        
      }

      
    }
  }
`;

export default function FirstHeader() {
  return (
    <Wrapper>
      <div className="fContainer">
        <div className="ffContainer">
          <p>Welcome to The Botanic Scanner</p>
        </div>
        <div className="fsContainer">
          <div>
            <FaTwitter />
          </div>
          <div>
            <FaFacebook />
          </div>
          <div>
            <FaPinterest />
          </div>
          <div>
            <FaInstagram />
          </div>
        </div>
      </div>

      <div className="sContainer">
        <div className="sfContainer">
          <div>
            <MdEmail />
          </div>
          <p className="para"><NavLink className="link" to="mailto:thebotanicscanner@gmail.com">thebotanicscanner@gmail.com</NavLink></p>
        </div>
        <div className="sfContainer">
          <div>
            <FaClock />
          </div>
          <p>Available - 24/7</p>
        </div>
      </div>
    </Wrapper>
  );
}
