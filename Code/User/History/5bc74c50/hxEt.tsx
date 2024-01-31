import { useState } from 'react';
import { OnboardingModalContent } from '../OnboardingModalContent';

type AddChildProps

export const AddChild = () => {
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
