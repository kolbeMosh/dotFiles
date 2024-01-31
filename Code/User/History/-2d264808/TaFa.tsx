import { CustomerGroups } from 'src/lib/constants';
import { OnboardingFlowProps } from '../OnboardingFlow';
import { OnboardingModalContent } from '../OnboardingModalContent';
import { useEffect, useState } from 'react';
import { StudentDetails } from './StudentDetails';

type AddStudentProps = {
  signupLoading: boolean;
  signupError: string;
  signupInputs: SignupInputs;
  setSignupInputs: Dispatch<SetStateAction<SignupInputs>>;
};

export const AddStudentFlow = ({
  signupInputs,
  setSignupInputs,
  onBackClick,
  currentStep,
  signupLoading,
  signupError
}: AddStudentProps) => {
  const [studentStep, setStudentStep] = useState(1);

  if (studentStep === 1) {
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

  if (studentStep === 2) {
  }
};
