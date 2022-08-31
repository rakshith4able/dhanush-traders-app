import { Box, styled, Typography,Breakpoint } from '@mui/material';

export const GalleryTitle = styled(Typography)(({ theme }) => ({
  color: '#EEE',
  padding: '0 0 .5em 0',
  width: '80%',
  fontWeight: 300,
  fontSize: '2.5rem',
  lineHeight: 1,
  margin: '0 auto',
  textAlign:'center',
  [theme.breakpoints.down('lg' as Breakpoint)]: {
    width: '100%',
    fontSize: '3rem',
  },
  [theme.breakpoints.down('md' as Breakpoint)]: {
    fontSize: '3rem',
    textAlign: 'center',
  },
  [theme.breakpoints.down('sm' as Breakpoint)]: {
    fontSize: '2rem',
    textAlign: 'center',
  },
}));

export const GalleryContainer = styled(Box)(({ theme }) => ({
  height: '100vh',

  backgroundColor: theme.palette.primary.main,
  display: 'flex',
  flexDirection:"column",
  justifyContent: 'space-evenly',
  alignItems: 'center',
  transition: '0.3s all ease-in-out',
  padding: theme.spacing(3),
  '& .react-photo-album': {
    width: '100%',
    height: '80%',
    padding: '1em',
    borderRadius: '1em',
    overflow: 'scroll',
    backgroundColor: theme.customColors.white,

    '&::-webkit-scrollbar': {
      width: 20,
      borderRadius: '1em',
    },

    '&::-webkit-scrollbar-track': {
      backgroundColor: theme.customColors.white,
      borderRadius: '10em',
    },

    '&::-webkit-scrollbar-thumb': {
      borderRadius: '10em',
      border: '5px solid transparent',
      backgroundClip: 'content-box',
      backgroundColor: theme.palette.primary.main,
    },

    '&:hover': {
      ' &::-webkit-scrollbar-thumb': {
        backgroundColor: theme.palette.secondary.main,
      },
    },
  },

  '& .react-photo-album--photo:hover': {
    transform: 'scale(1.1)',
  },
}));
