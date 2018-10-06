export default (state = 0, action) => {
  const { type, payload } = action;
  if (type === "minus") {
    return state - payload;
  }

  return state;
};
