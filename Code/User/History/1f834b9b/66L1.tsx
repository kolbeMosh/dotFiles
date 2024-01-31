import { Dispatch, SetStateAction, useEffect, useState, useRef } from 'react';
import { OnBoardingModalFooter } from './OnboardingModalFooter';
import { Checkbox, Input, Link } from '@nextui-org/react';
import { OnBoardingModalHeader } from './OnboardingModalHeader';
import { EyeSlashFilledIcon } from './assets/EyeSlashFilledIcon';
import { EyeFilledIcon } from './assets/EyeFilledIcon';
import { OnboardingFlowProps } from './OnBoardingFlow';

type AccountDetailsProps = OnboardingFlowProps & {
  firstName: string;
  setFirstName: Dispatch<SetStateAction<string>>;
  lastName: string;
  setLastName: Dispatch<SetStateAction<string>>;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  phoneNumber: string;
  setPhoneNum: Dispatch<SetStateAction<string>>;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
};

export const AccountDetails = ({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  onBackClick,
  currentStep,
  onNextClick,
  title,
  setTitle,
  phoneNumber,
  setPhoneNum
}: AccountDetailsProps) => {
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(!!(firstName && lastName && title));
  }, [firstName, lastName, title]);

  return (
    <div>
      <OnBoardingModalHeader
        text='Create Teacher Account'
        currentStep={currentStep}
      />

      <div className='p-10'>
        <div className='mb-5'>
          <div className='mx-6 mb-3 mt-1'>
            <h4>Title*</h4>
            <Input
              placeholder={title ? title : ''}
              radius='lg'
              variant='bordered'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className='mx-6 mb-3 mt-1'>
            <h4>First Name*</h4>
            <Input
              radius='lg'
              variant='bordered'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className='mx-6 mb-3 mt-1'>
            <h4>Last Name*</h4>
            <Input
              radius='lg'
              variant='bordered'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className='mx-6 mb-3 mt-1'>
            <h4>Mobile Number</h4>
            <Input
              label={phoneNumber ? phoneNumber : ''}
              radius='lg'
              variant='bordered'
              pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
              value={phoneNumber}
              onChange={(e) => setPhoneNum(e.target.value)}
            />
          </div>
        </div>

        <OnBoardingModalFooter
          nextDisabled={!isValid}
          onBackClick={onBackClick}
          onNextClick={onNextClick}
        />
      </div>
    </div>
  );
};
