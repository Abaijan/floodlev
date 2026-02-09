import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import HeroBlock from '../components/home/heroBlock'
import HowWorks from '../components/home/HowWorks'
import Partners from '../components/home/Partners'
import Socials from '../components/contacts/cosials'
import AboutHome from '../components/home/AboutHome'
import Technology from '../components/home/Technology'
export const Home = () => {
        return (
          <div className="home-page">
              <div className="section"><HeroBlock /></div>
               <div className="section"><AboutHome /></div>
              <div className="section"><HowWorks /></div>
              <div className="section"><Technology /></div>
              <div className="sect-last"><Partners /><Socials /></div> 
          </div>
        );
      }



