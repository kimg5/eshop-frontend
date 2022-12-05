import React from "react";
import { Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import {CssBaseline} from '@mui/material';

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Signup from "./pages/Signup";

import WithAuth from "./components/WithAuth";
import "./App.css";


function App() {
  /*
  const defaultColor = '#f44336';
  const [primaryColor, setPrimaryColor] = React.useState(defaultColor);
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          primary: { main: primaryColor },
        },
      }),
    [primaryColor],
  );
*/
  const lightTheme = createTheme({
    palette: {
      mode: 'light',
    }  
  });
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    }  
  });

  const [theme, setTheme] = React.useState(lightTheme);
  
  const changeTheme = () => {
    if (theme.palette.mode === "dark") {
      setTheme(lightTheme);
    } else setTheme(darkTheme);
  };

  return (
    <ThemeProvider theme={theme}>
        <CssBaseline/>
      <div style={{margin:100}}>
      <Button onClick={changeTheme}>changeTheme</Button>

      </div>
      
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="products" element={<Products />} />
          <Route path="about" element={<About />} />
          <Route path="signup" element={<Signup />} />
          
          <Route path="cart" element={<WithAuth><Cart /></WithAuth>} />
          
          <Route path="admin" element={<WithAuth role='admin'><Admin /></WithAuth>} />

        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
