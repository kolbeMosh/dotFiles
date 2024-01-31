import { Suspense } from 'react';
import { Carousel } from 'src/app/components/Carousel';
import { Footer } from 'src/app/components/footer/Footer';
import { ThreeItemGrid } from 'src/app/components/grid/ThreeItemGrid';
import { OnboardingModal } from './users/auth/signup/OnboardingModal';
import { Image } from '@nextui-org/react';

export const HomePage = async () => {
  return (
    <>
      <ThreeItemGrid />
      <Image
        src='https://res.cloudinary.com/dsewycgig/image/upload/v1703190079/ibc_assets/Fostering_Faith_Sliding_Banners_ymib3p.jpg'
        className='block w-full object-cover'
      ></Image>
      <Suspense>
        <Carousel />
        <Suspense>
          <Footer />
        </Suspense>
        <OnboardingModal />
      </Suspense>
    </>
  );
};