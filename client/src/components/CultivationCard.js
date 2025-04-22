import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  flex-direction: column;
`;

const Container = styled.div`
  width: 70%;
  height: 200px;
  display: flex;
  align-items: center;
  gap: 2rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 10px;

  .container-1 {
    padding-left: 40px;
    .image {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 150px;
      height: 150px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
      border-radius: 50%;
    }
  }

  .container-2 {
    flex: 1;
    padding: 10px 70px 0px 10px;

    .heading {
      font-size: 30px;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.yellow};
      line-height: 1.7px;
    }

    .para {
      color: ${({ theme }) => theme.colors.lightblack};
    }

    .navlink {
      text-decoration: none;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.background};
    }
  }

  ${({ alignRight }) =>
    alignRight &&
    `
    flex-direction: row-reverse;
.container-1{
    padding-right:40px;
}
    .container-2 {
      padding: 10px 10px 0px 70px;
      text-align: right;
    }
  `}
`;

export default function CultivationCard({ para, heading, img, alignRight,route }) {
  return (
    <Wrapper>
      <Container alignRight={alignRight}>
        <div className="container-1">
          <img src={img} alt="" className="image" />
        </div>
        <div className="container-2">
          <h1 className="heading">{heading}</h1>
          <p className="para">
            {para} <NavLink to={route} className="navlink">....Read More</NavLink>
          </p>
        </div>
      </Container>
    </Wrapper>
  );
}
