import React from 'react';
import { Box } from '@mui/material';
import { IconContainer, IconButton } from './Navbar.styled';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
export default function ContactIconsContainer() {
  return (
    <Box>
      <IconContainer>
        <IconButton
          onClick={() => {
            window.location.href = 'tel:+919481820408';
          }}
        >
          <PhoneAndroidIcon />
        </IconButton>
        <IconButton
          onClick={() => {
            window.location.href = 'mailto:suprithkumar03@gmail.com';
          }}
        >
          <EmailIcon />
        </IconButton>
        <IconButton
          onClick={() => {
            window.location.href = 'https://wa.me/919481820408';
          }}
        >
          <WhatsAppIcon />
        </IconButton>
      </IconContainer>
    </Box>
  );
}
