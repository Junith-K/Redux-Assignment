import { useDispatch } from "react-redux";
import { Increment } from "../actions/action";

const Counter = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(Increment());
        }}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
