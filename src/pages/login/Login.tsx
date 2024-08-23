import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box, Link as MUILink } from '@mui/material';
import { Link ,useNavigate } from 'react-router-dom'; // Import the Link component from react-router-dom
import { validateUser } from '../../api/api'; // Import the mock API function
import './login.css';

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null); // Reset error before validation

    try {
      const isValid = await validateUser({ username, password });
      if (isValid) {
        localStorage.setItem('user', JSON.stringify({ username }));
        // Redirect to home page
        navigate('/');
      } else {
        setError('Invalid username or password');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 3,
          backgroundColor: '#ffffff',
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography variant="h5">Login</Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
          {error && <Typography color="error" align="center">{error}</Typography>}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Login
          </Button>
          <Box sx={{ mt: 2 }}>
            <Typography variant="body2" align="center">
              {"Don't have an account? "}
              <MUILink component={Link} to="/signup" variant="body2">
                Sign Up
              </MUILink>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
