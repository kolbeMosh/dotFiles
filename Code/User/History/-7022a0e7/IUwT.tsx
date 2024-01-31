'use client';
import { Button } from '@nextui-org/react';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from '@ibc/ui/components';
import { CarouselProps } from '@ibc/ui/components';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// type CarouselProps = ResponsiveCarouselProps & {
//   photoCollection?: any;
//   classNames: {};
// };

type HeroProps = CarouselProps & {
  items: any;
};

export const Hero = ({
  showArrows = true,
  showIndicators = true,
  infiniteLoop = true,
  autoPlay = true,
  interval = 3000,
  items,
  ...props
}: HeroProps) => {
  return (
    <Carousel
      items={items}
      showArrows={true}
      showIndicators={true}
      infiniteLoop={true}
    />
  );
};
