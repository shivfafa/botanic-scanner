import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import MainImageSection from "./MainImageSection";
import image from "../images/drag.jpg";
import corn from "../images/corn2.jpg";
import DialogFlow from "./DialogFlow";
import { GiCorn } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.section`
  /* border: 2px solid black; */
  margin: 100px 450px;
  padding: 20px;

  h1 {
    margin-bottom: 20px;
  }
`;

const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

const UploadArea = styled.div`
  width: 650px;
  height: 350px;
  border: 2px dashed ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: border-color 0.3s ease;

  &.highlight {
    border-color: #66cdaa;
  }
`;

const Para = styled.h4`
  margin-top: 5px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.darkgray};
`;

const UploadIcon = styled.img`
  width: 150px;
  height: 150px;
  margin-top: 20px;
`;

const FileInput = styled.input`
  display: none;
`;

const SelectButton = styled.button`
  margin-top: 5px;
  background-color: ${({ theme }) => theme.colors.yellow};
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 15px 18px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.background};
  }
`;

const RemoveButton = styled.button`
  width: 140px;
  margin-top: 5px;
  background-color: ${({ theme }) => theme.colors.red};
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 14px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkred};
  }
`;

const Predict= styled.section`
margin-top: 40px;
.heading-1{
  font-size: 40px;
  line-height: 80px;
  color: ${({theme})=>theme.colors.darkgreen};
}
.result{

  .heading-2{
  font-size: 20px;
  line-height: 2px;
  color: ${({theme})=>theme.colors.darkred};
}
.heading-3{
  font-size: 20px;
  color: ${({theme})=>theme.colors.background};
}

}
.btn{
  margin-top: 10px;
  padding: 15px 25px;
  border-radius: 10px;
  font-weight: bold;
  border: none;
  font-size: 15px;
  background: ${({theme})=>theme.colors.yellow};
  color: ${({theme})=>theme.colors.darkgreen};
  &:hover{
    background: ${({theme})=>theme.colors.darkgreen};
  color: white;
  }
}
`;





export default function CornDetection() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const fileInputRef = useRef(null);

 

  

  const handleShowAlert = () => {
    setShowAlert(true);
  };

  const handleHideAlert = () => {
    setShowAlert(false);
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    handleFileUpload(event.target.files[0]);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setSelectedFile(event.dataTransfer.files[0]);
    handleFileUpload(event.dataTransfer.files[0]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleFileUpload = async (file) => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:8000/predict/corn", {
        method: "POST",
        body: formData,
      });      

      if (response.ok) {
        const data = await response.json();
        setPrediction(data);
      } else {
        console.error("Error:", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSelectButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setPrediction(null);
  };

  const title = "Corn Disease Detection";
  const cornimage = corn;
  const color = "white";

  const navigate = useNavigate();

  const redirectToLogin = () => {
    const token = localStorage.getItem('TOKEN');
    if (!token) {
      const userDecision = window.confirm(
        "Login is needed to Detect the Disease of Your Crop. Do you want to log in?"
      );
      if (userDecision) {
        navigate('/login');
      } else {
        navigate('/'); 
      }
    }
  };

 
  useEffect(() => {
    redirectToLogin();
    setShowAlert(true);
  }, []);
    
 

  const getPrecautionPath = (predictionClass) => {
    switch (predictionClass) {
      case "corn_blight":
        return "/blight";
      case "corn_common_rust":
        return "/commonrust";
      case "corn_gray_leaf_spot":
        return "/grayleafspot";
      default:
        return "/cornhealth";
    }
  };


  return (
    <>
      <MainImageSection title={title} image={cornimage} color={color} />

      <Wrapper>
        <h1>Corn Crop Disease Detection</h1>
        <UploadContainer>
          <UploadArea
            className={selectedFile ? "highlight" : ""}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            {selectedFile ? (
              <>
                <UploadIcon
                  src={URL.createObjectURL(selectedFile)}
                  alt="Uploaded Icon"
                />
                <p>{selectedFile.name}</p>
                <RemoveButton onClick={handleRemoveFile}>Remove</RemoveButton>
              </>
            ) : (
              <>
                <UploadIcon src={image} alt="Upload Icon" />
                <Para>
                  <p>Drag & Drop or Click Upload Button to Upload Image</p>
                </Para>

                <SelectButton onClick={handleSelectButtonClick}>
                  Upload Image
                </SelectButton>
              </>
            )}
            <FileInput
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              ref={fileInputRef}
            />
          </UploadArea>
        </UploadContainer>
        {prediction && (
          <Predict>
            <h1 className="heading-1">Result 🔎</h1>
            {/* <h1 className="heading-1">Prediction</h1> */}
            <div className="result">
            <h3 className="heading-2">Disease: {prediction.class}</h3>
            {/* <h3 className="heading-3">Confidence: {prediction.confidence}</h3> */}
            
            </div>
            <NavLink to={getPrecautionPath(prediction.class)}><button className="btn">Precautions & Treatment</button></NavLink>
            
            
          </Predict>
        )}
      </Wrapper>
      {showAlert && (
        <DialogFlow
          icon={<GiCorn />}
          title="Corn/Maize Disease Detection"
          message1="1. Upload/Choose a Clear Image of Corn Leaf"
          message2="2. Avoid Blurry or Low-Quality Images"
          message3="3. Use the Upload Image Button to Upload Photo From Your Device"
          message4="4. You Can Also Drag and Drop Image"
          primaryButtonText="OK"
          onPrimaryButtonClick={handleHideAlert}
        />
      )}
    </>
  );
}
