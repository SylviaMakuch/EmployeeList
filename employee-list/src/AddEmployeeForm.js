import React, { useState } from "react";
import styled from "styled-components";
import FileBase from "react-file-base64";

const PageContainer = styled.div`
    backdrop-filter: blur(25px) saturate(0%);
    -webkit-backdrop-filter: blur(10px) saturate(0%);
    background-color: hwb(249deg 22% 66% / 61%);
    height: 250vh;
    width: 100%;
    z-index: 2;
    position: absolute;
    top: 0px;

    @media (max-width: 768px) {
        height: 1200vh;
    }
`;

const FormContainer = styled.form`
    backdrop-filter: blur(25px) saturate(0%);
    -webkit-backdrop-filter: blur(5px) saturate(0%);
    background-color: #1c2328;
    border-radius: 12px;
    border: 1px solid rgb(255 255 255 / 42%);
    padding: 50px;
    margin: 50px;
    position: absolute;
    bottom: 50%;
    width: 600px;
    left: 30%;
    z-index: 3;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    @media (max-width: 768px) {
        margin: 0px;
        bottom: 10%;
        width: 250px;
        left:0%;
    }
`;

const Title = styled.div`
    font-family: Poppins, sans-serif;
    font-size: 28px;
    color: white;
    font-weight: 700;
    margin: 30px 0px;
    letter-spacing: 1px;
    text-align: center;
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
    color: black;
    font-weight: 100;
    letter-spacing: 1px;

    &:focus {
        outline: none;
    }
`;

const Label = styled.label`
    font-family: Poppins, sans-serif;
    font-size: 18px;
    color: white;
    font-weight: 100;
    margin: 20px 0px;
    letter-spacing: 1px;
`;

const ButtonDiv = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px 0px;
`;

const AddButton = styled.button`
    border-radius: 3px;
    background-color: #00d1b2;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
    margin: 10px;
    width: 150px;
    height: 71px;
    cursor: pointer;

    &:hover {
        background-color: #45a049;
    }
`;

const CancelButton = styled.button`
    border-radius: 3px;
    background-color: #d10000;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
    margin: 10px;
    width: 150px;
    height: 71px;
    cursor: pointer;

    &:hover {
        background-color: #aa0303;
    }
`;

function AddEmployeeForm(props) {
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [job, setJob] = useState("");
    const [picture, setPicture] = useState("");
    const [error, setError] = useState("");

    const formData = {
        first: first,
        last: last,
        job: job,
        picture: picture
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        fetch("https://emplistapi-258220.appspot.com/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => {
            if (data.error) {
                setError(data.error);
                alert("Whoops! Something went wrong. Please try again.");
            } else {
                props.addEmployee(data);
                props.setShowForm(false);
            }
        }
        )
        .catch(err => console.log(err));
        alert("Employee added successfully!");
        setFirst("");
        setLast("");
        setJob("");
        setPicture("");
    }

    return (
        <PageContainer>
            <FormContainer>
                <Title>Add Employee</Title>
                <Label>First Name:</Label>
                <Input type="text" placeholder="First Name" value={first} onChange={(e) => setFirst(e.target.value)} />

                <Label>Last Name:</Label>
                <Input type="text" placeholder="Last Name" value={last} onChange={(e) => setLast(e.target.value)} />

                <Label>Job Title:</Label>
                <Input type="text" placeholder="Job Title" value={job} onChange={(e) => setJob(e.target.value)} />

                <Label>Picture URL:</Label>
                <div>
                    <FileBase
                        multiple={false}
                        onDone={(file) => {
                            setPicture(file.base64);
                        }
                        }
                    />
                </div>
                <ButtonDiv>
                    <AddButton onClick={handleSubmit}>Add Employee</AddButton>
                    <CancelButton onClick={props.toggleForm}>Cancel</CancelButton>
                </ButtonDiv>
            </FormContainer>
        </PageContainer>
    );
}

export default AddEmployeeForm;