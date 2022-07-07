import React from 'react';
import ReactPlayer from 'react-player';

import {
  HeroContainer,
  HeroTitle,
  HeroDescription,
  GridItem1,
  GridItem2,
  GridContainer,
  VideoContainer,
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
          <VideoContainer>
            <ReactPlayer
              url='https://www.youtube.com/watch?v=U9zUaOX8vgE'
              controls
              width='100%'
              style={{ borderRadius: '1em', overflow: 'hidden' }}
            />
          </VideoContainer>
        </GridItem2>
      </GridContainer>
    </HeroContainer>
  );
}
