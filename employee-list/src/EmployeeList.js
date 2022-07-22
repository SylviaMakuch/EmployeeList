import React, {useState, useEffect} from "react";
import styled from "styled-components";
import Card from "./Card.js";
import AddEmployeeForm from "./AddEmployeeForm.js";

const EmployeeListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;

    @media (max-width: 1200px) {
        justify-content: center;
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

function Employelist() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [active , setActive] = useState(false);

    useEffect(() => {
        fetch("https://emplistapi-258220.appspot.com/")
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setItems(result);
            }
        )
        .catch(
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
        console.log(items[1]);
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!isLoaded) {
        return <div>Loading...</div>;
    }

    return (
        <>
        <EmployeeListContainer>
            {items.map(item => (
                <Card
                    id={item.id}
                    first={item.name.first}
                    last={item.name.last}
                    job={item.jobTitle}
                    picture={item.photoURL}              
                />
            ))}
        </EmployeeListContainer>
        <Button onClick={() => setActive(!active)}>Add Employee</Button>
        {active && <AddEmployeeForm />}
        </>
    );
}

export default Employelist;