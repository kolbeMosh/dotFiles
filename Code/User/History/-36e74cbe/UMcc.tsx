'use client';

import React, { Component } from 'react';
import { Carousel, CarouselProps } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { fetchPhotos } from '../../server-actions/cloudinary-actions';

type HeroProps = Partial<CarouselProps> & {
  photoCollection: any;
};

// const getPhotoCollection = async () => {
//   let photoCollection = await fetchPhotos('ibf_assets');
// };

export const HeroSection = ({ photoCollection }: HeroProps) => {
  console.log(photoCollection);
  return (
    <Carousel
      showArrows={true}
      showIndicators={true}
      infiniteLoop={true}
      autoPlay={true}
      interval={3000}
    >
      {photoCollection.results.map((item) => (
        <img src={item} />
      ))}
    </Carousel>
  );
};
