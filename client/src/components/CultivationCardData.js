import React from "react";
import CultivationCard from "./CultivationCard";
import scorn from "../images/scorn.jpg";
import scotton from "../images/scotton.jpg";
import srice from "../images/srice.jpg";
import ssugarcane from "../images/ssugarcane.jpg";
import swheat from "../images/swheat.jpg";
import logo from "../logo58.png";
import styled from "styled-components";

const Wrapper = styled.div`
margin-bottom: 200px;
.container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  margin-top: 50px;
  /* margin-bottom: 50px; */
    .logo1 {
      width: 40px;
      height: 30px;
      /* background-color: lightgray; */
    }

    h1{
      margin-top: -8px;
      margin-bottom: 10px;
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
  }`;

export default function CultivationCardData() {
  const data = [
    {
      id: 1,
      para:
        "Corn, also known as maize, is a versatile grain crop cultivated worldwide. It is used as a staple food, animal feed, and raw material for various industrial applications. Corn plants produce cobs with rows of kernels, and its cultivation ranges from temperate to tropical regions.",
      heading: "Corn/Maize",
      img: scorn,
      route:"/culcorn",
    },
    {
      id: 2,
      para:
        "Cotton is a widely grown fiber crop known for its soft, breathable fibers. It is cultivated in warm climates and is a major source of natural textile fiber, supporting the global textile industry. Cotton plants produce fluffy bolls containing seeds surrounded by long, fine fibers.",
      heading: "Cotton",
      img: scotton,
      route:"/culcotton",
    },
    {
      id: 3,
      para:
        "Rice is a staple food for a large part of the world's population, particularly in Asia. It is an aquatic crop commonly grown in flooded paddy fields, requiring warm temperatures and ample water availability. Rice cultivation practices vary, with both upland and irrigated systems used.",
      heading: "Rice",
      img: srice,
      route:"/culrice",
    },
    {
      id: 4,
      para:
        "Sugarcane is a tall, perennial grass that is primarily cultivated for its high sugar content. It is a tropical crop grown in many countries, serving as a significant source of sugar production and a valuable feedstock for biofuel production.",
      heading: "Sugarcane",
      img: ssugarcane,
      route:"/culsugarcane",
    },
    {
      id: 5,
      para:
        "Wheat is one of the most widely cultivated cereal crops globally, known for its nutritional value and versatility. It is a cool-season grain crop that plays a crucial role in global food security, with various wheat varieties adapted to different climates and growing conditions.",
      heading: "Wheat",
      img: swheat,
      route:"/culwheat",
    },
  ];

  const culData = data.map((item, index) => (
    <CultivationCard
      para={item.para}
      heading={item.heading}
      img={item.img}
      alignRight={index % 2 === 1}
      key={item.id}
      route={item.route}
    />
  ));
  return <Wrapper>
    <div className="container">
      <img src={logo} alt="" className="logo1" />
        <p>NOW YOU CAN LEARN ABOUT </p>
        <h1>CULTIVATION OF YOUR CROP</h1>
      </div>
    {culData}</Wrapper>;
}
