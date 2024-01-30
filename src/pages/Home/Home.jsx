import React from 'react';
import { HeroSlider } from '../../components/Hero/HeroSlider';
import './Home.css';
import { Feature } from '../../components/Feature/Feature';
import { About } from '../../components/About/About';
import { Classes } from '../../components/Classes/Classes';
import Counter from '../../components/Counter/Counter';
import PortFolio from '../../components/Portfolio/PortFolio';
import Blog from '../../components/Blog/Blog';
import Brands from '../../components/Brands/Brands';

export const Home = () => {
  return (
    <>
      <HeroSlider />
      <Feature />
      <About />
      <Classes />
      <Counter />
      <PortFolio />
      <Blog />
      <Brands />
    </>
  );
};
