import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box, Link as MUILink } from '@mui/material';
import { Link } from 'react-router-dom'; // Import the Link component from react-router-dom
import { registerUser } from '../../api/api'; // Import the mock API function
import './signup.css';

const Signup: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null); // Reset error before validation

    const success = await registerUser({ username, password, email });
    if (success) {
      alert('Signed up successfully!');
    } else {
      setError('Username or email already exists');
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
        <Typography variant="h5">Signup</Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
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
            Signup
          </Button>
          <Box sx={{ mt: 2 }}>
            <Typography variant="body2" align="center">
              {"Already have an account? "}
              <MUILink component={Link} to="/login" variant="body2">
                Login
              </MUILink>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Signup;
