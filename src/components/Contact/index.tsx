import { Typography } from '@mui/material';
import React, { useRef } from 'react';

import { ContactContainer, ContactText } from './Contact.styled';

export default function Contact() {
  return (
    <ContactContainer id='contact'>
      <ContactText variant='h1' align='center'>
        Contact Us
      </ContactText>
    </ContactContainer>
  );
}
