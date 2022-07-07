import { Box, styled } from '@mui/material';
import { Container, AppBar, IconButton as IButton } from '@mui/material';

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  height: '10vh',
}));

export const NavbarContainer = styled(Container)(({ theme }) => ({
  height: '100%',
}));

export const IconContainer = styled(Box)(({ theme }) => ({
  color: theme.palette.secondary.main,
}));

export const IconButton = styled(IButton)(({ theme }) => ({
  color: theme.palette.secondary.main,
}));
