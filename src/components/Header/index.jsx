import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box align="center" width="100%">
          <Typography variant="h5">Top Beer in Da World</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
