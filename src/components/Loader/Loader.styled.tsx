import { styled } from '@mui/material';
import { Container, AppBar } from '@mui/material';
import { keyframes } from '@emotion/react';

const easeInAndOut = keyframes`
    0% {
      left: 30%;
      opacity: 0;
    }
    48% {
      left: 49%;
      opacity: 1;
    }
    50% {
      left: 51%;
      opacity: 1;
    }
    100% {
      left: 70%;
      opacity: 0;
    }
  `;

export const StyledLoader = styled(AppBar)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: '#000',
  alignItems: 'center',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  '& div': {
    width: '10px',
    height: '10px',
    borderRadius: '100%',
    backgroundColor: theme.palette.primary.main,
    position: 'absolute',
    left: '30%',
    animation: `${easeInAndOut}  2.5s ease infinite`,
    '&:nth-child(1)': {
      animationDelay: '0s',
      opacity: 0,
    },
    '&:nth-child(2)': {
      animationDelay: '0.3s',
      opacity: 0.8,
    },
    '&:nth-child(3)': {
      animationDelay: '0.6s',
      opacity: 0.5,
    },
    '&:nth-child(4)': {
      animationDelay: '0.9s',
      opacity: 0.2,
    },
    '@keyframes customAnimation': {
      '0%': {
        left: '30%',
        opacity: 0,
      },
      '48%': {
        left: '49%',
        opacity: 1,
      },
      '50%': {
        left: '51%',
        opacity: 1,
      },
      '100%': {
        left: '70%',
        opacity: 0,
      },
    },
  },
}));
