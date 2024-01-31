import { Suspense } from 'react';
import { Carousel } from 'src/app/components/Carousel';
import { Footer } from 'src/app/components/footer/Footer';
import { ThreeItemGrid } from 'src/app/components/grid/ThreeItemGrid';
import { OnboardingModal } from './users/auth/signup/OnboardingModal';

export const HomePage = async () => {
  return (
    <>
      <ThreeItemGrid />
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
