import { useState } from 'react';
import { OnboardingModalContent } from '../OnboardingModalContent';
import { OnboardingFlowProps } from '../OnBoardingFlow';
import { Input } from '@nextui-org/react';

type AddChildProps = OnboardingFlowProps & {};

/* 
    TODO: waiting on new database setup to define value functions
*/

export const AddChild = (onBackClick, currentStep) => {
  return (
    <OnboardingModalContent
      headerText='Add Your Child'
      onNextClick={() => {}}
      onBackClick={onBackClick}
      nextBtnDisabled={true}
      currentStep={currentStep}
    >
      <div className='mb-3'>
        <label className='mb-2 inline-block font-poppins text-[#424242]'>
          Child's Name*
        </label>
        <div className='mb-3 flex gap-4'>
          <Input
            placeholder='First name'
            className='w-full flex-1'
            aria-label='First Name'
            required={true}
            // value={firstName}
            // onChange={(e) => setFirstName(e.target.value)}
          />
          <Input
            className='w-full flex-1'
            placeholder='Last name'
            aria-label='Last Name'
            required={true}
            // value={lastName}
            // onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </div>
    </OnboardingModalContent>
  );
};