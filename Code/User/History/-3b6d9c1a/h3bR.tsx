import { Image } from '@nextui-org/react';
import { Suspense } from 'react';
import { Footer } from '../components/footer/Footer';
import { OnboardingModal } from '../components/onboarding/OnboardingModal';
import { getFeaturedProducts, getPages } from './server-actions';
import { Carousel } from '@ibc/ui/components';

export const HomePage = async () => {
  const pages = await getPages();

  return (
    <>
      <Suspense>
        <Carousel showArrows={true} showIndicators={true} infiniteLoop={true} />
        <Suspense>
          <Footer pages={pages} />
        </Suspense>
        <OnboardingModal />
      </Suspense>
    </>
  );
};
