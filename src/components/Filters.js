import * as React from "react";
import Grid from "@mui/material/Unstable_Grid2";

import { Stack } from "@mui/system";
import { TextField } from "@mui/material";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import FormLabel from "@mui/material/FormLabel";

import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import { green, red, yellow, grey, purple } from "@mui/material/colors";
import Icon from "@mui/material/Icon";

import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";

import Checkbox from "@mui/material/Checkbox";

import Button from "@mui/material/Button";

import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

function Filters() {
  function valueLabelFormat(value) {
    const units = ["KB", "MB", "GB", "TB"];

    let unitIndex = 0;
    let scaledValue = value;

    while (scaledValue >= 1024 && unitIndex < units.length - 1) {
      unitIndex += 1;
      scaledValue /= 1024;
    }

    return `${scaledValue} ${units[unitIndex]}`;
  }

  function calculateValue(value) {
    return 2 ** value;
  }

  const [company, setCompany] = React.useState("All");

  const handleChange = (event) => {
    setCompany(event.target.value);
  };

  const [value, setValue] = React.useState(10);

  const handleSliderChange = (event, newValue) => {
    if (typeof newValue === "number") {
      setValue(newValue);
    }
  };

  const [categoryValue, setCategoryValue] = React.useState("All");

  const handleCategoryChange = (event) => {
    setCategoryValue(event.target.value);
  };

  return (
    <Stack spacing={2}>
      <TextField id="search" label="Search" variant="outlined" size="small" />
      <div>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Category</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            value={categoryValue}
            onChange={handleCategoryChange}
          >
            <FormControlLabel value="All" control={<Radio />} label="All" />
            <FormControlLabel value="Office" control={<Radio />} label="Office" />
            <FormControlLabel value="Living Room" control={<Radio />} label="Living Room" />
            <FormControlLabel value="Kitchen" control={<Radio />} label="Kitchen" />
            <FormControlLabel value="Bedroom" control={<Radio />} label="Bedroom" />
            <FormControlLabel value="Dining" control={<Radio />} label="Dining" />
            <FormControlLabel value="Kids" control={<Radio />} label="Kids" />
          </RadioGroup>
        </FormControl>

        {/* <Stack>
              <Link href="#" underline="none">
                All
              </Link>
              <Link href="#" underline="none">
                Office
              </Link>
              <Link href="#" underline="none">
                Living Room
              </Link>
              <Link href="#" underline="none">
                Kitchen
              </Link>
              <Link href="#" underline="none">
                Bedroom
              </Link>
              <Link href="#" underline="none">
                Dining
              </Link>
              <Link href="#" underline="none">
                Kids
              </Link>
            </Stack> */}

        {/* <List>
              <ListItem>
                <Link href="#" underline="none">
                  All
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#" underline="none">
                  Office
                </Link>
              </ListItem>

              <ListItem>
                <Link href="#" underline="none">
                  Living Room
                </Link>
              </ListItem>

              <ListItem>
                <Link href="#" underline="none">
                  Kitchen
                </Link>
              </ListItem>

              <ListItem>
                <Link href="#" underline="none">
                  Bedroom
                </Link>
              </ListItem>

              <ListItem>
                <Link href="#" underline="none">
                  Dining
                </Link>
              </ListItem>

              <ListItem>
                <Link href="#" underline="none">
                  Kids
                </Link>
              </ListItem>
            </List> */}
      </div>
      <div>
        <div>Company</div>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <Select value={company} onChange={handleChange}>
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="marcos">marcos</MenuItem>
            <MenuItem value="liddy">liddy</MenuItem>
            <MenuItem value="ikea">ikea</MenuItem>
            <MenuItem value="caressa">caressa</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div>
        <div>Colors</div>
        <Grid container spacing={2}>
          <Grid xs={2}>
            <Link href="#" underline="none">
              All
            </Link>
          </Grid>
          <Grid xs={2}>
            <Icon sx={{ color: purple[500] }}>circle</Icon>
          </Grid>
          <Grid xs={2}>
            <Icon sx={{ color: green[500] }}>circle</Icon>
          </Grid>
          <Grid xs={2}>
            <Icon sx={{ color: red[500] }}>check_circle</Icon>
          </Grid>
          <Grid xs={2}>
            <Icon sx={{ color: grey[500] }}>circle</Icon>
          </Grid>
          <Grid xs={2}>
            <Icon sx={{ color: yellow[500] }}>check_circle</Icon>
          </Grid>
        </Grid>
      </div>
      <div>
        <div>Price</div>

        <Box sx={{ width: 250 }}>
          <Typography id="non-linear-slider" gutterBottom>
            {valueLabelFormat(calculateValue(value))}
          </Typography>
          <Slider
            value={value}
            min={5}
            step={1}
            max={30}
            scale={calculateValue}
            getAriaValueText={valueLabelFormat}
            valueLabelFormat={valueLabelFormat}
            onChange={handleSliderChange}
            onChangeCommitted={() => {
              console.log("commit");
            }}
            sx={{ width: 160 }}
          />
        </Box>
      </div>
      <Grid container spacing={1} justifyContent="center" alignItems="center">
        <Grid xs={8}>Free Shipping</Grid>
        <Grid xs={4}>
          <Checkbox color="secondary" />
        </Grid>
      </Grid>
      <Stack spacing={1} direction="row">
        <Button variant="contained">Submit</Button>
        <Button variant="contained" color="error">
          Clear
        </Button>
      </Stack>
    </Stack>
  );
}

export default Filters;
