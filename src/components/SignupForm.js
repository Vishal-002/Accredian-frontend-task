import React from "react";
import { TextField, Button, Grid } from "@mui/material";
import { styled } from "@mui/system";

const StyledForm = styled("form")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
});

const StyledTextField = styled(TextField)({
  margin: "8px 0",
  width: "100%",
});

const StyledButton = styled(Button)({
  margin: "16px 0",
  width: "100%",
});

const SignupForm = ({ onSubmit, onChange, formData }) => {
  return (
    <StyledForm onSubmit={onSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <StyledTextField
            label="Username"
            name="username"
            value={formData.username}
            onChange={onChange}
            variant="outlined"
            required
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledTextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={onChange}
            variant="outlined"
            required
          />
        </Grid>
      </Grid>
      <StyledTextField
        label="Password"
        name="password"
        type="password"
        value={formData.password}
        onChange={onChange}
        variant="outlined"
        required
      />
      <StyledTextField
        label="Confirm Password"
        name="confirmPassword"
        type="password"
        value={formData.confirmPassword}
        onChange={onChange}
        variant="outlined"
        required
      />
      <StyledButton type="submit" variant="contained" color="primary">
        Sign Up
      </StyledButton>
    </StyledForm>
  );
};

export default SignupForm;
