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
  email,
  setEmail,
  title,
  setTitle,
  phoneNumber,
  setPhoneNum,
  password,
  setPassword
}: AccountDetailsProps) => {
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(!!(firstName && lastName && title && email && password));
  }, [firstName, lastName, title, email, password]);

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const tmpPassword = useRef();
  const cPassword = useRef();
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [cPasswordClass, setCPasswordClass] = useState('form-control');
  const [isCPasswordDirty, setIsCPasswordDirty] = useState(false);

  useEffect(() => {
    if (isCPasswordDirty) {
      if (tmpPassword.current.value === cPassword.current.value) {
        setShowErrorMessage(false);
        setCPasswordClass('form-control is-valid');
      } else {
        setShowErrorMessage(true);
        setCPasswordClass('form-control is-invalid');
      }
    }
  }, [isCPasswordDirty]);

  const checkPasswords = (e) => {
    setIsCPasswordDirty(true);
    if (isCPasswordDirty) {
      if (tmpPassword.current.value === cPassword.current.value) {
        setShowErrorMessage(false);
        setCPasswordClass('form-control is-valid');
        setPassword(e.target.value);
      } else {
        setShowErrorMessage(true);
        setCPasswordClass('form-control is-invalid');
      }
    }
  };

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
            <h4>Email Address*</h4>
            <Input
              radius='lg'
              variant='bordered'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='mx-6 mb-3 mt-1'>
            <h4>Password*</h4>
            <Input
              radius='lg'
              variant='bordered'
              endContent={
                <button
                  className='focus:outline-none'
                  type='button'
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <EyeFilledIcon className='pointer-events-none text-2xl text-default-400' />
                  ) : (
                    <EyeSlashFilledIcon className='pointer-events-none text-2xl text-default-400' />
                  )}
                </button>
              }
              type={isVisible ? 'text' : 'password'}
              ref={tmpPassword}
              onChange={checkPasswords}
              isInvalid={showErrorMessage && isCPasswordDirty}
              color={
                showErrorMessage && isCPasswordDirty ? 'danger' : 'success'
              }
              errorMessage={
                showErrorMessage && isCPasswordDirty && 'Passwords do not match'
              }
            />
          </div>
          {!tmpPassword ? (
            <></>
          ) : (
            <div className='mx-6 mb-3 mt-1'>
              <h4>Confirm Password*</h4>
              <Input
                type='password'
                radius='lg'
                variant='bordered'
                ref={cPassword}
                isInvalid={showErrorMessage && isCPasswordDirty}
                color={
                  showErrorMessage && isCPasswordDirty ? 'danger' : 'success'
                }
                errorMessage={
                  showErrorMessage &&
                  isCPasswordDirty &&
                  'Passwords do not match'
                }
                onChange={checkPasswords}
              ></Input>
            </div>
          )}
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
          <div className='mx-6 mb-3 mt-1'>
            <Checkbox radius='full' className='text-white'>
              I have read and accept the{' '}
              <Link href='#' className='text-blue-500'>
                Terms of Use
              </Link>
              &nbsp;and&nbsp;
              <Link href='#' className='text-blue-500'>
                Privacy Policy
              </Link>
            </Checkbox>
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
