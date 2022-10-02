import React from 'react';
import {
  ServicesContainer,
  ServicesList,
  ServicesListItem,
  ServicesTitle,
} from './Services.styled';
import PaintIcon from '@mui/icons-material/FormatPaint';
import ElectricalIcon from '@mui/icons-material/Cable';
import WeldingIcon from '@mui/icons-material/Flare';

export default function Services() {
  return (
    <ServicesContainer id='services'>
      <ServicesTitle variant='h3' align='center'>
        Services
      </ServicesTitle>
      <ServicesList>
        <ServicesListItem>
          <ElectricalIcon />
          <div>
            <h2>Electrical Wiring</h2>
            <p>We carry out electrical wiring of buildings.</p>
          </div>
        </ServicesListItem>
        <ServicesListItem>
          <PaintIcon />
          <div>
            <h2>Painting Solutions</h2>
            <p>We provide paiting solutions for your buildings.</p>
          </div>
        </ServicesListItem>
        <ServicesListItem>
          <WeldingIcon />
          <div>
            <h2>Welding</h2>
            <p>We carry out welding works for building designs using steel.</p>
          </div>
        </ServicesListItem>
      </ServicesList>
    </ServicesContainer>
  );
}
