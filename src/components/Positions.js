import { positions } from "../services/constantData";
import { useDispatch, useSelector } from "react-redux";
import { handlePositionAndTheme } from "../services/store/optionsSlice";

const Positions = () => {
  const { defaultOptions } = useSelector((state) => state.optionsSlice);
  const dispatch = useDispatch();

  const handlePositionChange = (e) => {
    dispatch(handlePositionAndTheme(e));
  };

  return (
    <div className="positionsContainer">
      {positions.map((position) => (
        <label key={position.id}>
          <input
            type="radio"
            name="position"
            defaultChecked={position.position === defaultOptions.position}
            value={position.position}
            onChange={handlePositionChange}
          />
          <span>{position.position}</span>
        </label>
      ))}
    </div>
  );
};
export default Positions;
