import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductsCropSlides from "./ProductsCropSlides";
import styled from "styled-components";
import cotton from "../images/cotton.jpg";
import rice from "../images/rice.jpg";
import sugarcane from "../images/sugarcane.jpg";
import wheat from "../images/wheat.jpg";
import corn from "../images/corn.jpg";
import { GiCorn } from "react-icons/gi";
import logo from "../logo58.png";
import image3 from "../images/botanic3.jpg";

const Wrapper = styled.section`
  /* margin-top: 150px; */
  margin-bottom: 400px;
  /* border: 2px solid black; */
  
  padding: 100px 250px;
  /* background-image: url(${image3}); */
  background-color: ${({theme})=> theme.colors.lightgray};
  background-size: cover;
  background-position: center;
  /* Additional styling properties */
  max-width: 100%;
  height: 273px;
  
  
  .container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .logo1 {
      width: 40px;
      height: 30px;
      /* background-color: lightgray; */
    }

    h1{
      margin-top: -8px;
      margin-bottom: 60px;
      font-size: 40px;
    line-height: 1em;
    font-weight:700;
    text-transform: none;
    letter-spacing: -0.04em;
    color: ${({theme})=> theme.colors.background};
    }

    p{
      font-size: 14px;
    line-height: 20px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: ${({theme})=> theme.colors.lightblack};
    }
  }
`;

export default function CropSlides() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4, // Show 4 cards at a time on desktop
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const data = [
    {
      id: 1,
      img: corn,
      name: "Corn/Maize",
      description: "Corn, also known as maize, is a versatile grain crop cultivated worldwide. ",
      route : "/corn",
      img2: GiCorn,
      
    },
    {
      id: 2,
      img: cotton,
      name: "Cotton",
      description: "Cotton, a natural fiber, is widely cultivated and utilized for numerous purposes.",
      img2: GiCorn,
      route : "/cotton",
    },
    {
      id: 3,
      img: rice,
      name: "Rice",
      description: "Rice, a staple food for more than half of the world's population, with a rich history.",
      img2: GiCorn,
      route : "/rice",
    },
    {
      id: 4,
      img: sugarcane,
      name: "Sugarcane",
      description: " Sugarcane,  is a significant crop cultivated regions around the world.",
      img2: GiCorn,
      route : "/sugarcane",
    },
    {
      id: 5,
      img: wheat,
      name: "Wheat",
      description: " Wheat, one of the most widely cultivated crops, plays a role in food production.",
      img2: GiCorn,
      route : "/wheat",
    },
   
  ];

  const productData = data.map((item) => (
    <ProductsCropSlides
      name={item.name}
      img={item.img}
      description={item.description}
      img2={item.img2}
      route={item.route}
    />
  ));

  return (
    <Wrapper>
      <div className="container">
      <img src={logo} alt="" className="logo1" />
        <p>WHAT WE'RE DOING</p>
        <h1>Services We Offer</h1>
      </div>
      <Carousel responsive={responsive} className="carousal">
        {productData}
      </Carousel>
    </Wrapper>
  );
}
