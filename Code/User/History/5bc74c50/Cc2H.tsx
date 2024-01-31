import { useState } from 'react';
import { OnboardingModalContent } from '../OnboardingModalContent';
import { OnboardingFlowProps } from '../OnBoardingFlow';

type AddChildProps = OnboardingFlowProps & {};

export const AddChild = (onBackClick, currentStep) => {
  return (
    <OnboardingModalContent
      headerText='Add Your Child'
      onNextClick={() => {}}
      onBackClick={onBackClick}
      nextBtnDisabled={true}
      currentStep={currentStep}
    >
      <div className='mb-3'></div>
    </OnboardingModalContent>
  );
};
