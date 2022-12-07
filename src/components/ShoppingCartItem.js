import React, { useState } from "react";
// import { makeStyles } from "@material-ui/core/styles";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import ButtonBase from '@mui/material/ButtonBase';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});


export default function ShoppingCartItem() {
  // const classes = useStyles();
  const [itemCount, setItemCount] = React.useState(1);
  const price = 105.99; 
 
  return (
    <Paper
    sx={{
      p: 2,
      margin: 'auto',
      maxWidth: 500,
      flexGrow: 1,
      backgroundColor: (theme) =>
        theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    }}
  >
    <Grid container spacing={2}>
      <Grid item>
        <ButtonBase sx={{ width: 128, height: 128 }}>
          <Img alt="complex" src="https://source.unsplash.com/random" />
        </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
      <CardContent className="shoppingCardItemContent">
        {/* <CardMedia
          component="img"
          sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
          className="shoppingCardItemCover"
          image="https://source.unsplash.com/random"
          title="Live from space album cover"
        /> */}
        <Typography variant="div" component="h2">
          Item Name{" "}
        </Typography>
            <Typography
          className="shoppingCardItemTitle"
          color="textSecondary"
          gutterBottom
        >
          Category
        </Typography>
        
        <Typography variant="subtitle2">
          <hr />
        </Typography>
        <Grid container>
          <Grid item xs={11} sm={11} md={11} lg={11}>
            <Typography variant="body1" component="div">
              Color
            </Typography>
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={1}>
            <Typography variant="body1" component="div">
            Black
            </Typography>
          </Grid>
          <Grid item xs={11} sm={11} md={11} lg={11}>
            <Typography variant="body1" component="div">
                  Quantity
                  
                  <ButtonGroup>
          <Button onClick={() => {setItemCount(Math.max(itemCount - 1, 0));}}>{" "}<RemoveIcon fontSize="small" />           
                    </Button>
                  
          <Button onClick={() => { setItemCount(itemCount + 1); }}>{" "}<AddIcon fontSize="small" />
          </Button>
          {/* <Button onClick={props.itemMinus} >{" "}<RemoveIcon fontSize="small" />           
          </Button>
                    <Button onClick={props.itemPlus}>{" "}<AddIcon fontSize="small" />
          </Button>           */}
                    
                </ButtonGroup>
                </Typography>
               
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={1}>
                <Typography variant="h6" component="div">
            {itemCount}
            </Typography>
              
       
        
                
      
          </Grid>
          <Grid item xs={10} sm={9} md={10} lg={10}>
            <Typography
              variant="body1"
              component="div"
            >
              Unit Price
            </Typography>
          </Grid>
          <Grid item xs={2} sm={2} md={2} lg={1}>
            <Typography variant="body1" component="div" color="primary">
                  ${price}
            </Typography>
          </Grid>
        </Grid>
          </CardContent>
          </Grid>  
    </Grid>
  </Paper>
  
  );
}
