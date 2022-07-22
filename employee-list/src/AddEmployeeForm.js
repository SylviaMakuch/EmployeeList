import React, {useState} from "react";
import styled from "styled-components";

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(25px) saturate(0%);
    -webkit-backdrop-filter: blur(25px) saturate(0%);
    background-color: hwb(249deg 22% 66% / 61%);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);
    width: 400px;
    margin: 50px;
`;

const Title = styled.div`
    font-family: Poppins, sans-serif;
    font-size: 28px;
    color: white;
    font-weight: 700;
    margin: 30px 0px;
    letter-spacing: 1px;
`;

const Input = styled.input`
    width: 100%;
    height: 40px;
    border-radius: 5px;
    border: 1px solid rgba(255, 255, 255, 0.125);
    margin: 10px 0px;
    padding: 0px 10px;
    font-family: Poppins, sans-serif;
    font-size: 18px;
    color: white;
    font-weight: 100;
    letter-spacing: 1px;
    &:focus {
        outline: none;
    }
`;

const Button = styled.button`
    border-radius: 3px;
    background-color: #00d1b2;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
    margin: 60px;
    cursor: pointer;

    &:hover {
        background-color: #45a049;
    }
`;

function AddEmployeeForm(props) {
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [job, setJob] = useState("");
    const [picture, setPicture] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addEmployee(first, last, job, picture);
        setFirst("");
        setLast("");
        setJob("");
        setPicture("");
    };

    
    return (
        <FormContainer>
            <Title>Add Employee</Title>
            <Input type="text" placeholder="firstname" />
            <Input type="text" placeholder="lastname" />
            <Input type="text" placeholder="position" />
            <Input type="text" placeholder="picture" />
            <Button onClick={handleSumbit}>Add</Button>
        </FormContainer>
    );
}

export default AddEmployeeForm;