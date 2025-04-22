import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import avator from "../images/avator.jpg";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { passwordValidate } from "../helper/Validate";


const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: lightgray;
`;

const Container = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  padding: 45px 32px 45px 32px;
  text-align: center;

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

    input[type="password"] {
      padding: 12px;
      border-radius: 4px;
      border: none;
      background-color: #f2f2f2;
      /* margin-right: 8px; */
      flex: 1; /* Set flex-grow to 1 to take up remaining width */
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      background-color: white;
    }
  }

  .btn {
    margin-top: 20px;

    button[type="submit"] {
      padding: 12px 16px;
      border-radius: 5px;
      background-color: ${({ theme }) => theme.colors.yellow};
      color: ${({ theme }) => theme.colors.darkgreen};
      border: none;
      cursor: pointer;
      width: 100%; /* Set the width to 100% */

      &:hover {
        background-color: ${({ theme }) => theme.colors.darkgreen};
        color: ${({ theme }) => theme.colors.white};
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
`;

export default function Password() {
 

  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validate: passwordValidate,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

 

  return (
    <Wrapper>
      <Toaster className="toaster" reverseOrder={false}></Toaster>
      <Container>
        <div className="title">
          <h3>Hello Again...!</h3>
          <span>Explore More by Connecting With Us</span>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="image">
            <img src={avator} alt="avatar" />
          </div>
          <div className="textbox-container">
            <input
              {...formik.getFieldProps("password")}
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="btn">
            <NavLink>
              <button type="submit">Sign In</button>
            </NavLink>
          </div>

          <div className="regText">
            <p>
              Forgot Password?
              <NavLink className="navlink" to="/recovery">
                Recover Now
              </NavLink>
            </p>
          </div>
        </form>
      </Container>
    </Wrapper>
  );
  }
