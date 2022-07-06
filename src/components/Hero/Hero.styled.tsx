import { Box, Grid, styled, Typography } from '@mui/material';
import { Breakpoint } from '@mui/material';

export const HeroContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#EEEEEE',
  height:'auto'
}));

export const HeroTitle = styled(Typography)(({ theme }) => ({
  color: '#EEE',
  padding: '0 1rem',
  width: '80%',
  fontWeight: 300,
  fontSize: '7rem',
  lineHeight: 1,
  margin: '0 auto',
  [theme.breakpoints.down('lg' as Breakpoint)]: {
    width: '100%',
    fontSize: '6rem',
  },
  [theme.breakpoints.down('md' as Breakpoint)]: {
    fontSize: '5rem',
    textAlign: 'center',
  },
}));

export const HeroDescription = styled(Typography)(({ theme }) => ({
  color: '#EEE',
  padding: '0 1.1rem',
  fontWeight: 200,
  fontSize: '3rem',
  lineHeight: 1.5,
  textAlign: 'justify',
  width: '80%',
  margin: '1em auto',
  [theme.breakpoints.down('lg' as Breakpoint)]: {
    width: '100%',
  },
  [theme.breakpoints.down('md' as Breakpoint)]: {
    fontSize: '2rem',
    textAlign: 'center',
    width: '70%',
    margin: '1em auto',
  },
  [theme.breakpoints.down('sm' as Breakpoint)]: {
    fontSize: '2rem',
    textAlign: 'center',
    width: '100%',
    margin: '1em auto',
  },
}));

export const GridContainer = styled(Grid)(({ theme }) => ({
  minHeight: '90vh',
  backgroundColor:theme.palette.primary.main,
  [theme.breakpoints.down('lg' as Breakpoint)]: {
  
  },
  [theme.breakpoints.down('md' as Breakpoint)]: {
  },
}));


export const GridItem1 = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  [theme.breakpoints.down('lg' as Breakpoint)]: {
    height: '90vh',
  },
  [theme.breakpoints.down('md' as Breakpoint)]: {},
}));




export const GridItem2 = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.customColors.lightBlue,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems:'center',
  textAlign:'center',
  [theme.breakpoints.down('lg' as Breakpoint)]: {
  
  },
  [theme.breakpoints.down('md' as Breakpoint)]: {
    height: '100vh',
  },
}));
