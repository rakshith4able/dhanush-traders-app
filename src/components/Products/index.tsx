import { Typography } from '@mui/material';
import React from 'react';
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

export default function Products() {
  return (
    <ProductsContainer id='products'>
      <ProductsTitle variant='h3' align='center'>
        Available Products
      </ProductsTitle>
      <ProductsList>
        <ProductsListItem>
          <img src={havellsLogo} alt='' />
        </ProductsListItem>
        <ProductsListItem>
          <img src={anchorLogo} alt='' />
        </ProductsListItem>
        <ProductsListItem>
          <img src={greatwhiteLogo} alt='' />
        </ProductsListItem>
        <ProductsListItem>
          <img src={gmLogo} alt='' />
        </ProductsListItem>
        <ProductsListItem>
          <img src={finolexLogo} alt='' />
        </ProductsListItem>
        <ProductsListItem>
          <img src={asianpaintsLogo} alt='' />
        </ProductsListItem>
      </ProductsList>
    </ProductsContainer>
  );
}
