import React, { useEffect, useState } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Unstable_Grid2";

import { useNavigate } from "react-router-dom";
import AuthContext from "../context/authContext";
import ThemeContext from "../context/themeContext";

function Header() {
  const navigate = useNavigate();
  const { navItems } = React.useContext(AuthContext);
  const { changeTheme } = React.useContext(ThemeContext);

  const go = (url) => {
    try {
      console.log(url);
      navigate(url, { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppBar component="nav">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
          <Grid container spacing={1}>
            <Grid xs={1}>MERN</Grid>
            <Grid xs={1}>
              <FormControlLabel control={<Switch onChange={changeTheme} />} label="Theme" />
            </Grid>
          </Grid>
        </Typography>

        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {navItems.map((item) => (
            <Button
              key={item.title}
              sx={{ color: "#fff" }}
              onClick={() => {
                go(item.url);
              }}
            >
              {item.title}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
