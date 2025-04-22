import React from "react";
import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";
import { analyze } from "./Utils";
import { CiPaperplane } from "react-icons/ci";
import { IconContext } from "react-icons";

const Wrapper = styled.section`
  .chat-message {
    display: flex;
    /* align-items: flex-start; */
    justify-content: center;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.lightgray};
    margin: 10px 500px 0 500px;
    /* padding-bottom: 20px; */
    /* padding-top: 20px; */
    /* height: 650px; */
    border-radius: 25px;
    max-height: 630px;
    max-width: 600px;
    overflow-y: scroll;
    scrollbar-width: none;  
    -ms-overflow-style: none; 
    /* position: fixed; */
    /* z-index: 2000; */

    ::-webkit-scrollbar {
      width: 0; 
    }

    .row {
      display: flex;
      justify-content: center;
      align-items: center;
      position: sticky;
      top: 0;
      background-color: ${({ theme }) => theme.colors.lightgray};
      color: ${({ theme }) => theme.colors.darkgreen};
      padding: 20px;
      font-size: 30px;
    }

    .d-flex {
      position: sticky;
      bottom: 0;
      /* margin-top: 20px; */
      /* margin-bottom: 10px; */
      padding: 10px 20px 20px 30px;
      background-color: ${({ theme }) => theme.colors.lightgray};

      display: flex;
      align-items: center;
      gap: 10px;

      .input {
        height: 45px;
        width: 450px;
        border: none;
        border-radius: 20px;
        padding-left: 20px;
      }

      .btn {
        height: 45px;
        width: 50px;
        background-color: ${({ theme }) => theme.colors.darkgreen};
        color: white;
        border: none;
        border-radius: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }

  .message-container {
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 10px;
    /* background-color: ${({ theme }) => theme.colors.white}; */
  }
`;

export default function Chatbot() {
  const [messages, setMessages] = useState([
    {
      message: "Hi, May I have your name",
    },
  ]);

  const [text, setText] = useState("Enter Your Text Here");
  const chatMessageRef = useRef(null);

  const onSend = () => {
    let list = [...messages, { message: text, user: true }];
    if (list.length > 2) {
      const reply = analyze(text);
      list = [...list, { message: reply }];
    } else {
      list = [
        ...list,
        {
          message: `Hi,${text}`,
        },
        {
          message: "How can I help you",
        },
      ];
    }
    setMessages(list);
    setText("Enter Your Text Here");
  };

  const clearInputText = () => {
    if (text === "Enter Your Text Here") {
      setText("");
    }
  };

  const restoreInputText = () => {
    if (text.trim() === "") {
      setText("Enter Your Text Here");
    }
  };

  // useEffect(() => {
  //   chatMessageRef.current.scrollTop = chatMessageRef.current.scrollHeight;
  // }, [messages]);

  useEffect(() => {
    const chatMessageContainer = chatMessageRef.current;
    chatMessageContainer.scrollTop = chatMessageContainer.scrollHeight - chatMessageContainer.clientHeight;
  }, [messages]);

  return (
    <Wrapper>
      <div className="chat-message" ref={chatMessageRef}>
        <div className="row">
          <h1>Botanic ChatBot</h1>
        </div>
        {messages.length > 0 &&
          messages.map((data, index) => (
            <div key={index} className="message-container">
              <ChatMessage {...data} />
            </div>
          ))}

        <div className="d-flex">
          <input
            type="search"
            className="input"
            value={text}
            onClick={clearInputText}
            onChange={(e) => setText(e.target.value)}
            onBlur={restoreInputText}
            autoCorrect="on"
          />
          <button type="button" className="btn" onClick={onSend}>
            <IconContext.Provider value={{ color: "white", size: "20px" }}>
              <CiPaperplane />
            </IconContext.Provider>
          </button>
        </div>
      </div>

      <div className="copyright"></div>
    </Wrapper>
  );
}
