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
      <Suspense>
        <Image
          src='https://res.cloudinary.com/dsewycgig/image/upload/v1703190079/ibc_assets/Fostering_Faith_Sliding_Banners_ymib3p.jpg'
          className='mb-10 block w-full object-cover'
          alt='Ignatius Book Club Hero Image'
        ></Image>
        <Carousel />
        <Suspense>
          <Footer />
        </Suspense>
        <OnboardingModal />
      </Suspense>
    </>
  );
};
