import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import logo from "../logo58.png";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt, FaPhoneSquareAlt } from "react-icons/fa";
import image1 from "../images/footer1.png";
import image2 from "../images/footer2.png";

const Wrapper = styled.section`

  /* border: 2px solid black; */
  background-color: ${({ theme }) => theme.colors.darkgreen};
  color: ${({ theme }) => theme.colors.white};
  .container {
    display: flex;
    justify-content: space-around;
    padding: 100px 150px;
    gap: 4rem;
    /* align-items: center; */
    .container-1 {
      .container-11 {
        margin-top: -20px;
        margin-bottom: 30px;
        .Link {
          color: ${({ theme }) => theme.colors.background};
          text-decoration: none;

          .image {
            width: 1.5rem;
            height: 1.5rem;
            margin-bottom: -25px;
          }

          h2 {
            color: white;
          }
        }

        .para {
          color: ${({ theme }) => theme.colors.lightblack};
          font-weight: 500;
          font-size: 16px;
        }
      }

      .container-12 {
        border-bottom: 1px solid ${({ theme }) => theme.colors.lightblack};
        width: 250px;
        margin-bottom: 20px;
        margin-top: -10px;
      }

      .container-13 {
        div {
          display: flex;
          /* justify-content: center; */
          align-items: center;
          gap: 10px;
          /* border:2px solid white; */
          margin-bottom: -25px;
          margin-top: -15px;
          font-size: 13px;
          cursor: pointer;

          p {
            color: ${({ theme }) => theme.colors.white};
            text-decoration: none;
            &:hover {
              color: ${({ theme }) => theme.colors.yellow};
            }

            .link{
              color: ${({ theme }) => theme.colors.white};
              text-decoration: none;
              &:hover {
              color: ${({ theme }) => theme.colors.yellow};
            }
            }
          }
          h4 {
            padding-top: 6px;
            color: ${({ theme }) => theme.colors.yellow};
          }
        }
      }
    }

    .container-2 {
      .container-21 {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        gap: 3rem;

        p {
          margin-bottom: -15px;
        }

        .image {
          padding-top: 10px;
        }

        .cont21 {
          margin-left: -30px;
          p {
            color: ${({ theme }) => theme.colors.yellow};
            font-size: 12px;
          }

          h4 {
          }
        }
      }
    }

    .container-3 {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    .link31 {
      display: block;
      padding-bottom: 10px;
      text-decoration: none;
      color: ${({ theme }) => theme.colors.lightblack};
      font-weight: 500;
      font-size: 15px;
    }

    .container-4 {
      /* margin-left: 100px; */
      p {
        color: ${({ theme }) => theme.colors.lightblack};
        font-weight: 500;
      }
      .container-41{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 40px;
        .input{
        
        width: 210px;
        height: 40px;
        border: none;
        /* border-top-left-radius: 20px;
        border-bottom-left-radius: 20px; */
        padding-left: 20px;
        font-size: 15px;

        
      }

      .btn{
        height: 42px;
        width: 100px;
        background-color: ${({ theme }) => theme.colors.yellow};
        color: ${({ theme }) => theme.colors.darkgreen};
        border: none;
        /* border-top-right-radius: 20px;
        border-bottom-right-radius: 20px; */
        
      }
      }

    }
  }
`;

export default function FooterComponnet() {
 
    const handleLinkClick = () => {
      window.open('https://goo.gl/maps/BTyFr5UAWJQaNBTj6', '_blank');
    };
  
  return (
    <Wrapper>
      <div className="container">
        <div className="container-1">
          <div className="container-11">
            <NavLink to="/" className="Link">
              <img src={logo} alt="BOtanic" className="image" />
            </NavLink>
            <NavLink to="/" className="Link">
              <h2>The Botanic Scanner</h2>
            </NavLink>
            <p className="para">
            Cutting-edge platform for rapid crop <br/>disease detection using AI. Accurate, real-time <br/> analysis. Empowering farmers to protect yields and improve sustainability.
            </p>
          </div>
          <div className="container-12"> </div>
          <div className="container-13">
            <div>
              <h4>
                <FaPhoneSquareAlt />
              </h4>
              <p><NavLink className="link" to="tel:+923194113378">+92 319 411 3378</NavLink></p>
            </div>
            <div>
              <h4>
                <MdEmail />
              </h4>
              {/* <p><NavLink to="tel:+923194113378">+92 319 411 3378</NavLink></p> */}
              <p><NavLink className="link" to="mailto:thebotanicscanner@gmail.com">thebotanicscanner@gmail.com</NavLink></p>
            </div>
            <div>
              <h4>
                <FaMapMarkerAlt />
              </h4>
              {/* <p><a href="https://www.google.com/maps?q=37.7749,-122.4194" target="_blank" rel="noopener noreferrer"/>Arfa Kareem Block, UOG, Gujrat</p> */}
             <p><a href="#/" className="link" onClick={handleLinkClick}>
        Arfa Kareem Block, UOG, Gujrat
      </a></p> 
            </div>
          </div>
        </div>
        <div className="container-2">
          <h2>News</h2>
          <div className="container-21">
            <div className="image">
              <img src={image1} alt="" />
            </div>
            <div className="cont21">
              <p>20 Jul, 2021</p>
              <h5>A Clean Water Gives More Good Taste</h5>
            </div>
          </div>
          <div className="container-21">
            <div className="image">
              <img src={image2} alt="" />
            </div>
            <div className="cont21">
              <p>20 Jul, 2021</p>
              <h5>A Clean Water Gives More Good Taste</h5>
            </div>
          </div>
        </div>
        <div className="container-3">
          <h3>Explore</h3>

          <NavLink className="link31" to="/service">Our Services</NavLink>
          <NavLink className="link31" to="/about">About Us</NavLink>
          <NavLink className="link31" to="/contact">Get IN Touch</NavLink>
          <NavLink className="link31" to="/cultivation">Cultivate Your Crop</NavLink>
          {/* <NavLink className="link31">AI Chatbot</NavLink> */}
        </div>
        <div className="container-4">
          <h3>NewSletter</h3>
          <p>Sign up now to get daily latest news & updates from us</p>
          <div className="container-41">
          <input type="text" className="input" placeholder={`Newsletter ${String.fromCharCode(8658)}`} />
          <button className="btn">send</button>
          </div>
          
        </div>
      </div>
    </Wrapper>
  );
}
