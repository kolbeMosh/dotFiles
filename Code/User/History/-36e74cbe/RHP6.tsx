'use client';

import React, { Component } from 'react';
import { Carousel, CarouselProps } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { fetchPhotos } from '../../server-actions/cloudinary-actions';

type HeroProps = Partial<CarouselProps> & {
  photoCollection: any;
};

export const HeroSection = ({ photoCollection }: HeroProps) => {
  return (
    <Carousel
      showArrows={true}
      // showIndicators={true}
      infiniteLoop={true}
      autoPlay={true}
      interval={3000}
      showStatus={false}
    >
      {photoCollection.map((item) => (
        <img src={item} />
      ))}
    </Carousel>
  );
};
