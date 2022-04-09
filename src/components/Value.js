import { useSelector } from "react-redux";

const Value = () => {
  const counter = useSelector((state) => state.counter);

  return (
    <div>
      <h2>Counter : {counter}</h2>
    </div>
  );
};

export default Value;
