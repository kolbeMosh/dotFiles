import { useState } from 'react';
import { OnboardingModalContent } from '../OnboardingModalContent';
import { OnboardingFlowProps } from '../OnBoardingFlow';

type AddChildProps = OnboardingFlowProps & {};

export const AddChild = (onBackClick, currentStep) => {
  return (
    <OnboardingModalContent
      headerText='Find a School'
      onNextClick={() => {}}
      onBackClick={onBackClick}
      nextBtnDisabled={true}
      currentStep={currentStep}
    ></OnboardingModalContent>
  );
};
