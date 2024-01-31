'use client';
import { Button } from '@nextui-org/react';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from '@ibc/ui';
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
  items: any;
};

export const Hero = ({
  showArrows = true,
  showIndicators = true,
  infiniteLoop = true,
  items,
  ...props
}: CarouselProps) => {
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
