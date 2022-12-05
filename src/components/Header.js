import React, { useEffect, useState } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { useNavigate } from "react-router-dom";
import AuthContext from "../context/authContext";

function Header() {
  const navigate = useNavigate();
  const {navItems} = React.useContext(AuthContext);

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
          MERN
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
