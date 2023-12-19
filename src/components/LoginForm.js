import React from "react";
import { TextField, Button } from "@mui/material";

const LoginForm = ({ onSubmit, onChange, formData }) => {
  return (
    <form onSubmit={onSubmit}>
      <TextField
        fullWidth
        label="Username or Email"
        name="email"
        value={formData.email}
        onChange={onChange}
        margin="normal"
        variant="outlined"
        required
      />
      <TextField
        fullWidth
        label="Password"
        name="password"
        type="password"
        value={formData.password}
        onChange={onChange}
        margin="normal"
        variant="outlined"
        required
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
