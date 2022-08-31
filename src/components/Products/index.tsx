import React, { useEffect } from 'react';
import { Typography } from '@mui/material';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import {
  ProductsContainer,
  ProductsList,
  ProductsListItem,
  ProductsTitle,
} from './Products.styled';

import {
  finolexLogo,
  anchorLogo,
  greatwhiteLogo,
  syskaLogo,
  gmLogo,
  asianpaintsLogo,
  havellsLogo,
} from '../../assets/images';

const productVariants = {
  visible: {
    opacity: 1,
  },
  hidden: { opacity: 0 },
};

const productsList = [
  { image: havellsLogo },
  { image: anchorLogo },
  { image: greatwhiteLogo },
  { image: gmLogo },
  { image: finolexLogo },
  { image: asianpaintsLogo },
];

export default function Products() {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <ProductsContainer ref={ref} id='products'>
      <ProductsTitle variant='h3' align='center'>
        Available Products
      </ProductsTitle>
      <ProductsList>
        {productsList.map((product, index) => (
          <ProductsListItem
            key={product.image.toString()}
            initial='hidden'
            animate={controls}
            transition={{
              type: 'spring',
              duration: 0.5,
              delay: 0.5 * (index + 1),
            }}
            variants={productVariants}
          >
            <img src={product.image} alt='' />
          </ProductsListItem>
        ))}
      </ProductsList>
    </ProductsContainer>
  );
}
