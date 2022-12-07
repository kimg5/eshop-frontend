import React , { useState }from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import OrderSummaryItem from "./OrderSummaryItem";
import ShoppingCartItem from "./ShoppingCartItem";
import '../pages/Cart.css';

export default function ShoppingCart() {
  const [itemCount, setItemCount] = React.useState(1);
  // const setItemCount = () => {
  // }
  const itemPlus = () => { 
    setItemCount(itemCount + 1)
  }
  const itemMinus = () => { 
    setItemCount(Math.max(itemCount - 1, 0))
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Grid container spacing={1}>

          <Grid item xs={12} sm={6} md={7} lg={7}>
            <Grid container>
              <Grid item xs>
                {/* <ShoppingCartItem setItemCount={setItemCount} /> */}
                {/* <ShoppingCartItem itemMinus={itemMinus}/>
                <h1>{ itemCount}</h1> */}
                <ShoppingCartItem />
                <ShoppingCartItem />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={6} md={5} lg={5}>
              <OrderSummaryItem />  
          </Grid>

        </Grid>
      </Container>
    </React.Fragment>
  );
}
