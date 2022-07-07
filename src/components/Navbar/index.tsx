import React, { useState } from 'react';
import {
  Toolbar,
  Typography,
  Box,
  Menu,
  MenuItem,
  Button,
  IconButton
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { Link } from 'react-scroll';

import { NavbarContainer, StyledAppBar } from './Navbar.styled';
import ContactIconsContainer from './ContactIconsContainer';
// import navLinks from './navLinks';

const pages = ['About', 'Products', 'Gallery', 'Services'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function Navbar(props: any) {
  const { refs } = props;
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <StyledAppBar onClick={() => {}} position='static' elevation={0}>
      <NavbarContainer maxWidth='xl'>
        <Toolbar sx={{ width: '100%' }} disableGutters>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Link to='contact' key={page} smooth>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page}
                  </Button>
                </Link>
              ))}
            </Box>
            <ContactIconsContainer/>
          </Box>

          <Box
            sx={{
              width: '100%',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              display: { xs: 'flex', md: 'none' },
            }}
          >
            <Box sx={{ flex: '10%' }}>
              <IconButton
                size='large'
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleOpenNavMenu}
              >
                <MenuIcon color='secondary' />
              </IconButton>
              <Menu
                id='menu-appbar'
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Link to='contact'>
                      <Typography textAlign='center'>{page}</Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <ContactIconsContainer/>
          </Box>
        </Toolbar>
      </NavbarContainer>
    </StyledAppBar>
  );
}
