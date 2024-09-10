import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../login/loginSchema"; 
import { useAuth } from "../../context/AuthContext";
import { loginUser } from "../../Services/loginServices";
import theme from "../../theme/loginTheme";
import { FormData } from "../../types";

const Login: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(loginSchema),
  });
  const navigate = useNavigate();
  const { login } = useAuth();
  const [submitError, setSubmitError] = React.useState<string | null>(null);

  const onSubmit = async (data: FormData) => {
    try {
      setSubmitError(null); 
      const token = await loginUser(data.username, data.password);
      login(token);
      navigate("/");
    } catch (err: any) {
      setSubmitError(err.message || "An unexpected error occurred");
    }
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: theme.spacing(8),
      }}
    >
      <Typography variant="h5" gutterBottom>
        Login
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ mt: theme.spacing(1), width: "100%" }}
      >
        <Controller
          name="username"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Username"
              variant="outlined"
              margin="normal"
              fullWidth
              required
              error={!!errors.username}
              helperText={errors.username?.message as string}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              fullWidth
              required
              error={!!errors.password}
              helperText={errors.password?.message as string}
            />
          )}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: theme.spacing(2) }}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <CircularProgress size={24} color="inherit" />
          ) : (
            "Login"
          )}
        </Button>
        {submitError && (
          <Typography color="error" sx={{ mt: theme.spacing(2) }}>
            {submitError}
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default Login;
