import { styled, Box, Typography, Breakpoint } from '@mui/material';

import { convertHexToRGBA } from '../../utils/colors';

export const ProductsContainer = styled(Box)(({ theme }) => ({
  height: '100vh',
  backgroundColor: theme.customColors.darkGrey,
  padding: theme.spacing(3),
  display:'flex',
  flexDirection:'column',
  justifyContent:'space-evenly'
}));

export const ProductsList = styled(Box)(({ theme }) => ({
  height: '80%',
  width: '100%',
  borderRadius: '1em',
  backgroundColor: convertHexToRGBA(theme.customColors.white, 1),
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  justifyItems: 'center',
  padding: '1em',
  [theme.breakpoints.down('lg' as Breakpoint)]: {
    gridTemplateColumns: '1fr 1fr',
  },
  [theme.breakpoints.down('sm' as Breakpoint)]: {
    gridTemplateColumns: '1fr',
  },

}));

export const ProductsListItem = styled(Box)(({ theme }) => ({
  width: '12rem',
  borderRadius: '1em',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.down('md' as Breakpoint)]: {
    width: '8rem',
  },
  [theme.breakpoints.down('sm' as Breakpoint)]: {
    width: '8rem',
    
  },
  '& img': {
    width: '100%',
  },

}));

export const ProductsTitle = styled(Typography)(({ theme }) => ({
  color: '#EEE',
  padding: '0 0 .5em 0',
  width: '80%',
  fontWeight: 300,
  fontSize: '2.5rem',
  lineHeight: 1,
  margin: '0 auto',
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
