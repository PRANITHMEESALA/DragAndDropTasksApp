import React from "react";
import PropTypes from "prop-types";
import "./cardContainer.css";
const AddTaskPopup = (props) => {
  return (
    <div className="statusPopup">
      <div>
        <span>TaskName</span>
        <input
          type="text"
          value={props.taskName}
          onChange={(e) => props.setTaskName(e.target.value)}
        />
        <span>Priority</span>
        <select
          name=""
          id=""
          value={props.taskPriority}
          onChange={(e) => props.setTaskPriority(e.target.value)}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        <button onClick={props.addToTaskListHandler}>Save</button>
      </div>
    </div>
  );
};

export default AddTaskPopup;
