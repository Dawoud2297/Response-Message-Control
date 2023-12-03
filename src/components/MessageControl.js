import React from "react";
import { messagesTypes } from "../services/constantData";
import { handleMessageContentAndType } from "../services/store/optionsSlice";
import { useDispatch, useSelector } from "react-redux";

const MessageControl = () => {
  const { requiredOptions } = useSelector((state) => state.optionsSlice);

  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(handleMessageContentAndType(e));
  };

  return (
    <div className="messageControls">
      <div className="inputs">
        <input
          type="text"
          placeholder="Message Content"
          name="messageContent"
          value={requiredOptions.messageContent}
          onChange={handleChange}
        />
        <select name="type" onChange={handleChange}>
          {messagesTypes.map((type) => (
            <option key={type.type} value={type.type}>
              {type.content}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default MessageControl;
