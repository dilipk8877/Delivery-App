const intialState = {};

export const Authreducer = (state = intialState, action) => {
  switch (action.type) {
    case "SETLOGININFO":
      return action.payload;
    default:
      return state;
  }
};
