import * as React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Divider } from "@mui/material";

import Filters from "./Filters";
import GridView from "../components/GridView";
import SortBy from "../components/SortBy";
import http from "../utils/http";
import { api_search_url } from "../utils/constants";

const initialState = {
  isLoading: false,
  products: [],
};

const sortKey = {
  sort: "",
};

function Products() {
  const [state, setState] = React.useState(initialState);

  const sortHandler = (sort) => {
    sortKey.sort = sort;
  };

  const filterHandler = (filters) => {
    console.log("filterHandler");
    http.post(api_search_url, { ...filters, ...sortKey }).then((resp) => {
      setState({ products: resp, isLoading: false });
    });
  };

  return (
    <Grid container spacing={2} width={"90vw"}>
      <Grid item xs={2}>
        <Filters filterHandler={filterHandler} />
      </Grid>
      <Grid item xs={10} sx={{ pl: 6 }}>
        <Divider textAlign="right">
          <SortBy handler={sortHandler} />
        </Divider>
        {state.products ? <GridView style={{ space: 2, columns: 3, imageHeight: 180 }} rows={state.products} /> : <div>No products</div>}
      </Grid>
    </Grid>
  );
}

export default Products;
