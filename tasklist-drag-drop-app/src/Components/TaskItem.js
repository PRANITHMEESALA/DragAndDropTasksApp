import React from "react";
import PropTypes from "prop-types";
import "./taskItem.css";

const TaskItem = (props) => {
  return (
    <div
      className="taskItemContainer"
      draggable
      onDragStart={props.handleDragStartHandler}
      onDragEnd={(e) => props.handleDragEndHandler(e)}
    >
      <div className="taskItem">
        <div>{props.taskName}</div>

        <div>{props.taskPriority}</div>
      </div>
    </div>
  );
};
export default TaskItem;
