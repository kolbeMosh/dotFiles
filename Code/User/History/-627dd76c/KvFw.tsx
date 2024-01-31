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
  title?: string;
  setTitle: Dispatch<SetStateAction<string>>;
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

  useEffect(() => {
    setIsValid(
      !!(
        title &&
        firstName &&
        lastName &&
        password &&
        email &&
        acceptTOS &&
        !passErr &&
        !emailErr
      )
    );
  }, [
    title,
    firstName,
    lastName,
    password,
    email,
    acceptTOS,
    passErr,
    emailErr
  ]);

  return (
    <OnboardingModalContent
      // headerText='Create Teacher Account'
      onNextClick={onNextClick}
      onBackClick={onBackClick}
      nextBtnDisabled={!isValid}
      currentStep={currentStep}
    >
      <>
        <div className='mb-3'>
          <Select
            aria-label='Title'
            required={true}
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
        <div>
          <label className='mb-2 inline-block font-poppins text-[#424242]'>
            Your Name*
          </label>
          <div className='mb-3 flex gap-4'>
            <Input
              placeholder='First name'
              className='w-full flex-1'
              aria-label='First Name'
              required={true}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <Input
              className='w-full flex-1'
              placeholder='Last name'
              aria-label='Last Name'
              required={true}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div className='mb-3'>
          <Input
            required={true}
            label='Email Address'
            placeholder='email@example.com'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (emailErr) {
                isValidData(email, setEmailErr, 'email');
              }
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
            placeholder='Enter password'
            description='Minimum 7 characters including at least 1 number.'
            onChange={(e) => {
              setPassword(e.target.value);
              if (passErr) {
                isValidData(password, setPassErr, 'password');
              }
            }}
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
