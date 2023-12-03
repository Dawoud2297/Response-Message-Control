import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  handleAutoClose,
  handleOptionsChanges,
} from "../services/store/optionsSlice";
const Options = () => {
  const { defaultOptions, requiredOptions } = useSelector(
    (state) => state.optionsSlice
  );
  const dispatch = useDispatch();

  const handleChanges = (e) => {
    dispatch(handleOptionsChanges(e));
  };

  const setAutoCloseInterval = (e) => {
    dispatch(handleAutoClose(e.target.value));
  };

  return (
    <div className="optionsContainer">
      <label>
        <input
          type="checkbox"
          name="closeOnClick"
          checked={defaultOptions.closeOnClick}
          onChange={handleChanges}
        />
        <span>Close On Click</span>
      </label>
      <label>
        <input
          type="checkbox"
          name="hideProgressBar"
          checked={defaultOptions.hideProgressBar}
          onChange={handleChanges}
        />
        <span>Hide Progress Bar</span>
      </label>
      <label>
        <input
          type="checkbox"
          name="pauseOnHover"
          checked={defaultOptions.pauseOnHover}
          onChange={handleChanges}
        />
        <span>Pause On Hover</span>
      </label>
      <label>
        <input
          type="checkbox"
          name="draggable"
          checked={defaultOptions.draggable}
          onChange={handleChanges}
        />
        <span>Draggable</span>
      </label>
      <label>
        <input
          type="checkbox"
          name="autoClose"
          checked={defaultOptions.autoClose === false}
          onChange={handleChanges}
        />
        <span>Disable Auto Close</span>
      </label>
      <label className="autoClose">
        <input
          type="number"
          disabled={defaultOptions.autoClose === false}
          value={requiredOptions.interval}
          onChange={setAutoCloseInterval}
        />
        <span>ms</span>
      </label>
    </div>
  );
};

export default Options;
