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
        <Image className='block w-full'></Image>
        <Carousel />
        <Suspense>
          <Footer />
        </Suspense>
        <OnboardingModal />
      </Suspense>
    </>
  );
};
