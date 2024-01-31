import { Autocomplete, Link, ModalBody, ModalHeader } from '@nextui-org/react';
import { School } from 'src/lib/types/user-types';
import { AnchorIcon } from '../assets/AnchorIcon';
import { SetStateAction, Dispatch, useState } from 'react';
import { OnBoardingModalHeader } from '../OnboardingModalHeader';

type SchoolSearchProps = {
  searchCityState?: string;
  searchZip?: string;
  currentStep: number;
  onBackClick: () => void;
  onNextClick: () => void;
  setSelectedSchool: Dispatch<SetStateAction<School>>;
};

export const SchoolSearch = ({
  searchCityState,
  searchZip,
  currentStep,
  onBackClick,
  onNextClick,
  setSelectedSchool
}: SchoolSearchProps) => {
  return (
    <div>
      <OnBoardingModalHeader text='Find a School' currentStep={currentStep} />
      <div className='p-10'>
        <div className='mx-4'>
          <h3>You are searching in:</h3>
          <div className='flex justify-between font-bold'>
            <h4 className='inline-block text-blue-800'>Adak, Alaska</h4>
            <Link
              showAnchorIcon
              anchorIcon={<AnchorIcon />}
              className=''
              href='#'
            >
              Change Location
            </Link>
          </div>
        </div>
      </div>
    </div>

    //
    //     <h3>You are searching in:</h3>
    //     <div className='flex justify-between font-bold'>
    //       <h4 className='inline-block text-blue-800'>Adak, Alaska</h4>
    //       <Link
    //         showAnchorIcon
    //         anchorIcon={<AnchorIcon />}
    //         className=''
    //         href='#'
    //       >
    //         Change Location
    //       </Link>
    //     </div>
    //     <div className='my-5 flex justify-between'>
    //       <h4 className='inline-block'>School Name</h4>
    //       <Link className='font-bold' href='#'>
    //         Cant find your School?
    //       </Link>
    //     </div>
    //     <Autocomplete placeholder='Type to view matches'>
    //       <h1>HIIIIII</h1>
    //     </Autocomplete>
    //   </ModalBody>
    // </>
  );
};
