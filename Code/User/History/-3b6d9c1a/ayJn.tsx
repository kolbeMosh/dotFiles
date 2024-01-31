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
        <Image
          src='https://res.cloudinary.com/dsewycgig/image/upload/v1703190079/ibc_assets/Fostering_Faith_Sliding_Banners_ymib3p.jpg'
          className='mb-10 block w-full rounded-none object-cover'
          alt='Ignatius Book Fairs Hero Image'
        />
        <Carousel showArrows={true} showIndicators={true} infiniteLoop={true} />
        <Suspense>
          <Footer pages={pages} />
        </Suspense>
        <OnboardingModal />
      </Suspense>
    </>
  );
};
