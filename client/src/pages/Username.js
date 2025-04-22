// import React, { useEffect } from "react";
import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import avator from "../images/avator.jpg";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { loginValidation } from "../helper/Validate";
import { useState } from "react";
import axios from "axios";
import cultivation from "../images/cultivation.jpg";
import { useContext } from "react";
import { UserContext } from "../App";
import { BsArrowRight } from "react-icons/bs";
import { IconContext } from "react-icons";

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: lightgray;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
`;

const Container1 = styled.div`
  background-color: #ffffff;
  /* border-radius: 8px; */
  /* box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1); */
  /* padding: 45px 32px 45px 32px; */
  text-align: center;
  height: 590px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  width: 830px;

  .image-container-1 {
    background-image: url(${cultivation});
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
`;

const Container = styled.div`
  background-color: #ffffff;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  /* border-left: 2px solid gray; */
  /* box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1); */
  padding: 46px 55px 45px 55px;
  text-align: center;
  height: 500px;
  /* width: 220px; */
  .toaster {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .title {
    margin-bottom: 16px;
  }

  h3 {
    font-size: 24px;
    margin-bottom: 8px;
    margin-top: 35px;
  }

  span {
    color: #888888;
    font-size: 14px;
  }

  .image {
    margin-bottom: 20px;

    img {
      width: 150px; /* Adjust width as needed */
      height: 150px; /* Adjust height as needed */
      border-radius: 50%;
      object-fit: cover;
    }
  }

  .textbox-container {
    display: flex;
    justify-content: center;
    margin-bottom: 16px;

    .input-container {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      flex-direction: column;

      input[type="email"] {
        padding: 12px 14px;
        border-radius: 4px;
        border: none;
        background-color: #f2f2f2;
        /* margin-right: 8px; */
        flex: 1; /* Set flex-grow to 1 to take up remaining width */
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        background-color: white;
        width: 100%;
      }

      input[type="password"] {
        padding: 12px 14px;
        border-radius: 4px;
        border: none;
        background-color: #f2f2f2;
        /* margin-right: 8px; */
        flex: 1; /* Set flex-grow to 1 to take up remaining width */
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        background-color: white;
        width: 100%;
      }
    }
  }

  .btn {
    margin-top: 20px;

    button[type="submit"] {
      padding: 12px 16px;
      border-radius: 5px;
      background-color: ${({ theme }) => theme.colors.darkgreen};
      color: ${({ theme }) => theme.colors.white};
      border: none;
      cursor: pointer;
      width: 100%; /* Set the width to 100% */

      &:hover {
        background-color: ${({ theme }) => theme.colors.yellow};
        color: ${({ theme }) => theme.colors.darkgreen};
      }
    }
  }

  .regText {
    font-size: 12px;
    font-weight: 500;

    .navlink {
      color: red;
      text-decoration: none;
    }
  }

  .regText1 {
    font-size: 12px;
    font-weight: 500;
    margin-left: 120px;
    margin-top: -20px;
    display: flex;
      align-items: center;

    .navlink {
      display: flex;
      align-items: center;
      color: blue;
      text-decoration: none;

      .global-class-name{
        /* padding-top: 10px; */
        margin-left: 2px;
      }
    }
  }
`;

export default function Username() {
  const { state, dispatch } = useContext(UserContext);

  const [email, setEmail] = useState("example123@gmail.com");
  const [password, setPassword] = useState("example123");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    axios
      .post("http://localhost:8080/login", {
        email: formik.values.email,
        password: formik.values.password,
      })
      .then((res) => {
        console.log(res);

        if (res.data.code === 500) {
          alert("user not found");
        }
        if (res.data.code === 404) {
          alert("Invalid Password");
        }
        if (res.data.code === 200) {
          dispatch({ type: "USER", payload: true });
          alert("login successfully");
          navigate("/");
          localStorage.setItem("TOKEN", res.data.token);
          localStorage.setItem("EMAIL", res.data.email);
          localStorage.setItem("NAME", res.data.name);
          localStorage.setItem("PROFILE", res.data.profile);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const formik = useFormik({
    initialValues: {
      username: "",
    },
    validate: loginValidation,
    // validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      // navigate("/password");
    },
  });

  return (
    <Wrapper>
      <Toaster className="toaster" reverseOrder={false}></Toaster>
      <Container1>
        <div className="image-container-1">
          {/* <h1 className="heading">Go to Home Page</h1> */}
        </div>
      </Container1>
      <Container>
        <div className="title">
          <div className="regText1">
            <p>
              <NavLink className="navlink" to="/">
                Go to Home Page
                <IconContext.Provider
                  value={{ color: "blue",size:"15px", style: { verticalAlign: 'middle' } , className: "global-class-name" }}
                >
                  <BsArrowRight />
                </IconContext.Provider>
                
              </NavLink>
            </p>
          </div>
          <h3>Hello Again!</h3>
          <span>Explore More by Connecting With Us</span>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="image">
            <img src={avator} alt="avatar" />
          </div>
          <div className="textbox-container">
            <div className="input-container">
              <input
                onChange={(e) => {
                  setEmail(e.target.values);
                }}
                value={email}
                {...formik.getFieldProps("email")}
                type="email"
                placeholder="Email"
              />

              <input
                value={password}
                onChange={(e) => {
                  setPassword(e.target.values);
                }}
                {...formik.getFieldProps("password")}
                type="password"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="btn">
            <button onClick={handleSubmit} type="submit">
              Let's Go
            </button>
          </div>

          <div className="regText">
            <p>
              Not a Member?{" "}
              <NavLink className="navlink" to="/profile">
                Register Now
              </NavLink>
            </p>
          </div>

          <div className="regText">
            <p>
              <NavLink className="navlink" to="/forget">
                Forget Password?
              </NavLink>
            </p>
          </div>
        </form>
      </Container>
    </Wrapper>
  );
}
