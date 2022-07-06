import React from 'react';
import ReactPlayer from 'react-player';

import {
  HeroContainer,
  HeroTitle,
  HeroDescription,
  GridItem1,
  GridItem2,
  GridContainer,
} from './Hero.styled';

export default function Hero() {
  return (
    <HeroContainer>
      <GridContainer container>
        <GridItem1 item xs={12} md={6}>
          <HeroTitle>Dhanush Traders</HeroTitle>
          <HeroDescription>
            We sell electrical goods, PVC Pipes and fittings, and hardware
            materials.
          </HeroDescription>
        </GridItem1>
        <GridItem2 item xs={12} md={6}>
          <ReactPlayer  />
        </GridItem2>
      </GridContainer>
    </HeroContainer>
  );
}
