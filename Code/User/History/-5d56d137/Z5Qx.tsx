import { Button } from '@nextui-org/react';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Carousel as ResponsiveCarousel,
  CarouselProps as ResponsiveCarouselProps
} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export type CarouselProps = ResponsiveCarouselProps & {
  photoCollection?: any;
  items: any;
};

export const Carousel = ({
  showArrows = true,
  showIndicators = true,
  infiniteLoop = true,
  items,
  axis = 'horizontal',
  centerSlidePercentage = 100,
  interval = 3000,

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
