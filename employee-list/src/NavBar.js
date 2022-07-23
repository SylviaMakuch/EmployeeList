import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavbarContainer = styled.div`
    display: flex;
    background-color: #00d1b2;
    align-items: stretch;
    min-height: 3.25rem;
`;

const Text = styled.div`
    display: flex;
    padding: 15px;
    align-items: center;
    font-family: Poppins, sans-serif;
    font-size: 28px;
    color: white;
    font-weight: 400;
    cursor: pointer;
    margin: 0px;

    &:hover {
        background-color: #00bfa5;
    }

    @media (max-width: 768px) {
        font-size: 17px;
        padding: 10px;
    }
`;

export default function NavBar() {

    return (
        <NavbarContainer>
            <Link style={{textDecoration: 'none'}} to="/">
            <Text> Home</Text>
            </Link>
            <Link style={{textDecoration: 'none'}} to="/appointments">
            <Text> Appointments</Text>
            </Link>
            <Link style={{textDecoration: 'none'}} to="/clients">
            <Text> Clients</Text>
            </Link>
            <Link style={{textDecoration: 'none'}} to="/employeelist">
              <Text>  Employees</Text>
            </Link>
        </NavbarContainer>
    ) 
};