import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export function ChangePassword() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      password: data.get("password"),
      confirmPassword: data.get("confirmPassword"),
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
          <SubscriptionsIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Change Your Password
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField required fullWidth name="password" label="New Password" type="password" id="password" autoComplete="new-password" />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="confirmPassword"
                label="Confirm new Password"
                type="password"
                id="confirmPassword"
                autoComplete="confirmPassword"
              />
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Update Password
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default ChangePassword;;
