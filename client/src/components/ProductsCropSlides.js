import React from "react";
import styled from "styled-components";
// import { GiCorn } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { IconContext } from "react-icons";


const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  
 

  .card {
    width: 230px;
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

    .card-description1 {
      font-size: 16px;
      color: ${({theme})=>theme.colors.darkgreen};
      margin-top: 10px;
      font-size:25px;
      font-weight: bold;
      display: flex;
      justify-content: center;
      text-align: center;
    }

    .card-description2 {
      font-size: 16px;
      color: ${({theme})=>theme.colors.black};
      margin-top: 10px;
      padding-left: 10px;
      padding-right: 10px;
      font-size:15px;
      font-weight: 500;
      display: flex;
      justify-content: center;
      text-align: center;
      color: ${({theme})=>theme.colors.lightblack};
    }

    .card-button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 25px;
  margin: 40px 42px 10px 42px;
  /* width: 100px; */
  background-color: ${({theme})=>theme.colors.yellow};
  color: ${({theme})=>theme.colors.lightblack};
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${({theme})=>theme.colors.background};
    color: ${({theme})=>theme.colors.white};
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

export default function ProductsCropSlides(props) {
  const IconComponent = props.img2;
  return (
    <Wrapper>
      <div className="card">
        <img src={props.img} alt="" className="card-image" />
        <p className="card-description1">{props.name}</p>
        <p className="card-description2">
          {props.description}
        </p>
        <NavLink to={props.route} className="card-button">
          Detect Now
        </NavLink>
      </div>
      <div className="image-1">
        <IconContext.Provider value={{ className: "top-react-icons" }}>
        {IconComponent && <IconComponent />}
        </IconContext.Provider>
      </div>
    </Wrapper>
  );
}