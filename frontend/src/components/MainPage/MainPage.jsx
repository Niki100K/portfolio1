import React from 'react';
import './MainPage.css';
import { useInView } from 'react-intersection-observer'

import { AnimationSkills } from './Fragments/AnimationSkills/AnimationSkills';
import { Projects } from './Fragments/Projects/Projects';
import { Planet } from './Fragments/Planet/Planet';
import { AboutMe } from './Fragments/AboutMe/AboutMe';
import { Contact } from './Fragments/Contact/Contact';
import StartLogo from './Fragments/StartLogo/StartLogo';

import NavBar from '../NavBar/NavBar';
const MainPage = () => {
  const [ref1, inView1] = useInView({triggerOnce: true})
  return (
    <React.Fragment>
      <NavBar />
      <div className='MainPage c f'>
        <StartLogo />
        <AnimationSkills />
        <div className='Maincontainer c' ref={ref1}>
          <div className='con c' style={{maxWidth: 1200, alignItems: 'flex-start', overflow: 'hidden'}}>
            <div className='mini-cards c f'>
              <div className={`transition ${inView1 && 'show'} c`}><Planet /></div>
              <div className={`transition ${inView1 && 'show'} c`} style={{transitionDelay: '.4s'}}><AboutMe /></div>
              <div className={`transition ${inView1 && 'show'} c`} style={{transitionDelay: '.8s'}}><Contact /></div>
            </div>
            <div className='large-cards c f'>
              <div className={`transition ${inView1 && 'show'} c`}><Projects /></div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MainPage;
