import React, { Component } from 'react';
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
  infiniteLoop = true,
  autoPlay = false,
  items
}: CarouselProps) => {
  return (
    <ResponsiveCarousel
      infiniteLoop={infiniteLoop}
      showArrows={showArrows}
      showIndicators={showIndicators}
      autoPlay={autoPlay}
    >
      {items.map((item) => (
        <img src={item} />
      ))}
    </ResponsiveCarousel>
  );
};
