import React, { useState } from 'react';
import {
  Toolbar,
  Typography,
  Box,
  Menu,
  MenuItem,
  Button,
  IconButton,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { Link } from 'react-scroll';

import { NavbarContainer, StyledAppBar } from './Navbar.styled';
import ContactIconsContainer from './ContactIconsContainer';
import navLinks from './navLinks';

// const navLinks = ['Home', 'Products', 'Gallery', 'Services'];

export default function Navbar(props: any) {
  const { refs } = props;
  const theme = useTheme();
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
      <NavbarContainer maxWidth='xl' id='home'>
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
              {navLinks.map((link) => (
                <Link
                  to={link.linkText.toLowerCase()}
                  key={link.linkText}
                  smooth
                >
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: 'white',
                      display: 'block',
                    }}
                  >
                    {link.linkText}
                  </Button>
                </Link>
              ))}
            </Box>
            <ContactIconsContainer />
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
                {navLinks.map((link) => (
                  <MenuItem key={link.linkText}>
                    <Link to={link.linkText.toLowerCase()} onClick={handleCloseNavMenu} smooth>
                      <Typography textAlign='center'>
                        {link.linkText}
                      </Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <ContactIconsContainer />
          </Box>
        </Toolbar>
      </NavbarContainer>
    </StyledAppBar>
  );
}
