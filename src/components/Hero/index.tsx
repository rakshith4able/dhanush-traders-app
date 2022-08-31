import React, { useEffect } from 'react';
import ReactPlayer from 'react-player';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AspectRatio from '../AspectRatio/AspectRatio';

import {
  HeroContainer,
  HeroTitle,
  HeroDescription,
  GridItem1,
  GridItem2,
  GridContainer,
  VideoContainer,
} from './Hero.styled';

const heroVariants = {
  visible: {
    y: ['2rem', '0rem'],
    opacity: 1,
  },
  hidden: { opacity: 0 },
};

const videoContainerVariants = {
  videoHidden: { scale: 0.8, opacity: 0 },
  videoVisible: { scale: 1, opacity: 1 },
};

export default function Hero() {
  const controls = useAnimation();
  const videoContainerControls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
      videoContainerControls.start('videoVisible');
    } else {
      controls.start('hidden');
      videoContainerControls.start('videoHidden');
    }
  }, [controls, inView]);

  return (
    <HeroContainer ref={ref}>
      <GridContainer container>
        <GridItem1 item xs={12} md={6}>
          <HeroTitle
            initial='hidden'
            animate={controls}
            transition={{
              type: 'tween',
              duration: 0.5,
            }}
            variants={heroVariants}
          >
            Dhanush Traders
          </HeroTitle>
          <HeroDescription
            initial='hidden'
            animate={controls}
            variants={heroVariants}
            transition={{
              type: 'tween',
              duration: 0.5,
              delay: 0.5,
            }}
          >
            We sell electrical goods, PVC Pipes and fittings, and hardware
            materials.
          </HeroDescription>
        </GridItem1>
        <GridItem2 item xs={12} md={6}>
          <VideoContainer
            initial='videoHidden'
            animate={videoContainerControls}
            variants={videoContainerVariants}
            transition={{
              type: 'tween',
              duration: 0.5,
              delay: 1,
            }}
          >
            <AspectRatio ratio={16 / 9}>
              <ReactPlayer
                url='https://www.youtube.com/watch?v=U9zUaOX8vgE'
                controls
                width='100%'
                height='100%'
                style={{ borderRadius: '1em', overflow: 'hidden' }}
              />
            </AspectRatio>
          </VideoContainer>
        </GridItem2>
      </GridContainer>
    </HeroContainer>
  );
}
