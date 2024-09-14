import React, { useState } from "react";
import Card from "./Card";
import "./cardContainer.css";
const CardContainer = () => {
  const [cardList, setCardList] = useState([]);
  const [status, setStatus] = useState("");
  const [statusPopup, setStatusPopup] = useState(false);
  const [isCardAdded, setCardAdded] = useState(false);
  const [isDragging, setDragging] = useState(false);
  const [draggingItem, setDraggingItem] = useState({});
  const addCardHandler = () => {
    let newCard = { status: status, id: Date.now() };
    setCardList([...cardList, newCard]);
    setCardAdded(true);
    setStatusPopup(false);
  };
  const showstatusPopupHandler = () => {
    setStatusPopup(true);
    setStatus("");
  };
  const handleDragStartHandler = (e, item) => {
    console.log("dragging");

    // e.preventDefault();

    // e.dataTransfer.setData('application/json', JSON.stringify(item));

    setDraggingItem(item);
  };
  const handleDragEndHandler = (e) => {
    e.dataTransfer.clearData();
  };
  return (
    <>
      <div className="statusPopupContainer">
        <div className="cardContainer">
          <div className="cardList">
            {cardList.map((el, index) => {
              return (
                <Card
                  key={el.id}
                  status={el.status}
                  draggingItem={draggingItem}
                  handleDragStartHandler={handleDragStartHandler}
                  handleDragEndHandler={handleDragEndHandler}
                />
              );
            })}
          </div>
        </div>

        {statusPopup ? (
          <div className="statusPopuOverLay">
            <div className="statusPopup">
              <div>
                <label htmlFor="">Status</label>
                <input
                  type="text"
                  name=""
                  id=""
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                />
              </div>

              <button onClick={addCardHandler}>Save</button>
            </div>
          </div>
        ) : null}
        <div className="addButton">
          <button onClick={showstatusPopupHandler}> Add Card </button>
        </div>
      </div>
    </>
  );
};
export default CardContainer;
