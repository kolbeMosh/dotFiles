import { CustomerGroups } from 'src/lib/constants';
import { OnboardingFlowProps } from '../OnboardingFlow';
import { OnboardingModalContent } from '../OnboardingModalContent';
import { useEffect, useState } from 'react';

type AddStudentProps = OnboardingFlowProps & {
  signupLoading: boolean;
  signupError: string;
};

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
    if (currentStep === 2) {
      return (
        <StudentDetails
          signupInputs={signupInputs}
          setSignupInputs={setSignupInputs}
          currentStep={currentStep}
          onNextClick={() => {
            setCurrentStep((prev) => prev + 1);
          }}
          signupLoading={signupLoading}
          signupError={signupError}
          onBackClick={() => {
            setCurrentStep((prev) => prev - 1);
          }}
        />
      );
    }
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