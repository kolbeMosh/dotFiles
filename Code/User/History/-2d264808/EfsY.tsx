import { CustomerGroups } from 'src/lib/constants';
import { OnboardingFlowProps } from '../OnboardingFlow';
import { OnboardingModalContent } from '../OnboardingModalContent';
import { useEffect, useState } from 'react';
import { StudentDetails } from './StudentDetails';
import { ParentFindSchool } from './ParentFindSchool';
import { School } from 'src/lib/types/types';

type AddStudentProps = OnboardingFlowProps & {
  signupLoading: boolean;
  signupError: string;
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
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [selectedSchool, setSelectedSchool] = useState<School>();

  console.log(`Student Step: ${studentStep}`);
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
    {
      console.log('this one worked!');
    }
    // <ParentFindSchool
    //   signupInputs={signupInputs}
    //   setSignupInputs={setSignupInputs}
    //   selectedSchool={selectedSchool}
    //   setSelectedSchool={setSelectedSchool}
    //   currentStep={studentStep}
    //   onNextClick={() => {
    //     setStudentStep((prev) => prev + 1);
    //   }}
    //   onBackClick={() => {
    //     setStudentStep((prev) => prev - 1);
    //   }}
    //   firstName={firstName}
    // />;
    <h1>Hellowrld</h1>;
  }
};
