import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
    display: flex;  
    flex-direction: column;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(25px) saturate(0%);
    -webkit-backdrop-filter: blur(25px) saturate(0%);
    background-color: hwb(249deg 22% 66% / 61%);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);
    height: 400px;
    width: 300px;
    margin: 50px;
    &:hover {
    transform: translateX(3px);
    transform: translateY(-5px);
    box-shadow: 0 0 0px #87e0ee38, 0 0 0px #87e0ee38, 0 0 0px #87e0ee38, 0 0 60px #35a0358f;
    0 0 0px #87e0ee38, 0 0 60px #35a0358f;
    background-image: linear-gradient(to left, #ff000000, #1e271e3d, #ff000000);
  }
`;

const Picture = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 1px solid white;
    object-fit: cover;
`;

const Name = styled.div`
    font-family: Poppins, sans-serif;
    font-size: 28px;
    color: white;
    font-weight: 700;
    margin: 30px 0px;
    letter-spacing: 1px;
`;

const Position = styled.div`
    font-family: Poppins, sans-serif;
    font-size: 18px;
    color: white;
    font-weight: 100;
    margin: 10px 0px;
    letter-spacing: 1px;
`;

export default function Card(props) {
    return (
        <CardContainer>
            <Picture src={props.picture} />
            <Name>{props.first} {props.last}</Name>
            <Position>{props.job}</Position>
        </CardContainer>
    );
}