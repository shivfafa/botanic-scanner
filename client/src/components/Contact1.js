import React from "react";
import styled from "styled-components";
import { BsPhone } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";

const Wrapper = styled.section`
  .container {
    /* display: flex; */
    /* justify-content: center;
        align-items: center; */
    /* gap:3rem; */
    width: 50%;

    .container-1 {
      width: 50%;
      /* border: 2px solid black; */
      padding: 50px 90px 30px 90px;

      .heading {
        /* font-size: 40px; */
        margin-bottom: -8px;
        color: ${({ theme }) => theme.colors.lightblack};
        font-weight: 400;
      }

      .heading-1 {
        color: ${({ theme }) => theme.colors.black};
        font-weight: bold;
        font-size: 25px;
      }

      .container-11 {
        display: flex;
        /* align-items: center; */
        gap: 0.8rem;
        /* border: 2px solid black; */

        .heading-2 {
          margin-bottom: -10px;
          /* margin-top: -10px; */
        }
        p {
          color: ${({ theme }) => theme.colors.lightblack};
          font-weight: 500px;
        }
        .icon {
          font-size: 30px;
          margin-top: 20px;
          color: ${({ theme }) => theme.colors.darkgreen};
          /* background-color:${({ theme }) => theme.colors.white} ; */

          &:hover {
            color: ${({ theme }) => theme.colors.yellow};
          }
        }
      }
    }
  }
`;

export default function Contact1() {
  return (
    <Wrapper>
      <div className="container">
        <div className="container-1">
          <h3 className="heading">Contact Now</h3>
          <h1 className="heading-1">
            GET IN TOUCH
            <br />
            WITH US
          </h1>
          <div className="container-11">
            <div className="icon">
              <FaMapMarkerAlt />
            </div>
            <div>
              <h3 className="heading-2">Address</h3>
              <p>
                Click the icon in the bottom right of the page to talk to our
                agents during business hours. At other times we will respond as
                soon as possible
              </p>
            </div>
          </div>
          <div className="container-11">
            <div className="icon">
              <BsPhone />
            </div>
            <div>
              <h3 className="heading-2">Phone</h3>
              <p>+41 71 227 76 90</p>
            </div>
          </div>
          <div className="container-11">
            <div className="icon">
              <FaClock />
            </div>
            <div>
              <h3 className="heading-2">Open Hours</h3>
              <p>
                Monday to Friday 09:30 - 17:30 <br />
                Saturday & Sunday 10:00 - 15:00
              </p>
            </div>
          </div>
          <div className="container-11">
            <div className="icon">
              <MdEmail />
            </div>
            <div>
              <h3 className="heading-2">Email</h3>
              <p>botScan@gmail.com</p>
            </div>
          </div>
        </div>
        {/* <div className="container-2"></div> */}
      </div>
    </Wrapper>
  );
}
