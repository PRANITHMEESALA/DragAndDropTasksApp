import React, { useState, useTransition } from "react";
import "./Card.css";
import TaskItem from "./TaskItem";
import AddTaskPopup from "./AddTaskPopup";
const Card = (props) => {
  const [taskList, setTaskList] = useState(
    props.draggingItem ? [props.draggingItem] : []
  );
  const [taskName, setTaskName] = useState("");
  const [taskPriority, setTaskPriority] = useState("High");
  const [showAddTaskPopup, setShowTaskPopup] = useState(false);
  const [showAndHideCard, setShowAndHideCard] = useState(false);

  const addTaskHandler = () => {
    setShowTaskPopup(true);
  };

  const addToTaskListHandler = () => {
    let newTask = {
      taskID: Date.now(),
      taskName: taskName,
      taskPriority: taskPriority,
    };

    setTaskList([...taskList, newTask]);
    setShowTaskPopup(false);
    setTaskName("");
    setTaskPriority("");
  };
  const showAndHideCardHandler = () => {
    setShowAndHideCard(!showAndHideCard);
  };

  const handleDrop = (e) => {
    e.preventDefault();

    if (props.draggingItem) {
      setTaskList([...taskList, props.draggingItem]);
    }
  };
  const handleDragOver = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <>
      {showAndHideCard ? (
        <div className="hidCardContainer">
          <p> {props.status}</p>

          <span className="rightArrow" onClick={showAndHideCardHandler}>
            &#8594;{" "}
          </span>
        </div>
      ) : (
        <div
          className="card"
          onDrop={(e) => handleDrop(e)}
          onDragOver={(e) => handleDragOver(e)}
        >
          <div className="cardHeader">
            <span>{props.status}</span>

            <span className="leftArrow" onClick={showAndHideCardHandler}>
              {" "}
              &#8592;
            </span>
          </div>
          <div className="cardBody">
            <div>
              {taskList.map((el, id) => {
                return (
                  <TaskItem
                    key={id}
                    taskName={el.taskName}
                    taskPriority={el.taskPriority}
                    handleDragStartHandler={(e) =>
                      props.handleDragStartHandler(e, el)
                    }
                    handleDragEndHandler={props.handleDragEndHandler}
                  />
                );
              })}
              <div>
                <div className="addTask">
                  <button onClick={addTaskHandler}>Add Task</button>
                </div>
              </div>
            </div>

            <div>
              {showAddTaskPopup ? (
                <div className="taskPopup">
                  <AddTaskPopup
                    taskName={taskName}
                    taskPriority={taskPriority}
                    setTaskName={setTaskName}
                    setTaskPriority={setTaskPriority}
                    addToTaskListHandler={addToTaskListHandler}
                  />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
