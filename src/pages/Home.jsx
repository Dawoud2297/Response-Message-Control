import React from "react";
import Positions from "../components/Positions";
import Theme from "../components/Theme";
import Options from "../components/Options";
import MessageControl from "../components/MessageControl";
import { useDispatch } from "react-redux";
import { handleSubmit } from "../services/store/optionsSlice";

const Home = () => {
  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(handleSubmit());
  };
  
  return (
    <div className="Home">
      <MessageControl />
      <div>
        <h3>Position</h3>
        <Positions />
      </div>
      <div>
        <h3>Theme</h3>
        <Theme />
      </div>
      <div>
        <h3>Options</h3>
        <Options />
      </div>
      <button className="btn btn-primary" onClick={onSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Home;
