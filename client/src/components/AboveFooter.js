import React from 'react'
import {GiByzantinTemple} from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Wrapper = styled.section`
    .intro{
      display: flex;
      align-items: center;
    justify-content: center;
    gap: 5rem;
    padding: 50px 0 50px 0;
    background-color: ${({ theme }) => theme.colors.yellow};
    /* margin-bottom: 70px; */
    margin-top: 100px;

    .icon{
      font-size: 50px;
      display: flex;
      align-items: center;
    justify-content: center;
      background-color:${({ theme }) => theme.colors.darkgreen}; 
      width: 100px;
      height: 100px;
      border-radius: 50%;
      color:${({ theme }) => theme.colors.yellow};
    }
    
   .btn {
      /* position: relative; */
      display: inline-block;
      vertical-align: middle;
      color: ${({ theme }) => theme.colors.yellow};
      /* -webkit-appearance: none; */
      border: none;
      outline: none;
      background-color: ${({ theme }) => theme.colors.darkgreen};
      /* color: #334b35; */
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      padding: 18px 40px 18px;
      border-radius: 10px;
      letter-spacing: 0.1em;
      -webkit-transition: all 0.3s linear;
      transition: all 0.3s linear;
      /* overflow: hidden; */
      /* z-index: 1; */
      /* margin-top: 25px; */
      width: 13rem;
      height: 4rem;

      &:hover {
        background-color: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }
`;

export default function AboveFooter() {
  return (
    <Wrapper>
      <div className="intro">
        <div className="icon"><GiByzantinTemple/></div>
        <h1>We Are Leader in Agriculture Market</h1>
        <NavLink to="/service"><button className="btn">Detect Now</button></NavLink>
      </div>
    </Wrapper>
  )
}
