import React, { useState, useEffect } from 'react';
import './queries.css'
import Header from './Header';
import profile from './img/profile.jpg';

const Home = () => {
  const [opacity, setOpacity] = useState(0);
  const [typing, setTyping] = useState(false);
  const [isActivated, setIsActivated] = useState(false);

  useEffect(() => {
    // Fade-in effect
    const fadeElement = () => {
      setOpacity(1);
    };

    const opacityTimeout = setTimeout(fadeElement, 500);

   
    return () => clearTimeout(opacityTimeout);
  }, []);

  useEffect(() => {
    
    const startTyping = () => {
      setTyping(true);
    };

    const typingTimeout = setTimeout(startTyping, 3000);

    
    return () => clearTimeout(typingTimeout);
  }, []);

  useEffect(() => {
    
    const checkScroll = () => {

      

      const scrollPosition = window.scrollY;

      const triggerHeightVh = window.innerWidth > 850 ? (3300 / window.innerHeight) * 100 : (400 / window.innerHeight) * 100;

      if (scrollPosition > triggerHeightVh && !isActivated) {
        
        setIsActivated(true);
      }
    };

    checkScroll();

    // Attach the checkScroll function to the 'scroll' event
    window.addEventListener('scroll', checkScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, [isActivated]);

  return (
    <>
      <Header />
      <div className="typing-container">
        <h2 id='home' className='typing-animation'>Hello, I'm La Blue,</h2>
      </div>
      <div className="tattooing"><h1 id='tattoo' style={{ opacity: opacity }}>Tattoo <br /> <div className="artist-container"><span className='tw-text-white artist'>artist</span><span className='tw-text-white artist wave'>artist</span></div></h1></div>
      <div className="typing-container">
        <h2 className={`mini ${typing ? 'typing-animation2' : ''}`}>based in Spain.</h2>
      </div>
      <img id='profile' className={isActivated ? 'active' : ''} src={profile} alt="profile-picture" />
    </>
  );
};

export default Home;
