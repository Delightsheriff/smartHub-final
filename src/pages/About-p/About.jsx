import React from 'react';
import Brands from '../../components/Brands/Brands';
import Counter from '../../components/Counter/Counter';
import AbtVid from '../../components/Abt-Vid/AbtVid';
import Efficiency from '../../components/Efficiency/Efficiency';
import AbtTitle from '../../components/Abt-Vid/AbtTitle';

const About = () => {
  return (
    <>
      <AbtTitle title="About our Kinter" liContent="About" />
      <Efficiency />
      <Counter />
      <AbtVid />
      <Brands />
    </>
  );
};

export default About;
