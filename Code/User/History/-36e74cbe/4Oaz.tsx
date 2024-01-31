import React, { Component } from 'react';
import { Carousel, CarouselProps } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

type HeroProps = Partial<CarouselProps> & {
  photoCollection?: any;
  items: any;
};

export const Hero = ({ items }: HeroProps) => {
  return (
    <Carousel
      showArrows={true}
      showIndicators={true}
      infiniteLoop={true}
      autoPlay={true}
      interval={3000}
    >
      {items.map((item) => (
        <img src={item} />
      ))}
    </Carousel>
  );
};
