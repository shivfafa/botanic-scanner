import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const Nav = styled.nav`
    position: sticky;
  top: 0;
  z-index: 1999;
  background-color: ${({ theme }) => theme.colors.white};
    .menuIcons {
      display: flex;
      gap: 3rem;
      li {
        list-style: none;
        color: black;

        .navbar-link {
          text-decoration: none;
          color: ${({ theme }) => theme.colors.lightblack};
          font-weight: 500;
          font-weight: 500;
          position: relative;

          &:hover {
            text-decoration: underline;
            text-decoration-color: ${({ theme }) => theme.colors.yellow}; /* Set the underline color to yellow */
            text-decoration-thickness: 2px; /* Set the underline thickness */
            text-underline-offset:5px;
            /* font-weight: bold; */
            transition-delay: 1s;
            transition: opacity 0.3s linear, transform 0.3s linear;
  transform: translateX(-100%);
          }
          &:visible {
  opacity: 1;
  transform: translateX(0%);
}

          &.active {
            &::after {
              content: "";
              position: absolute;
              bottom: -5px;
              left: 0;
              width: 100%;
              height: 2px;
              background-color: ${({ theme }) => theme.colors.yellow};
              /* opacity: 0; Initially set the opacity to 0 */
              transition: opacity 0.3s ease-in;
            }

            
          }
        }
      }
    }
  `;

export default function NavBar() {
  
  return (
    <Nav>
      <div className="navbarList">
        <ul className="menuIcons">
          <li>
            <NavLink to="/" className="navbar-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/cultivation" className="navbar-link">
              Cultivation Process
            </NavLink>
          </li>
          <li>
            <NavLink to="/Service" className="navbar-link">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="navbar-link">
              About US
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="navbar-link">
              Contact US
            </NavLink>
          </li>
        </ul>
      </div>
    </Nav>
  );
}
