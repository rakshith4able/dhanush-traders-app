import { Box, styled, Typography } from '@mui/material';
import { Breakpoint } from '@mui/material';

export const ContactContainer = styled(Box)(({ theme }) => ({
  height: '100vh',
  backgroundColor: theme.palette.secondary.main,
}));

export const ContactText = styled(Typography)(({ theme }) => ({
  fontSize: '6rem',
  [theme.breakpoints.down('lg' as Breakpoint)]: {
    fontSize: '5rem',
  },
  [theme.breakpoints.down('md' as Breakpoint)]: {
    fontSize: '2rem',
  },
}));
