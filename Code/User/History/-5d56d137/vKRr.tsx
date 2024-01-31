import { Button } from '@nextui-org/react';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Carousel as ResponsiveCarousel,
  CarouselProps as ResponsiveCarouselProps
} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export type CarouselProps = {
  photoCollection?: any;
  items: any;
  showArrows: any;
  infiniteLoop?: boolean;
  showIndicators?: boolean;
  autoPlay?: any;
  interval?: any;
};

export const Carousel = ({
  showArrows = true,
  showIndicators = true,
  infiniteLoop = false,
  items
}: CarouselProps) => {
  return (
    <ResponsiveCarousel showArrows={showArrows} showIndicators={showIndicators}>
      {items.map((item) => (
        <img src={item} />
      ))}
    </ResponsiveCarousel>
  );
};
