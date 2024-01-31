import { setCookie } from 'cookies-next';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { CustomerGroups, STORE_CONTEXT_KEY } from 'src/lib/constants';
import { School, SignupInputs } from 'src/lib/types/types';
import { AccountDetails } from '../common/AccountDetails';
import { ParentFindSchool } from '../parent-onboarding/ParentFindSchool';
import { createParentAccount } from '../signup-actions';
import { ConnectToTeacher } from './ConnectToTeacher';
import { StudentDetails } from './StudentDetails';

export type ParentOnboardingFlowProps = {
  onBackClick: () => void;
};

export const ParentOnboardingFlow = ({
  onBackClick
}: ParentOnboardingFlowProps) => {
  const [selectedSchool, setSelectedSchool] = useState<School>();
  const [currentStep, setCurrentStep] = useState(1);
  const [signupInputs, setSignupInputs] = useState({
    bcUser: {
      customer_group_id: CustomerGroups.PARENT
    },
    pgUser: {},
    parentProfile: {}
  } as SignupInputs);
  const [signupLoading, setSignupLoading] = useState(false);
  const [signupError, setSignupError] = useState('');

  const [tosAccepted, setTosAccepted] = useState(false);

  const validateSignupForm = () => {
    return true;
  };

  const createAccount = async () => {
    const isValid = validateSignupForm();
    if (!isValid) {
      return;
    }
    try {
      setSignupLoading(true);
      const signupRes = await createParentAccount(signupInputs);

      if (signupRes.error) {
        throw signupRes.error;
      }

      const parent = signupRes.body;
      await signIn('credentials', {
        email: signupInputs.bcUser.email,
        password: signupInputs.bcUser.authentication.new_password,
        redirect: true,
        callbackUrl: `/users/profile/${parent.bcUser.id}`
      });
      setSignupLoading(false);
      setCookie(STORE_CONTEXT_KEY, String(parent.bcUser.customer_group_id));
    } catch (error) {
      setSignupLoading(false);
      setSignupError(
        typeof error === 'string'
          ? error
          : 'Unexpected signup error, please try again'
      );
    }
  };

  if (currentStep === 1) {
    return (
      <AccountDetails
        signupInputs={signupInputs}
        setSignupInputs={setSignupInputs}
        tosAccepted={tosAccepted}
        setTosAccepted={setTosAccepted}
        currentStep={currentStep}
        headerText='Create Parent Account'
        customerGroup={CustomerGroups.PARENT}
        onNextClick={() => {
          setCurrentStep((prev) => prev + 1);
        }}
        onBackClick={onBackClick}
      />
    );
  }

  if (currentStep === 2) {
    return (
      <StudentDetails
        signupInputs={signupInputs}
        setSignupInputs={setSignupInputs}
        currentStep={currentStep}
        onNextClick={createAccount}
        signupLoading={signupLoading}
        signupError={signupError}
        onBackClick={() => {
          setCurrentStep((prev) => prev - 1);
        }}
      />
    );
  }

  if (currentStep === 2) {
    return (
      <ParentFindSchool
        signupInputs={signupInputs}
        setSignupInputs={setSignupInputs}
        selectedSchool={selectedSchool}
        setSelectedSchool={setSelectedSchool}
        currentStep={currentStep}
        onNextClick={() => {
          setCurrentStep((prev) => prev + 1);
        }}
        onBackClick={() => {
          setCurrentStep((prev) => prev - 1);
        }}
      />
    );
  }

  if (currentStep === 3) {
    return (
      <ConnectToTeacher
        signupInputs={signupInputs}
        setSignupInputs={setSignupInputs}
        selectedSchool={selectedSchool}
        currentStep={currentStep}
        onNextClick={() => {
          setCurrentStep((prev) => prev + 1);
        }}
        onBackClick={() => {
          setCurrentStep((prev) => prev - 1);
        }}
      />
    );
  }
};
