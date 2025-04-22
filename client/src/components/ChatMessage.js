import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { BsFillChatDotsFill } from "react-icons/bs";
import styled from "styled-components";

const Wrapper = styled.section`
  .message-right {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end; /* Updated: Align items to the right */
    margin-bottom: 10px;
    margin-right: 30px;

    /* max-width: 450px; */
    .message-text1 {
      background-color: ${({ theme }) => theme.colors.darkgreen};
      color: ${({ theme }) => theme.colors.white};
      border-radius: 25px;
      padding: 0.5em 1em;
      font-size: 17px;
      margin-left: 100px;
    }

    .message-icon {
      /* font-size: 30px;
      margin-left: 5px;
      max-width: 25px; */
      font-size: 30px;
      margin-left: 5px;
      margin-right: 5px;
      flex-shrink: 0;
      color: ${({ theme }) => theme.colors.darkgreen};
    }
  }

  .message-left {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    margin-left: 30px;
    .message-text2 {
      background-color: ${({ theme }) => theme.colors.yellow};
      border-radius: 25px;
      padding: 0.5em 1em;
      font-size: 17px;
      margin-right: 100px;
    }

    .message-icon {
      /* margin-right: 5px;
      font-size: 30px;
      max-width: 30px; */
      font-size: 30px;
      margin-left: 5px;
      margin-right: 5px;
      flex-shrink: 0;
      color: ${({ theme }) => theme.colors.darkgreen};
    }
  }
`;

export default function ChatMessage(props) {
  return (
    <Wrapper>
      {props.user ? (
        <span className="message-right">
          <span className="message-text1">{props.message}</span>
          <FaUserAlt className="message-icon" />
        </span>
      ) : (
        <span className="message-left">
          <BsFillChatDotsFill className="message-icon" />
          <span className="message-text2">{props.message}</span>
        </span>
      )}
    </Wrapper>
  );
}
