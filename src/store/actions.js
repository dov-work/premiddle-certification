import { types } from "./types";
import API from "../api/api";

const setBeersListSuccess = (data) => ({
  type: types.GET_BEERS_SUCCESS,
  payload: data,
});

const setBeersListFailure = (error) => ({
  type: types.GET_BEERS_FAILURE,
  payload: error,
});

const setFilterSuccess = (data) => ({
  type: types.FILTER_BEERS_SUCCESS,
  payload: data,
});

const setFilterFailure = (error) => ({
  type: types.FILTER_BEERS_FAILURE,
  payload: error,
});

const setSearchSuccess = (data) => ({
  type: types.SEARCH_BEERS_SUCCESS,
  payload: data,
});

const setSearchFailure = (error) => ({
  type: types.SEARCH_BEERS_FAILURE,
  payload: error,
});

export const getBeersList = (payload) => (dispatch) => {
  dispatch({ type: types.GET_BEERS_REQUEST });
  return API.getBeers(payload.page, payload.value)
    .then((response) => {
      dispatch(
        setBeersListSuccess({
          data: response.data,
          currentPage: payload.page,
        })
      );
    })
    .catch(() =>
      dispatch(setBeersListFailure("Не удалось получить список товаров"))
    );
};

export const setSearchValue = (value) => (dispatch) => {
  dispatch({
    type: types.SEARCH_BEERS_REQUEST,
    value,
  });
  return API.setSearch(value)
    .then((response) => {
      dispatch(
        setSearchSuccess({
          data: response.data,
          searchValue: value,
        })
      );
    })
    .catch(() => {
      dispatch(setFilterFailure("Не удалось отфильтровать"));
    });
};
export const setFilterValue = (value) => (dispatch) => {
  dispatch({
    type: types.FILTER_BEERS_REQUEST,
    value,
  });
  return API.setFilter(value ?? {})
    .then((response) => {
      dispatch(
        setFilterSuccess({
          data: response.data,
          filterValue: value,
        })
      );
    })
    .catch(() => {
      dispatch(setSearchFailure("Не удалось найти"));
    });
};
