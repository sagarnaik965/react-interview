// App.js File 
import React, { Component, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import ListGroup from "react-bootstrap/ListGroup";

function Todo() {
    const [userInput, setUserInput] = useState("");
    const [list, setList] = useState([]);

    function handleUserInput(item) {
        console.log(item + " userInput update")
        setUserInput(item)
    }
    function addItem() {
        //    alert(userInput)
        const obj = {
            id: Math.random(),
            value: userInput
        }
        let listToadd = [...list]
        listToadd.push(obj)
        setList(listToadd)

    }

    // Function to delete item from list use id to delete 
    function deleteItem(key) {
        const listToUpdate = [...list];
        // Filter values and leave value which we need to delete 
        const updateList = listToUpdate.filter((item) => item.id !== key);
        // Update list in state 
        setList(updateList)
    }

    function editItem(index) {
        const todos = [...list];
        const editedTodo = prompt('Edit the todo:');
        if (editedTodo !== null && editedTodo.trim() !== '') {
            let updatedTodos = [...todos]
            updatedTodos[index].value = editedTodo

            setList(updatedTodos)
        }
    }


    return (
        <>
            <Container>
                <Row
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "3rem",
                        fontWeight: "bolder",
                    }}
                >
                    TODO LIST
                </Row>

                <hr />
                <Row>
                    <Col md={{ span: 5, offset: 4 }}>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="add item . . . "
                                size="lg"
                                // value={userInput}
                                onChange={(item) =>
                                    handleUserInput(item.target.value)
                                }
                                aria-label="add something"
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup>
                                <Button
                                    variant="dark"
                                    className="mt-2"
                                    onClick={() => addItem()}
                                >
                                    ADD
                                </Button>
                            </InputGroup>
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 5, offset: 4 }}>
                        <ListGroup>
                            {list.map((item, index) => {
                                return (
                                    <div key={index} >
                                        <ListGroup.Item
                                            variant="dark"
                                            action
                                            style={{
                                                display: "flex",
                                                justifyContent: 'space-between'
                                            }}
                                        >
                                            {item.value}
                                            <span>
                                                <Button size="sm" style={{ marginRight: "10px" }}
                                                    variant="light"
                                                    onClick={() => deleteItem(item.id)}>
                                                    Delete
                                                </Button>
                                                <Button size="sm" variant="light"
                                                    onClick={() => editItem(index)}>
                                                    Edit
                                                </Button>
                                            </span>
                                        </ListGroup.Item>
                                    </div>
                                );
                            })}
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Todo; 
