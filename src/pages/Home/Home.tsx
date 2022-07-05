import React from 'react';
import { Outlet } from 'react-router-dom';

import { HomeContainer } from './Home.styled';
import Navbar from '../../components/Navbar/Navbar';
import Loader from '../../components/Loader/Loader';

export default function Home() {
  return (
    <HomeContainer>
      <Navbar />
      <Outlet />
      {/* <Loader /> */}
    </HomeContainer>
  );
}
