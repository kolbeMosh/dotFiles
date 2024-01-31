import { Checkbox } from '@nextui-org/react';
import Link from 'next/link';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Input } from '../../../components/Input/Input';
import { OnboardingFlowProps } from './OnBoardingFlow';
import { OnboardingModalContent } from './OnboardingModalContent';
import { EyeFilledIcon } from './assets/EyeFilledIcon';
import { EyeSlashFilledIcon } from './assets/EyeSlashFilledIcon';
import { Select } from 'src/app/components/Select/Select';
import { isValidData } from './validateData';

type AccountDetailsProps = OnboardingFlowProps & {
  firstName: string;
  setFirstName: Dispatch<SetStateAction<string>>;
  lastName: string;
  setLastName: Dispatch<SetStateAction<string>>;
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  phoneNumber: string;
  setPhoneNum: Dispatch<SetStateAction<string>>;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
  acceptTOS: boolean;
  setAcceptTOS: Dispatch<SetStateAction<boolean>>;
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
  setPhoneNum,
  acceptTOS,
  setAcceptTOS,
  password,
  setPassword,
  email,
  setEmail
}: AccountDetailsProps) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [emailErr, setEmailErr] = useState('');
  const [passErr, setPassErr] = useState('');
  const [phoneErr, setPhoneErr] = useState('');

  useEffect(() => {
    setIsValid(
      !!(
        firstName &&
        lastName &&
        password &&
        email &&
        acceptTOS &&
        !passErr &&
        !emailErr &&
        (!phoneNumber || !phoneErr)
      )
    );
  }, [
    firstName,
    lastName,
    password,
    email,
    acceptTOS,
    passErr,
    emailErr,
    phoneErr
  ]);

  return (
    <OnboardingModalContent
      headerText='Create Teacher Account'
      onNextClick={onNextClick}
      onBackClick={onBackClick}
      nextBtnDisabled={!isValid}
      currentStep={currentStep}
    >
      <>
        <div className='mb-3'>
          <Select
            aria-label='Title'
            placeholder='Your title'
            selectedKeys={title ? [title] : []}
            onChange={(e) => setTitle(e.target.value)}
            label='Title'
            items={['Dr.', 'Fr.', 'Mr.', 'Mrs.', 'Ms.', 'Sr.', 'Other'].map(
              (t) => ({
                display: t,
                value: t
              })
            )}
          />
        </div>
        <div className='mb-3 flex gap-4'>
          <Input
            placeholder='First name'
            className='w-full flex-1'
            label='First Name'
            required={true}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <Input
            className='w-full flex-1'
            placeholder='Last name'
            label='Last Name'
            required={true}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className='mb-3'>
          <Input
            required={true}
            label='Email Address'
            placeholder='email@example.com'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              isValidData(email, setEmailErr, 'email');
            }}
            onBlur={() => {
              isValidData(email, setEmailErr, 'email');
            }}
            isInvalid={!!emailErr}
            errorMessage={emailErr}
          />
        </div>

        <div className='mb-3'>
          <Input
            value={password}
            required={true}
            label='Password'
            placeholder='&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;'
            onChange={(e) => setPassword(e.target.value)}
            onBlur={() => {
              isValidData(password, setPassErr, 'password');
            }}
            isInvalid={!!passErr}
            errorMessage={passErr}
            type={passwordVisible ? 'text' : 'password'}
            endContent={
              <button
                className='focus:outline-none'
                type='button'
                onClick={() => setPasswordVisible((prev) => !prev)}
              >
                {passwordVisible ? (
                  <EyeFilledIcon className='pointer-events-none text-2xl text-default-400' />
                ) : (
                  <EyeSlashFilledIcon className='pointer-events-none text-2xl text-default-400' />
                )}
              </button>
            }
          />
        </div>

        <div className='mb-3'>
          <Input
            label='Mobile Number'
            placeholder='(123) 456-7890'
            pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
            value={phoneNumber}
            onChange={(e) => setPhoneNum(e.target.value)}
            onBlur={() => {
              if (!phoneNumber) {
                setPhoneErr('');
              } else {
                isValidData(phoneNumber, setPhoneErr, 'phoneNumber');
              }
            }}
            isInvalid={!!phoneErr}
            errorMessage={phoneErr}
          />
        </div>

        <Checkbox
          radius='full'
          className='text-white'
          isSelected={acceptTOS}
          onValueChange={setAcceptTOS}
        >
          I have read and accept the{' '}
          <Link href='#' className='text-blue-500'>
            Terms of Use
          </Link>
          &nbsp;and&nbsp;
          <Link href='#' className='text-blue-500'>
            Privacy Policy
          </Link>
        </Checkbox>
      </>
    </OnboardingModalContent>
  );
};
