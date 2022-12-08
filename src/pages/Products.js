import * as React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Divider } from "@mui/material";

import Filters from "./Filters";
import GridView from "../components/GridView";
import SortBy from "../components/SortBy";
import http from "../utils/http";
import { api_search_url, api_products_detail_url } from "../utils/constants";
import Slide from "@mui/material/Slide";
import Dialog from "@mui/material/Dialog";
import SingleProductPage from "./SingleProductPage";

function Products() {
  const [detail, setDetail] = React.useState({isOpen:false,row:{}});
  
  const detailHandler = (row) => {
    console.log("gotDetail");
    http.get(api_products_detail_url + row._id).then((resp) => {
      setDetail({isOpen:true,row:resp});
    });
  };

  const detailCloseHandler = (row) => {
    setDetail({isOpen:false,row:row});
  }  

  return (
    <>
      <ProductDetail detail={detail} closeHandler={detailCloseHandler}/>
      <ProductList detailHandler={detailHandler}/>
    </>
  );
}

function ProductList({detailHandler}) {
  const initialState = {
    isLoading: false,
    products: [],
  };
  const sortHandler = (sort) => {
    sortKey.sort = sort;
  };
  const sortKey = {
    sort: "",
  };
  const [state, setState] = React.useState(initialState);
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
        {state.products ? (
          <GridView detailHandler={detailHandler} style={{ space: 2, columns: 3, imageHeight: 180 }} rows={state.products} />
        ) : (
          <div>No products</div>
        )}
      </Grid>
    </Grid>
  );
}

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ProductDetail({detail,closeHandler}) {
  const [open, setOpen] = React.useState(false);
 
  const handleClose = () => {
    setOpen(false);
    closeHandler(detail.row);
  };

  React.useEffect(() => {
     setOpen(detail.isOpen);
  }, [detail.isOpen]);

  return (
    <Dialog fullScreen open={open} TransitionComponent={Transition}>
      <SingleProductPage closeHandler={handleClose} row={detail.row}/>
    </Dialog>
  );
}

export default Products;
