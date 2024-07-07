import React from 'react';
import './app.css';
import HTML5SVG from './assets/images/svg/html5.svg';
import { TestHeaders } from './components/home/test-headers/test-headers';
import { BackgroundImage } from './components/common/background-image/background-image';
import { Button } from './components/common/button/button';

export const App = () => {
  return (
    <main>
    <BackgroundImage bgImage={'hero'} overlayColor='black' />
        <BackgroundImage bgImage={'hero_saturno'} additionalClassname='hero-saturno' />
        <div className='hero-section'>
            <div className='title-container'>
                <p className='title-part-one'>Let's make a web page: </p>
                <p className='title-part-two'>Beyond Code</p>
            </div>
            <p className='text-hero'>Hello my name is Saturno Mangieri and I am a web developer, specialized in frontend. I'm here to help you create amazing user experiences</p>
            <div className='call-to-action-container'>
                <Button 
                    title='About me'
                    buttonStyleType='primary'
                    onClick={() => {}}
                />
                <Button 
                    title='Get in touch'
                    buttonStyleType='agressive'
                    onClick={() => {}}
                />
            </div>
        </div>
        </main>
  )
}
