export default (state = 0, action) => {
  const { type, payload } = action;

  if (type === "plus") {
    return state + payload;
  }

  return state;
};
