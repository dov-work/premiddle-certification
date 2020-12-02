import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import Pagination from "@material-ui/lab/Pagination";

import BeerItem from "./BeerItem";

import {
  getBeersList,
  setSearchValue,
  setFilterValue,
} from "../../store/actions";
import BeerFilters from "./BeerFilters";

const BeerTable = () => {
  const dispatch = useDispatch();

  const { beers, error } = useSelector((state) => state.store);

  useEffect(() => {
    dispatch(getBeersList({ page: 1 }));
    dispatch(setSearchValue(localStorage.getItem("searchValue")));
    dispatch(setFilterValue(JSON.parse(localStorage.getItem("filterValue"))));
  }, [dispatch]);

  const changePage = (page) => {
    dispatch(
      getBeersList({
        page: page,
        value: JSON.parse(localStorage.getItem("filterValue")),
      })
    );
  };

  return !error ? (
    <Box pt={4}>
      <BeerFilters />
      <Box display="flex" flexWrap="wrap" justifyContent="space-around">
        {beers.map((beer) => (
          <BeerItem key={beer?.id + Math.random()} beer={beer} />
        ))}
        {beers.length === 0 ? (
          <Alert severity="info">Упс, закончились товары!</Alert>
        ) : null}
      </Box>
      <Box width="100%" display="flex" justifyContent="center" mt={5} mb={8}>
        <Pagination
          boundaryCount={2}
          count={11}
          onChange={(_, page) => changePage(page)}
        />
      </Box>
    </Box>
  ) : (
    <Alert severity="error">{error.message}</Alert>
  );
};

export default BeerTable;
