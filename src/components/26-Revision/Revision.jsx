import React, { useState } from "react";
import data from "../01-Accordion/data";
import "./styles.css";

function Revision() {
  const [selectedID, setSelectedID] = useState(null);
  const [enableMulti, setEnableMulti] = useState(false);
  const [selectedIDs, setSelectedIDs] = useState([]);

  const handleSingleSelection = (currentId) => {
    setSelectedID(currentId === selectedID ? null : currentId);
  };

  const handleMultiSelection = (currentId) => {
    const copySelectedIDs = [...selectedIDs];
    const indexOfCurrentId = copySelectedIDs.indexOf(currentId);

    if (indexOfCurrentId === -1) copySelectedIDs.push(currentId);
    else copySelectedIDs.splice(indexOfCurrentId, 1);

    setSelectedIDs(copySelectedIDs);
  };

  return (
    <div className="wrapper">
      <button className="btn" onClick={() => setEnableMulti(!enableMulti)}>
        {enableMulti ? "Disable" : "Enable"} Multi Selection
      </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div
              className="item"
              onClick={
                enableMulti
                  ? () => handleMultiSelection(dataItem.id)
                  : () => handleSingleSelection(dataItem.id)
              }
            >
              <div className="title">
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {selectedID === dataItem.id ||
              selectedIDs.indexOf(dataItem.id) !== -1 ? (
                <div>{dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No Data Found !</div>
        )}
      </div>
    </div>
  );
}

export default Revision;
