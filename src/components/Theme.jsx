import React from "react";
import { themes } from "../services/constantData";
import { useDispatch, useSelector } from "react-redux";
import { handlePositionAndTheme } from "../services/store/optionsSlice";

const Theme = () => {
  const { defaultOptions } = useSelector((state) => state.optionsSlice);
  const dispatch = useDispatch();


  const handleThemeChange = (e) => {
    dispatch(handlePositionAndTheme(e));
  };


  return (
    <div className="themesContainer">
      {themes.map((theme) => (
        <label key={theme.theme}>
          <input
            type="radio"
            name="theme"
            defaultChecked={theme.theme === defaultOptions.theme}
            value={theme.theme}
            onChange={handleThemeChange}
          />
          <span>{theme.theme}</span>
        </label>
      ))}
    </div>
  );
};

export default Theme;
