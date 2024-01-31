import { Image } from '@nextui-org/react';
import { Suspense } from 'react';
import { Footer } from '../components/footer/Footer';
import { OnboardingModal } from '../components/onboarding/OnboardingModal';
import { getFeaturedProducts, getPages } from './server-actions';
import { Hero } from '@ibc/ui/components';

export const HomePage = async () => {
  const pages = await getPages();
  let items = [
    'https://res.cloudinary.com/dsewycgig/image/upload/v1705693815/ibf_assets/homepage_hero/SlidingBanners_2400x1200-Classics-V2_j8dyqr.jpg',
    'https://res.cloudinary.com/dsewycgig/image/upload/v1705693814/ibf_assets/homepage_hero/Fostering_Faith_Sliding_Banners_sgtqys.jpg',
    'https://res.cloudinary.com/dsewycgig/image/upload/v1705693814/ibf_assets/homepage_hero/SlidingBanners_2400x1200-Loupio-V2_brzbzg.jpg'
  ];

  return (
    <>
      <Suspense>
        <Hero
          items={items}

        />
        <Suspense>
          <Footer pages={pages} />
        </Suspense>
        <OnboardingModal />
      </Suspense>
    </>
  );
};
