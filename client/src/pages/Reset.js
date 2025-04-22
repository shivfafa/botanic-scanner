import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { resetpasswordValidation } from "../helper/Validate";

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
  width: 250px;

  .toaster {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .title {
    margin-bottom: 16px;
  }

  h1 {
    font-size: 36px;
    margin-bottom: 8px;
  }

  span {
    color: #888888;
    font-size: 14px;
  }

  .textbox-container {
    display: flex;
    justify-content: center;
    margin-bottom: 16px;
    margin-top: 60px;

    input[type="password"] {
      padding: 12px;
      border-radius: 4px;
      border: none;
      background-color: #f2f2f2;
      /* margin-right: 8px; */
      flex: 1; /* Set flex-grow to 1 to take up remaining width */
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      background-color: white;
      width: 230px;
    }

    .input_container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 1rem;
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
`;

export default function Reset() {
  const formik = useFormik({
    initialValues: {
      password: "",
      confirm_pwd: "",
    },
    validate: resetpasswordValidation,
    // validateOnBlur: false,
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
          <h1>Reset</h1>
          <span>Enter New Password</span>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="textbox-container">
            <div className="input_container">
              <input
                {...formik.getFieldProps("password")}
                type="password"
                placeholder="New Password"
              />
              {formik.errors.confirm_pwd && (
                <span>{formik.errors.confirm_pwd}</span>
              )}
              <input
                {...formik.getFieldProps("confirm_pwd")}
                type="password"
                placeholder="Confirm Password"
              />
            </div>
          </div>
          <div className="btn">
            <NavLink>
              <button type="submit">Reset</button>
            </NavLink>
          </div>
        </form>
      </Container>
    </Wrapper>
  );
}
