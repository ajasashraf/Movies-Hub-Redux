const initialState = {
  movies: [],
  isSearched: false,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_MOVIES":
      return {
        ...state,
        movies: action.payload,
        isSearched: true,
      };
    default:
      return state;
  }
};

export default searchReducer;
