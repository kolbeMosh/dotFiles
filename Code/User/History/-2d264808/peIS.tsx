import { CustomerGroups } from 'src/lib/constants';
import { OnboardingFlowProps } from '../OnboardingFlow';
import { OnboardingModalContent } from '../OnboardingModalContent';
import { useEffect, useState } from 'react';
import { StudentDetails } from './StudentDetails';

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
  const [studentStep, setStudentStep] = useState(1);

  if (currentStep === 1) {
    return (
      <StudentDetails
        signupInputs={signupInputs}
        setSignupInputs={setSignupInputs}
        currentStep={studentStep}
        onNextClick={() => {
          setStudentStep((prev) => prev + 1);
        }}
        signupLoading={signupLoading}
        signupError={signupError}
        onBackClick={onBackClick}
      />
    );
  }
};
