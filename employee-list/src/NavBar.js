import React from "react";
import styled from "styled-components";

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
    font-weight: 100;
    cursor: pointer;
    &:hover {
        background-color: #00bfa5;
    }
`;

export default function NavBar() {

    const setScrolledPage = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ 
                behavior: "smooth" 
            });
        }
    }

    return (
        <NavbarContainer>
            <Text onClick={() => setScrolledPage("home")}> Home</Text>
            <Text onClick={() => setScrolledPage("appointments")}> Appointments</Text>
            <Text onClick={() => setScrolledPage("clients")}> Clients</Text>
            <Text onClick={() => setScrolledPage("employees")}> Employees</Text>
        </NavbarContainer>
    )
};

