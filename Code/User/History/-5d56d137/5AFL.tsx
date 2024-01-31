import React, { Component } from 'react';
import {
  Carousel as ResponsiveCarousel,
  CarouselProps as ResponsiveCarouselProps
} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export type CarouselProps = ResponsiveCarouselProps & {
  photoCollection?: any;
  items: any;
  showArrows?: any;
  infiniteLoop?: boolean;
  showIndicators?: boolean;
  autoPlay?: any;
  interval?: any;
  axis?: any;
};

export const Carousel = ({
  showArrows = true,
  showIndicators = true,
  infiniteLoop = true,
  autoPlay = false,
  axis = 'horizontal'
  items,
  ...ResponsiveCarouselProps
}: CarouselProps) => {
  return (
    <ResponsiveCarousel
      infiniteLoop={infiniteLoop}
      showArrows={showArrows}
      showIndicators={showIndicators}
      autoPlay={autoPlay}
      {...ResponsiveCarouselProps}
    >
      {items.map((item) => (
        <img src={item} />
      ))}
    </ResponsiveCarousel>
  );
};
