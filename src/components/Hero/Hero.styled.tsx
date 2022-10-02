import { Padding } from '@mui/icons-material';
import { Box, Grid, styled, Typography } from '@mui/material';
import { Breakpoint } from '@mui/material';
import { motion } from 'framer-motion';

export const HeroContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#EEEEEE',
  height: 'auto',
}));

export const HeroTitle = styled(motion.h1)(({ theme }) => ({
  color: '#EEE',
  padding: '0 1rem',
  width: '80%',
  fontWeight: 300,
  fontSize: '4rem',
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
    fontSize: '3rem',
    textAlign: 'center',
  },
}));

export const HeroDescription = styled(motion.h2)(({ theme }) => ({
  color: '#EEE',
  padding: '0 1.1rem',
  fontWeight: 200,
  fontSize: '2rem',
  lineHeight: 1.5,
  textAlign: 'justify',
  width: '80%',
  margin: '1em auto',
  [theme.breakpoints.down('lg' as Breakpoint)]: {
    width: '100%',
  },
  [theme.breakpoints.down('md' as Breakpoint)]: {
    fontSize: '1.5rem',
    textAlign: 'center',
    width: '70%',
    margin: '1em auto',
  },
  [theme.breakpoints.down('sm' as Breakpoint)]: {
    fontSize: '1.5rem',
    textAlign: 'center',
    width: '100%',
    margin: '1em auto',
  },
}));

export const GridContainer = styled(Grid)(({ theme }) => ({
  minHeight: '90vh',
  backgroundColor: theme.palette.primary.main,
  justifyContent:'center',
  padding: `0 0  ${theme.spacing(3)}  0`,
}));

export const GridItem1 = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  [theme.breakpoints.down('lg' as Breakpoint)]: {
    height: '90vh',
  },
  [theme.breakpoints.down('md' as Breakpoint)]: {
    height: 'auto',
    // padding:theme.spacing(1),
  },
}));

export const GridItem2 = styled(Grid)(({ theme }) => ({
  // backgroundColor: theme.customColors.lightBlue,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',

  [theme.breakpoints.down('lg' as Breakpoint)]: {},
  [theme.breakpoints.down('md' as Breakpoint)]: {
    justifyContent: 'flex-start',
  },
}));

export const VideoContainer = styled(motion.div)(({ theme }) => ({
  width: '86%',
  borderRadius: '1em',
  overflow: 'hidden',
  boxShadow: `2px 2px 20px ${theme.customColors.darkGrey}`,
}));
