import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Increment } from "../actions/action";

const Counter = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Increment(props.count));
  }, []);
  return (
    <div>
      <button
        onClick={() => {
          dispatch(Increment(props.count));
        }}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
