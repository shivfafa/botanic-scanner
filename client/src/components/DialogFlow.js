import React from "react";
import styled from "styled-components";

const DialogIcon = styled.div`
  font-size: 40px;
  /* margin-bottom: 10px; */
  color: ${({theme})=>theme.colors.yellow};
  margin-top: 20px;
`;

const AlertOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AlertBox = styled.div`
  background-color: ${({theme})=>theme.colors.white};
  padding: 20px 60px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  text-align: center;

  h2 {
    margin-top: 0px;
    margin-bottom: 30px;
    color: ${({theme})=>theme.colors.darkgreen};
  }

  p {
    margin-bottom: 20px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    font-weight: 500;
  }

  
`;

const Button = styled.button`
  margin: 25px 5px;
  padding: 15px 60px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  

  &.primary {
    background-color: ${({theme})=>theme.colors.yellow};
    color: ${({theme})=>theme.colors.darkgreen};
  }

  &.secondary {
    background-color: ${({theme})=>theme.colors.darkgreen};
    color: #fff;
  }

  &:hover{
    background-color: ${({theme})=>theme.colors.darkgreen};
    color: ${({theme})=>theme.colors.white};
  }
`;

const DialogFlow = ({icon, title, message1,message2,message3,message4, primaryButtonText, secondaryButtonText, onPrimaryButtonClick, onSecondaryButtonClick }) => {
  return (
    <AlertOverlay>
      <AlertBox>
      {icon && <DialogIcon>{icon}</DialogIcon>}
      
       {/* <h5>{icon}</h5> */}
        <h2>{title}</h2>
        <p>{message1}</p>
        <p>{message2}</p>
        <p>{message3}</p>
        <p>{message4}</p>
        {primaryButtonText && (
          <Button className="primary" onClick={onPrimaryButtonClick}>
            {primaryButtonText}
          </Button>
        )}
        {secondaryButtonText && (
          <Button className="secondary" onClick={onSecondaryButtonClick}>
            {secondaryButtonText}
          </Button>
        )}
      </AlertBox>
    </AlertOverlay>
  );
};

export default DialogFlow;
