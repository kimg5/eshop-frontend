import React from "react";
import { Outlet } from "react-router-dom";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "80vh",
      }}
    >
      <Header />   
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
       <Outlet />
      </Container>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: (theme) => (theme.palette.mode === "light" ? theme.palette.grey[200] : theme.palette.grey[800]),
        }}
      >
        <Footer />
      </Box>
    </Box>
  );
}
export default MainLayout;
