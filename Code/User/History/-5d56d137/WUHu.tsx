'use client';
import { Button } from '@nextui-org/react';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Carousel as ResponsiveCarousel,
  CarouselProps as ResponsiveCarouselProps
} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// type CarouselProps = ResponsiveCarouselProps & {
//   photoCollection?: any;
//   classNames: {};
// };

type CarouselProps = {
  photoCollection?: any;
  classNames: {};
  showArrows: any;
  showIndicators: any;
  infiniteLoop: any;
};

export const Carousel = ({
  showArrows = true,
  showIndicators = true,
  infiniteLoop = true,
  ...props
}: CarouselProps) => {
  let items = [
    'https://res.cloudinary.com/dsewycgig/image/upload/v1705693815/ibf_assets/homepage_hero/SlidingBanners_2400x1200-Classics-V2_j8dyqr.jpg',
    'https://res.cloudinary.com/dsewycgig/image/upload/v1705693814/ibf_assets/homepage_hero/Fostering_Faith_Sliding_Banners_sgtqys.jpg',
    'https://res.cloudinary.com/dsewycgig/image/upload/v1705693814/ibf_assets/homepage_hero/SlidingBanners_2400x1200-Loupio-V2_brzbzg.jpg'
  ];
  return (
    <ResponsiveCarousel
      {...props}
      showArrows={showArrows}
      showIndicators={showIndicators}
    >
      {items.map((item) => (
        <img src={item} />
      ))}
    </ResponsiveCarousel>
  );
};