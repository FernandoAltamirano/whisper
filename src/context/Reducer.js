export const initialState = {
  user: null,
  tweets: null,
};

const Reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_USER":
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};

export default Reducer;
