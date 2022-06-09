import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

const ToDoList = () => {
  const [item, setItem] = useState("buy an apple");
  const itemEvent = (event) => {
    setItem(event.target.value);
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1> ToDo List</h1>
          <br />
          <input type="text" placeholder="Add an Items" onChange={itemEvent} />
          <Button className="newBtn">
            <AddIcon />
          </Button>
          <br />
          <ol>
            <li>{item}</li>
          </ol>
          <br />
        </div>
      </div>
    </>
  );
};
export default ToDoList;
