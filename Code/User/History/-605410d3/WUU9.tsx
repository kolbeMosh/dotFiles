import { Image } from '@nextui-org/react';
import Script from 'next/script';
import { Suspense } from 'react';
import { IBFFooter } from '../../components/IBFFooter/IBFFooter';
import { IBFOnboardingFlow } from '../../components/IBFOnboardingFlow/IBFOnboardingFlow';
import { CategoriesSection } from './CategoriesSection';
import { FavoritesSection } from './FavoritesSection';
import { NewAdditionsSection } from './NewAdditionsSection';
import { ShopByAgeSection } from './ShopByAgeSection';
import { SubscribeSection } from './SubscribeSection';
import { Hero } from './HeroSection';

export const HomePage = async () => {
  return (
    <>
      <Suspense>
        {/* <Image
          src='https://res.cloudinary.com/dsewycgig/image/upload/v1703190079/ibc_assets/Fostering_Faith_Sliding_Banners_ymib3p.jpg'
          className='mb-10 block w-full rounded-none object-cover'
          alt='Ignatius Book Fairs Hero Image'
        /> */}
        <Hero></Hero>
        <div className='ibc-container'>
          <div className='py-8'>
            <FavoritesSection />
          </div>
          <div className='py-8'>
            <Image
              src='https://res.cloudinary.com/dsewycgig/image/upload/v1705723454/ibf_assets/yourschool-banner-1_d052aq.webp'
              alt='Your School Banner'
            />
          </div>
          <div className='py-8'>
            <CategoriesSection />
          </div>
          <div className='py-8'>
            <ShopByAgeSection />
          </div>
          <div className='py-8'>
            <NewAdditionsSection />
          </div>
          <div className='py-8'>
            <h3 className='text-ibc-dark-orange mb-8 flex items-center justify-center font-extrabold uppercase max-md:text-4xl md:text-5xl'>
              Follow Along
            </h3>
            <Script
              src='https://static.elfsight.com/platform/platform.js'
              data-use-service-core
              defer
            />
            <div
              className='elfsight-app-94449e53-e071-4ec8-a7b0-2e608df91bb2'
              data-elfsight-app-lazy
            ></div>
          </div>
          <div className='py-8'>
            <SubscribeSection />
          </div>
        </div>
        <div className='pt-8'>
          <IBFFooter />
        </div>
        <IBFOnboardingFlow />
      </Suspense>
    </>
  );
};