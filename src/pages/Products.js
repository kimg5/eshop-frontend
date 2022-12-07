import * as React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Divider } from "@mui/material";

import Filters from "./Filters";
import GridView from "../components/GridView";
import SortBy from "../components/SortBy";

import reducer from "../reducers/productReducer";
import { GET_PRODUCTS_SEARCH } from "../actions";

import { rows } from "./productsData";

const initialState = {
  isLoading: false,
  products:[]
};

function Products() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  
  return (
    <Grid container spacing={2} width={"90vw"}>
      <Grid item xs={2}>
        <Filters />
      </Grid>
      <Grid item xs={10} sx={{ pl: 6 }}>
        <Divider textAlign="right">
          <SortBy />
        </Divider>
        {
         rows ? <GridView style={{ space: 2, columns: 3, imageHeight: 180 }} rows={state.products} />
              : <div>No products</div> 
        }
      </Grid>
    </Grid>
  );
}

export default Products;
