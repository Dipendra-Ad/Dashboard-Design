import React from 'react';
import { Box, Typography } from '@mui/material';
import './footer.css';

const Footer: React.FC = () => {
  return (
    <Box component="footer" className="footer" sx={{ p: 2,  textAlign: 'center' }}>
      <Typography variant="body1">Dipenadmin</Typography>
      <Typography variant="body2">
        © Dipen Admin Dashboard
      </Typography>
    </Box>
  );
};

export default Footer;
