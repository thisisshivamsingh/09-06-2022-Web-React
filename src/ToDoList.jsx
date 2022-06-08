import React from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

const ToDoList = () => {
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1> ToDo List</h1>
          <br />
          <input type="text" placeholder="Add an Items" />
          <Button className="newBtn">
            <AddIcon />
          </Button>
        </div>
      </div>
    </>
  );
};
export default ToDoList;
