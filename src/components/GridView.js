import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

function GridView({style,rows}) {
  const space = style.space;
  const columns = style.columns;
  const imageHeight = style.imageHeight;
  const width = style.columns + "fr";

  return (
    <Grid container spacing={space}>
      {rows.map((row) => {
        return (
          <Grid item xs={columns}>
            <Card sx={{ width: width }} raised={true}>
              <CardActionArea>
                <CardMedia component="img" height={imageHeight} src={row.image} />
                <CardContent>
                  <Grid container>
                    <Grid xs={10} display="flex" justifyContent="left">
                      {row.name}
                    </Grid>
                    <Grid xs={2} display="flex" justifyContent="right">
                      {'$' + row.price/100}
                    </Grid>
                  </Grid>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default GridView;
