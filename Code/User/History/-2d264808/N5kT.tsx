import { CustomerGroups } from 'src/lib/constants';
import { OnboardingFlowProps } from '../OnboardingFlow';
import { OnboardingModalContent } from '../OnboardingModalContent';
import { useEffect, useState } from 'react';

type AddStudentProps = OnboardingFlowProps & {};

export const AddStudentFlow = ({
  signupInputs,
  setSignupInputs,
  onNextClick,
  onBackClick,
  currentStep,
  signupLoading,
  signupError
}: AddStudentProps) => {
  const [isValid, setIsValid] = useState(false);
  useEffect(() => {
    setIsValid;
  });

  return (
    <OnboardingModalContent
      headerText='Add Your Child'
      onNextClick={onNextClick}
      onBackClick={onBackClick}
      nextBtnDisabled={!isValid}
      currentStep={currentStep}
      customerGroup={CustomerGroups.PARENT}
      nextBtnLoading={signupLoading}
      signupError={signupError}
    >
      <h1>test</h1>
    </OnboardingModalContent>
  );
};
