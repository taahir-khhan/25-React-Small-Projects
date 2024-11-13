import React, { useState } from "react";
import data from "./data";
import "./style.css";

function Accordion() {
  const [selectedID, setSelectedID] = useState(null);
  const [enableMultipleSelection, setEnableMultipleSelection] = useState(false);
  const [multipleIDs, setmultipleIDs] = useState([]);

  const handleSingleSelection = (currentId) => {
    setSelectedID(currentId === selectedID ? null : currentId);
  };

  const handleMultipleSelection = (currentId) => {
    // Copy of usestate multileIDs array
    let copyOfMultipleIDs = [...multipleIDs];
    const findIndexOfCurrentId = copyOfMultipleIDs.indexOf(currentId);

    if (findIndexOfCurrentId === -1) copyOfMultipleIDs.push(currentId);
    else copyOfMultipleIDs.splice(findIndexOfCurrentId, 1);

    setmultipleIDs(copyOfMultipleIDs);
  };

  return (
    <div className="wrapper">
      <button
        className="enable__btn"
        onClick={() => setEnableMultipleSelection(!enableMultipleSelection)}
      >
        {enableMultipleSelection ? "Disable" : "Enable"} Multiple Selection
      </button>

      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div
              onClick={
                enableMultipleSelection
                  ? () => handleMultipleSelection(dataItem.id)
                  : () => handleSingleSelection(dataItem.id)
              }
              className="item"
            >
              <div className="title">
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {enableMultipleSelection
                ? multipleIDs.indexOf(dataItem.id) !== -1 && (
                    <div className="content">{dataItem.answer}</div>
                  )
                : selectedID === dataItem.id && (
                    <div className="content">{dataItem.answer}</div>
                  )}

              {/* {selectedID === dataItem.id ||
              multipleIDs.indexOf(dataItem.id) !== -1 ? (
                <div className="content">{dataItem.answer}</div>
              ) : null} */}
            </div>
          ))
        ) : (
          <div>No Data Found !</div>
        )}
      </div>
    </div>
  );
}

export default Accordion;
