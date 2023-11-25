"use client";

import React from 'react'
import Image from 'next/image'
import Button from '@/components/Button'

const Hero = () => {
  const handleScroll = () => {

  }
  return (
    <div className='hero'>
      <div className='flex-1 pt-36 padding-x'>
        <h1 className='hero__title'>
          <span className='text-primary-blue'>Identity Resolution</span>
          {' '}Solution
        </h1>

        <p className='hero__subtitle'>
          Save time and money with our identity resolution solution.
        </p>
        <Button
          label='Learn More'
          className="bg-primary-blue text-white rounded-full mt-10 hover:shadow-lg hover:-translate-y-1 transition duration-300 ease-in-out"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className='w-full h-[500px] rounded-[250px] rounded-tr-none overflow-hidden shadow-2xl'>
          <div className="hero__image">
            <Image
              src="/images/hero.jpg"
              alt='hero'
              width={800}
              height={700}
              className='object-contain'
            />
          </div>
        </div>
        <div className='hero__image-overlay' />
      </div>
    </div>
  )
}

export default Hero
