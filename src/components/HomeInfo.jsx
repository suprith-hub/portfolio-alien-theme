import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const renderContent = {
    1: (
        <div className='info-box'>
          <p className='font-medium sm:text-xl text-center'>
            Worked as an intern, open source contributor <br /> and picked up many skills along the way
          </p>
  
          <Link to='/about' className='neo-brutalism-white neo-btn'>
            Learn more
            <img src={arrow} alt='arrow' className='w-3 h-3 object-contain' />
          </Link>
        </div>
    ),
    2: (
        <div className='info-box'>
          <p className='font-medium text-center sm:text-xl'>
            Completed multiple projects over my tebure. <br /> Curious about them?
          </p>
  
          <Link to='/projects' className='neo-brutalism-white neo-btn'>
            Visit my portfolio
            <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
          </Link>
        </div>
    ),
    3: (
        <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          Need a project done or looking for a dev? <br/> I'm just a few keystrokes away
        </p>
  
        <Link to='/contact' className='neo-brutalism-white neo-btn'>
          Let's talk
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    ),
    4: (
        <h1 className='sm:text-xl sm:leading-snug text-center py-4 px-8 text-white mx-5'>
            Hi, I'm
            <span className='font-semibold mx-2 text-white'>Suprith</span>
            👋
            <br />
            A Software Engineer from India
        </h1>
    )
}

const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
