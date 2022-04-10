const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      if (state === 0) return (state = action.payload);
      else return state + 1;
    default:
      return state;
  }
};

export default counterReducer;
