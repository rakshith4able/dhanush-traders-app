import { styled } from '@mui/material';
import { Container, AppBar } from '@mui/material';

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  height: '10vh',
}));

export const NavbarContainer = styled(Container)(({ theme }) => ({
  height: '100%',
}));
