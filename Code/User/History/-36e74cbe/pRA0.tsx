import React, { Component } from 'react';
import { Carousel, CarouselProps } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

type HeroProps = Partial<CarouselProps> & {
  photoCollection?: any;
  items: any;
};

export class Hero {
  render() {
    let items = [
      'https://res.cloudinary.com/dsewycgig/image/upload/v1705693815/ibf_assets/homepage_hero/SlidingBanners_2400x1200-Classics-V2_j8dyqr.jpg',
      'https://res.cloudinary.com/dsewycgig/image/upload/v1705693814/ibf_assets/homepage_hero/Fostering_Faith_Sliding_Banners_sgtqys.jpg',
      'https://res.cloudinary.com/dsewycgig/image/upload/v1705693814/ibf_assets/homepage_hero/SlidingBanners_2400x1200-Loupio-V2_brzbzg.jpg'
    ];
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
  }
}

// export const Hero = ({ items }: HeroProps) => {
//   return (
//     <Carousel
//     //   showArrows={true}
//     //   showIndicators={true}
//     //   infiniteLoop={true}
//     //   autoPlay={true}
//     //   interval={3000}
//     >
//       {items.map((item) => (
//         <img src={item} />
//       ))}
//     </Carousel>
//   );
// };
