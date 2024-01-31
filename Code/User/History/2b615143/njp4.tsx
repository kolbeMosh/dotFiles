import { OnBoardingModalFooter } from '../OnboardingModalFooter';
import { setCookie } from 'cookies-next';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { createTeacherAccount } from 'src/app/users/auth/signup/signup-actions';
import { CustomerGroups, STORE_CONTEXT_KEY } from 'src/lib/constants';
import {
  IBCUserBirthday,
  School,
  TeacherClassroom
} from 'src/lib/types/user-types';
import { AccountDetails } from '../AccountDetails';
import { FindSchool } from '../schoolSearch/FindSchool';
import { ParentInfo } from './ParentInfo';
import { AddChild } from './AddChild';

type ParentOnboardingFlowProps = {
  onBackClick: () => void;
};

export const ParentOnboardingFlow = ({
  onBackClick
}: ParentOnboardingFlowProps) => {
  const [currentStep, setCurrentStep] = useState(1);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [readingLevel, setReadingLevel] = useState('');
  const [birthday, setBirthday] = useState<IBCUserBirthday>();
  const [acceptTOS, setAcceptTOS] = useState(false);
  const [selectedSchool, setSelectedSchool] = useState<School>();
  // const [classrooms, setClassrooms] = useState<ParentClassroom[]>();
  const [profileImageUrl, setProfileImageUrl] = useState('');

  const [signupLoading, setSignupLoading] = useState(false);
  const [signupError, setSignupError] = useState('');

  const validateSignupForm = () => {
    return true;
  };

  if (currentStep === 1) {
    return (
      <FindSchool
        selectedSchool={selectedSchool}
        setSelectedSchool={setSelectedSchool}
        onNextClick={() => {
          setCurrentStep((prev) => prev + 1);
        }}
        onBackClick={onBackClick}
        currentStep={currentStep}
      />
    );
  }

  if (currentStep === 2) {
    return (
      <AccountDetails
        currentStep={currentStep}
        onNextClick={() => {
          setCurrentStep((prev) => prev + 1);
        }}
        onBackClick={() => {
          setCurrentStep((prev) => prev - 1);
        }}
        firstName={firstName}
        setFirstName={setFirstName}
        lastName={lastName}
        setLastName={setLastName}
        title={title}
        setTitle={setTitle}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        acceptTOS={acceptTOS}
        setAcceptTOS={setAcceptTOS}
        headerText='Create Parent Account'
        enableTitle={false}
      />
    );
  }

  if (currentStep === 3) {
    return (
      <ParentInfo
        onBackClick={() => {
          setCurrentStep((prev) => prev - 1);
        }}
        onNextClick={() => {}}
        currentStep={currentStep}
      />
    );
  }

  if (currentStep === 4) {
    return (
      <AddChild  onBackClick={() => {
          setCurrentStep((prev) => prev - 1);
        }}
    )
  }
};
