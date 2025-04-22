import React from "react";
import styled from "styled-components";
import NavBar from "./NavBar";
import { NavLink } from "react-router-dom";
import logo from "../logo58.png";
// import { FaPhoneSquareAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import avator from "../images/avator.jpg";
// import avator1 from "../images/avator1.png";
import { MdSupervisorAccount } from "react-icons/md";
import { UserContext } from "../App";
import { useContext } from "react";
// import { initialState } from "../reducer/UseReducer";
import { FaUserAlt } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { HiMail } from "react-icons/hi";
import { IoMdSend } from "react-icons/io";
import { AiFillLock } from "react-icons/ai";
import { HiPencil } from "react-icons/hi";

const MainHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 0 4.8rem;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StickyHeader = styled(MainHeader)`
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .Link {
    color: ${({ theme }) => theme.colors.background};
    text-decoration: none;
    margin-left: 15px;

    .image {
      width: 4rem;
      height: 3.5rem;
    }
  }
`;

const DIV = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 180px;

  .user {
    margin-bottom: 5px;
    margin-left: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    .btn {
      padding: 10px 18px;
      background-color: ${({ theme }) => theme.colors.background};
      color: ${({ theme }) => theme.colors.white};
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 1rem;
      font-weight: bold;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: ${({ theme }) => theme.colors.yellow};
      }
    }
    .user-info {
      .avatar-container {
        display: flex;
        align-items: center;
      }

      .avatar {
        width: 60px;
        height: 60px;
        border-radius: 50%;

        cursor: pointer;
        /* background-color: none; */
      }

      .dropdown-container {
        position: relative;
        display: flex;
        justify-content: flex-end;
        align-items: flex-start;
      }

      .dropdown-content {
        display: none;
        position: absolute;
        top: 42px;
        right: -176px;
        background-color: white;
        /* padding: 8px; */
        /* border-radius: 4px; */
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

        .container-1 {
          background-color: ${({ theme }) => theme.colors.gray};
          padding: 60px 120px 10px 120px;
          margin-bottom: 10px;
          .img-1 {
            display: flex;
            justify-content: center;
            align-items: center;
            /* background-color: lightgray;  */
            margin-bottom: -10px;

            .img {
              width: 120px;
              height: 120px;
              border-radius: 50%;
              margin-left: -15px;

              /* background-color: lightgray; */
            }
          }

          .user-login {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            h3 {
              margin-bottom: -15px;
            }
          }
        }

        .container-22 {
          margin-bottom: 185px;
          .container-2 {
            margin-left: 25px;
            /* margin-top: 5px; */
            margin-bottom: -10px;
            .info {
              display: flex;
              justify-content: flex-start;
              align-items: center;
              gap: 2rem;

              .info-1 {
                font-size: 22px;
              }

              .info-2 {
                width: 320px;
                /* border: 2px solid black; */
                h3 {
                  margin-bottom: -15px;
                }
              }

              .info-3 {
                /* margin-left: 250px; */
                display: flex;
                justify-content: flex-end;
                align-items: flex-end;
                /* padding-right: -150px; */
                margin-right: 30px; 
                font-size: 20px;
              }
            }
          }
        }

        .container-3 {
          margin-top: 138px;
          .link1 {
            text-decoration: none;
            font-weight: 500;
            font-size: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            /* border: 2px solid lightgray; */
            padding: 12px 240px 12px 240px;
            color: black;
            /* margin-top: 50px; */
            border: none;

            &:hover {
              background-color: ${({ theme }) => theme.colors.background};
              color: ${({ theme }) => theme.colors.white};
              border: none;
            }
          }
        }
      }

      .show {
        display: block;
      }
    }
  }
`;

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .link {
    color: ${({ theme }) => theme.colors.darkgray};
    text-decoration: none;
    margin-right: 15px;
    font-weight: bold;
  }

  .btn {
    padding: 10px 22px;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.white};
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${({ theme }) => theme.colors.yellow};
    }
  }
`;

export default function Header() {
  const { state, dispatch } = useContext(UserContext);

  const RenderMenu = () => {
    if (localStorage.getItem('TOKEN') === 'hgfd') {
      return (
        <>
          <DIV>
            <div class="user">
              <div class="user-info">
                <div class="avatar-container">
                  <img
                    className="avatar"
                    src={avator}
                    onClick={toggleDropdown}
                    alt="Avatar"
                  />

                  <div class="dropdown-container">
                    <div class="dropdown-content">
                      <div className="container-1">
                        <div className="img-1">
                          <img className="img" src={avator} alt="Avatar" />
                        </div>
                        <div className="user-login">
                          <h3>{localStorage.getItem("NAME")}</h3>
                          <p>{localStorage.getItem("EMAIL")}</p>
                        </div>
                      </div>

                      <div className="container-22">
                        <div className="container-2">
                          <div className="info">
                            <div className="info-1">
                              <FaUserAlt />
                            </div>
                            <div className="info-2">
                              <h3>Account</h3>
                              <p>{localStorage.getItem("NAME")}</p>
                            </div>
                            <div className="info-3">
                              <TiTick />
                            </div>
                          </div>
                        </div>

                        <div className="container-2">
                          <div className="info">
                            <div className="info-1">
                              <HiMail />
                            </div>
                            <div className="info-2">
                              <h3>Email</h3>
                              <p>{localStorage.getItem("EMAIL")}</p>
                            </div>
                            <div className="info-3">
                              <NavLink to="/contact" style={{textDecoration:"none" ,color:"black"}}><IoMdSend /></NavLink>
                            </div>
                          </div>
                        </div>

                        <div className="container-2">
                          <div className="info">
                            <div className="info-1">
                              <AiFillLock />
                            </div>
                            <div className="info-2">
                              <h3>Change Password</h3>
                              <p>**********</p>
                            </div>
                            <div className="info-3">
                              
                              <NavLink to="/forget" style={{textDecoration:"none" ,color:"black"}}><HiPencil /></NavLink>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* <div className="container-3">
                        <button
                          className="link1"
                          onClick={() => {
                            dispatch({ type: "USER", payload: false });
                            localStorage.clear();
                            navigate("/login");
                          }}
                        >
                          LogOut
                        </button>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>

              <NavLink>
                <button
                  className="btn"
                  onClick={() => {
                    dispatch({ type: "USER", payload: false });
                    localStorage.clear();
                    navigate("/login");
                  }}
                >
                  LogOut
                </button>
              </NavLink>
            </div>
          </DIV>
        </>
      );
    } else {
      return (
        <>
          <LoginContainer>
            <NavLink className="link" to="/profile">
              Register
            </NavLink>
            <NavLink to="/login">
              <button className="btn">LogIn</button>
            </NavLink>
          </LoginContainer>
        </>
      );
    }
  };

  const navigate = useNavigate();

  function toggleDropdown() {
    const dropdownContent = document.querySelector(".dropdown-content");
    dropdownContent.classList.toggle("show");
  }

  return (
    <StickyHeader>
      <Container>
        <NavLink to="/" className="Link">
          <img src={logo} alt="BOtanic" className="image" />
        </NavLink>
        <NavLink to="/" className="Link">
          <h2>The Botanic Scanner</h2>
        </NavLink>
      </Container>
      <div>
        <NavBar />
      </div>
      <RenderMenu />
    </StickyHeader>
  );
}
