import React, { Component } from 'react';
import {
  Carousel as ResponsiveCarousel,
  CarouselProps as ResponsiveCarouselProps
} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

type HeroProps = Partial<ResponsiveCarouselProps> & {
  photoCollection?: any;
  items: any;
};

export const Hero = ({ items }: HeroProps) => {
  return (
    <ResponsiveCarousel
      showArrows={true}
      showIndicators={true}
      infiniteLoop={true}
      autoPlay={true}
      interval={3000}
    >
      {items.map((item) => (
        <img src={item} />
      ))}
    </ResponsiveCarousel>
  );
};
