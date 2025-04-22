import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import logo from "../logo58.png";

const Heading = styled.section`
  /* width: 890px; */
  /* display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  margin-top: 100px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkgreen}; */
  .container {
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

    h1 {
      margin-top: -8px;
      margin-bottom: 10px;
      font-size: 40px;
      line-height: 1em;
      font-weight: 700;
      text-transform: none;
      letter-spacing: -0.04em;
      color: ${({ theme }) => theme.colors.background};
    }

    p {
      font-size: 14px;
      line-height: 20px;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: ${({ theme }) => theme.colors.lightblack};
    }
  }
`;

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  margin-bottom: 40px;
  margin-top: 20px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
  width: 500px;
  background-color: ${({ theme }) => theme.colors.lightgray};
  padding: 40px 30px 55px 30px;
  border-radius: 10px;
  margin-top: 20px;
  /* border: 2px solid black;
  padd */

  .container-1 {
    margin-bottom: -10px;
    h3 {
      margin-bottom: -15px;
      color: ${({ theme }) => theme.colors.yellow};
    }

    p {
      color: ${({ theme }) => theme.colors.lightblack};
    }
  }

  .container-2 {
    h3 {
      margin-bottom: -10px;
      color: ${({ theme }) => theme.colors.yellow};
    }
    h4 {
      margin-bottom: -15px;
      color: ${({ theme }) => theme.colors.yellow};
    }
    p {
      color: ${({ theme }) => theme.colors.lightblack};
      margin-bottom: -10px;
    }
  }
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
  width: 430px;

  h1 {
    color: ${({ theme }) => theme.colors.darkgreen};
    font-size: 25px;
  }

  label {
    font-weight: 500;
  }

  .textbox-container {
    display: flex;
    justify-content: center;
    gap: 0.3rem;
    flex-direction: column;
    width: 100%;
    margin-bottom: 2px; /* Add a gap between each input field and label */

    input {
      padding: 10px 10px;
      border-radius: 4px;
      border: none;
      /* background-color: #f2f2f2; */
      flex: 1;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      background-color: ${({ theme }) => theme.colors.lightgray};
      width: 100%;
      margin-bottom: 10px;
    }
  }
`;

const Button = styled.button`
  padding: 10px 10px;
  width: 450px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.darkgreen};
  border: none;
  cursor: pointer;
  /* width: 100%; Set the width to 100% */
  margin-left: 25px;
  margin-top: 10px;
  /* font-size:15px; */
  font-weight: bold;

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkgreen};
    color: ${({ theme }) => theme.colors.white};
  }
`;

const Predicted = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  /* width: 200px; */
  margin-left: 270px;
  margin-bottom: 100px;
  p {
    background-color: lightgreen;
    padding: 40px 30px;
    font-size: 20px;
    border-radius: 8px;
  }
`;

const CropRecomendation = () => {
  const [prediction, setPrediction] = useState("");
  const [inputData, setInputData] = useState({
    N: 0,
    P: 0,
    K: 0,
    temperature: 0,
    humidity: 0,
    ph: 0,
    rainfall: 0,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputData({ ...inputData, [name]: parseFloat(value) });
  };

  const handlePredict = () => {
    axios
      .post("http://127.0.0.1:4000/predict", inputData)
      .then((response) => {
        setPrediction(response.data.prediction);
      })
      .catch((error) => {
        console.error("Error making prediction:", error);
      });
  };

  return (
    <>
      <Heading>
        <div className="container">
          <img src={logo} alt="" className="logo1" />
          <p>NOW YOU CAN FIND </p>
          <h1>SUITABLE CROP FOR YOUR LAND</h1>
        </div>
      </Heading>
      <Wrapper>
        <Container>
          <div className="container-1">
            <h3>Introduction</h3>
            <p>
              Farming made easy! Our Crop Recommender is your secret weapon for
              choosing the best crops for your farm. Just enter your soil and
              climate details, and watch the magic happen. In seconds, we'll
              reveal the top crops for your success. Say hello to smart farming
              and farewell to uncertainty! Let's grow together! 🌱🚀
            </p>
          </div>

          <div className="container-2">
            <h3>HOW WE USE IT ❓</h3>
            <h4>Step 1: Enter Essential Details</h4>
            <p>
              Begin your journey to farming excellence by providing key
              information about your farm's soil and climate conditions. Input
              the ratios of Nitrogen (N), Phosphorous (P), and Potassium (K) in
              your soil, as well as the pH value. Alongside, share vital
              environmental parameters like the average temperature, relative
              humidity, and annual rainfall in your region. Rest assured, the
              more accurate the data, the more tailored and accurate your crop
              recommendations will be.
            </p>

            <h4>Step 2: Unleash the Magic</h4>
            <p>
              Click "Get Recommendation" to activate advanced algorithms and
              data analysis.
            </p>

            <h4>Step 3: Personalized Crop Suggestions</h4>
            <p>
              Receive tailored crops backed by data-driven predictions in
              seconds.
            </p>

            <h4>Step 4: Farm with Confidence</h4>
            <p>
              Optimize yield, reduce risks, and achieve success with precision.
            </p>

            {/* <h3>Step 5: Unlock Continuous Improvement</h3>
          <p>Refresh page for new crop options and refine choices for ongoing success.</p> */}
          </div>
        </Container>

        <Form>
          <h1>Find Out Most Suitable Crop To Grow In Your Farm 🌱🌞</h1>
          <div className="textbox-container">
            <label>Nitrogen:</label>
            <input
              type="number"
              name="N"
              value={inputData.N}
              onChange={handleInputChange}
              placeholder="Nitrogen"
            />
          </div>
          <div className="textbox-container">
            <label>Phosphorus:</label>
            <input
              type="number"
              name="P"
              value={inputData.P}
              onChange={handleInputChange}
              placeholder="Phosphorus"
            />
          </div>
          <div className="textbox-container">
            <label>Potassium:</label>
            <input
              type="number"
              name="K"
              value={inputData.K}
              onChange={handleInputChange}
              placeholder="Potassium"
            />
          </div>
          <div className="textbox-container">
            <label>Temperature in C:</label>
            <input
              type="number"
              name="temperature"
              value={inputData.temperature}
              onChange={handleInputChange}
              placeholder="Temperature in C"
            />
          </div>
          <div className="textbox-container">
            <label>Humidity in %:</label>
            <input
              type="number"
              name="humidity"
              value={inputData.humidity}
              onChange={handleInputChange}
              placeholder="Humidity in %"
            />
          </div>
          <div className="textbox-container">
            <label>pH:</label>
            <input
              type="number"
              name="ph"
              value={inputData.ph}
              onChange={handleInputChange}
              placeholder="pH"
            />
          </div>
          <div className="textbox-container">
            <label>Rainfall in mm:</label>
            <input
              type="number"
              name="rainfall"
              value={inputData.rainfall}
              onChange={handleInputChange}
              placeholder="Rainfall in mm"
            />
          </div>
          <Button onClick={handlePredict}>Get Recomendation</Button>
        </Form>
      </Wrapper>
      <Predicted>
        {prediction && (
          <div>
            <h1>Result 🔎</h1>
            <p>
              <strong>{prediction}</strong> is Recomended for Your Land
            </p>
          </div>
        )}
      </Predicted>
    </>
  );
};

export default CropRecomendation;
