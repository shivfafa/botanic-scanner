import React, { useState } from "react";
import styled from "styled-components";
import Chatbot from "./Chatbot";
import { SiChatbot} from "react-icons/si";
import { AiOutlineClose } from "react-icons/ai";

const Wrapper = styled.section`
  .floating-button-container {
    position: fixed;
    bottom: 30px;
    right: 40px;
    z-index: 3;

    .floating-button {
      background-color: ${({ theme }) => theme.colors.yellow};
      color: #fff;
      border: none;
      height: 70px;
      width: 70px;
      font-size: 25px;
      padding-top: 10px;
      border-radius: 50%;
    }
  }

  .chatbot-container {
    position: fixed;
    bottom: 40px;
    right: -385px;
    z-index: 2;
  }
`;
const FloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [icon, setIcon] = useState(<SiChatbot />);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setIcon(isOpen ?  <SiChatbot /> : <AiOutlineClose />);
  };

  return (
    <Wrapper>
      <div className="floating-button-container">
        <button className="floating-button" onClick={toggleChat}>
          {icon}
        </button>
      </div>
      {isOpen && (
        <div className="chatbot-container">
          <Chatbot />
        </div>
      )}
    </Wrapper>
  );
};

export default FloatingButton;
