import { styled, Box, Typography, Breakpoint, Paper } from '@mui/material';
import { motion, AnimateSharedLayout } from 'framer-motion';

import { convertHexToRGBA } from '../../utils/colors';

export const ServicesContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  backgroundColor: theme.customColors.darkGrey,
  padding: theme.spacing(3),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
}));

export const ServicesList = styled(Box)(({ theme }) => ({
  height: '80%',
  width: '100%',
  borderRadius: '1em',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gridGap: 10,
  justifyItems: 'center',
  padding: '1em',
  [theme.breakpoints.down('md' as Breakpoint)]: {
    gridTemplateColumns: '1fr',
  },
}));

export const ServicesListItem = styled(Paper)(({ theme }) => ({
  width: '90%',
  height: 350,
  background: theme.customColors.white,
  borderRadius: '1em',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2em',
  '& svg': {
    fontSize: '5rem',
    flex: 3,
    color: theme.palette.primary.main,
  },
  '& div': {
    flex: 3,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  '& h2': {
    fontSize: '1.8rem',
    fontWeight: 400,
  },
  '& p': {
    fontSize: '1.3rem',
    fontWeight: 300,
  },

  [theme.breakpoints.down('lg' as Breakpoint)]: {
    width: '90%',
    margin: '1em 0',
    '& div': {
      flex: 3,
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
    },
    '& h2': {
      fontSize: '1.3rem',
      fontWeight: 400,
    },
    '& p': {
      fontSize: '1.2rem',
      fontWeight: 300,
    },
  },
  [theme.breakpoints.down('md' as Breakpoint)]: {
    width: '70%',
  },
  [theme.breakpoints.down('sm' as Breakpoint)]: {
    width: '90%',
  },
}));

export const ServicesTitle = styled(Typography)(({ theme }) => ({
  color: theme.customColors.white,
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
