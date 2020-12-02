import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { setFilterValue, setSearchValue } from "../../../store/actions";

const useStyles = makeStyles({
  light: {
    marginRight: 15,
    backgroundColor: ({ min }) =>
      min !== "" && min === 4.0 ? "#ccc" : "white",
  },
  middle: {
    marginRight: 15,
    backgroundColor: ({ min }) =>
      min !== "" && min === 5.0 ? "#ccc" : "white",
  },
  hell: {
    backgroundColor: ({ min }) =>
      min !== "" && min === 6.1 ? "#ccc" : "white",
  },
});

const BeerFilters = () => {
  const dispatch = useDispatch();
  const { filterValue } = useSelector((state) => state.store);

  const classes = useStyles(filterValue ?? {});

  const handleFilter = (value) => {
    dispatch(setFilterValue(value));
  };
  const handleSearch = (value) => {
    dispatch(setFilterValue({ min: null, max: null }));
    dispatch(setSearchValue(value));
  };
  return (
    <Box display="flex" justifyContent="space-around">
      <Box maxWidth="300px" display="flex" justifyContent="space-between">
        <Button
          size="large"
          className={classes.light}
          variant="outlined"
          onClick={() => handleFilter({ min: 4.0, max: 4.9 })}
        >
          Легкое
        </Button>
        <Button
          size="large"
          className={classes.middle}
          variant="outlined"
          onClick={() => handleFilter({ min: 5.0, max: 6 })}
        >
          Среднее
        </Button>
        <Button
          size="large"
          className={classes.hell}
          variant="outlined"
          onClick={() => handleFilter({ min: 6.1, max: 1000 })}
        >
          Ад
        </Button>
      </Box>
      <Box>
        <TextField
          label="Поиск"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </Box>
    </Box>
  );
};

export default BeerFilters;
