import React from "react";
import styled from "styled-components";
import {
  FaTwitter,
  FaFacebook,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 52rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.background};
  padding: 15px 0 17px;

  .container-1{
    p{
      font-size: 14px;
    font-weight: 500;
    }
  }
  .container-2 {
      gap: 1.3rem;
      display: flex;
      align-items: center;
     font-size: 13px;
      div {
        &:hover {
          color: ${({ theme }) => theme.colors.yellow};
        }
      }
    }
`;

export default function BelowFooter() {
  return (
    <Wrapper>
      <div className="container-1">
        <p>© Copyright 2023 by TheBotanicScanner.com</p>
      </div>
      <div className="container-2">
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
    </Wrapper>
  );
}
