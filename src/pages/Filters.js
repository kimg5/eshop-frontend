import * as React from "react";
import Grid from "@mui/material/Unstable_Grid2";

import { Stack } from "@mui/system";
import Checkbox from "@mui/material/Checkbox";

import Button from "@mui/material/Button";

import CategoryRadioGroup from "../components/CategoryRadioGroup";
import ColorIconGroup from "../components/ColorIconGroup";
import CompanySelection from "../components/CompanySelection";
import PriceSlider from "../components/PriceSlider";
import SearchField from "../components/SearchField";

import FilterContext from "../context/filterContext";

function Filters() {
  const meta = React.useContext(FilterContext);
  const maxPrice = 10000;
 
  return (
    <Stack spacing={1}>
      <SearchField />

      <CategoryRadioGroup title="Category" categories={meta.categories} />
      <CompanySelection title="Company" companies={meta.companies} />
      <ColorIconGroup title="Color" colors={meta.colors} />
      <PriceSlider title="Price" maxPrice={maxPrice} />

      <Grid container spacing={1} justifyContent="center" alignItems="center">
        <Grid xs={10}>Free Shipping</Grid>
        <Grid xs={2}>
          <Checkbox />
        </Grid>
      </Grid>
      <Button variant="contained" color="error">
        Clear Filters
      </Button>
    </Stack>
  );
}

export default Filters;
