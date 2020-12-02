import { types } from "./types";

const initialState = {
  loading: false,
  error: null,
  beers: [],
  filterValue: {
    min: null,
    max: null,
  },
  searchValue: "",
  currentPage: 1,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_BEERS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        beers: [...state.beers, ...action.payload.data],
        currentPage: action.payload.currentPage,
      };

    case types.GET_BEERS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case types.GET_BEERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    case types.SEARCH_BEERS_SUCCESS:
      localStorage.setItem("searchValue", action.payload.searchValue);
      return {
        ...state,
        beers: action.payload.data,
        searchValue: action.payload.searchValue,
      };
    case types.SEARCH_BEERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.SEARCH_BEERS_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };

    case types.FILTER_BEERS_SUCCESS:
      localStorage.setItem(
        "filterValue",
        JSON.stringify(action.payload.filterValue)
      );
      return {
        ...state,
        beers: action.payload.data,
        filterValue: action.payload.filterValue,
      };
    case types.FILTER_BEERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FILTER_BEERS_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default reducer;
