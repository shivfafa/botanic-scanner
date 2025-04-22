import React from 'react'
import image from "../images/recomend.jpg";
import styled from 'styled-components';
import logo from "../logo58.png";
import { NavLink } from 'react-router-dom';

const Wrapper= styled.section`
 display: flex;
 /* justify-content: center; 
 align-items: center;  */
 margin: 200px 0 200px 0;

 .container-1{
    display: flex;
 justify-content: flex-start; 
 align-items: center;
    img{
        width: 700px;
        height: 550px;
    }
 }

 .container-2{
    padding-left: 70px;
    width: 100%;
    background-color: ${({theme})=>theme.colors.background};
    .head{
        display: flex;
    /* justify-content: center;
    align-items: center; */
    flex-direction: column;
    /* margin-top: 50px; */
    /* margin-bottom: 50px; */
    padding-top: 60px;
    .logo1 {
      width: 40px;
      height: 30px;
      background-color: white;
      border-radius: 50%;
      padding: 10px;
    }

    h1 {
      margin-top: -8px;
      margin-bottom: 10px;
      font-size: 40px;
      line-height: 1.3em;
      font-weight: 700;
      text-transform: none;
      /* letter-spacing: -0.04em; */
      color: ${({ theme }) => theme.colors.white};
      letter-spacing: 1px;
    }

    p {
      font-size: 10px;
      line-height: 20px;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: ${({ theme }) => theme.colors.white};
    }
    }

    .para{
        color: ${({theme})=>theme.colors.gray};
        padding-right: 90px;
        padding-top: 25px;
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
      padding: 18px 50px 18px 50px;
      border-radius: 10px;
      letter-spacing: 0.1em;
      -webkit-transition: all 0.3s linear;
      transition: all 0.3s linear;
      /* overflow: hidden; */
      /* z-index: 1; */
      margin-top: 45px;
      width: 13rem;
      height: 4rem;

      &:hover {
        background-color: ${({ theme }) => theme.colors.background};
        border: 1px solid ${({ theme }) => theme.colors.yellow};;
        color: ${({ theme }) => theme.colors.white};
      }
    }
 }


`;

export default function RecomendCard() {
  return (
    <Wrapper>
      
        <div className="container-1">
            <img src={image} alt=""/>
        </div>
        <div className="container-2">
        <div className="head">
          <img src={logo} alt="" className="logo1" />
          <p>NOW YOU CAN CHECK ABOUT </p>
          <h1>SUITABLE CROP FOR <br/> YOUR LAND</h1>
        </div>

        <div className="para">Input
              the ratios of Nitrogen (N), Phosphorous (P), and Potassium (K) in
              your soil, as well as the pH value. Alongside, share vital
              environmental parameters like the average temperature, relative
              humidity, and annual rainfall in your region. Rest assured, the
              more accurate the data, the more tailored and accurate your crop
              recommendations will be.</div>
              <NavLink to="/croprecomendation"><button className="btn">Get Recomendation</button></NavLink>
        </div>

       
    
    </Wrapper>
  )
}
