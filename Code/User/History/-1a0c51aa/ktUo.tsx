import { Dispatch, SetStateAction, useEffect, useState, useRef } from 'react';
import { OnBoardingModalFooter } from './OnboardingModalFooter';
import { Checkbox, Input, Link } from '@nextui-org/react';
import { OnBoardingModalHeader } from './OnboardingModalHeader';
import { EyeSlashFilledIcon } from './assets/EyeSlashFilledIcon';
import { EyeFilledIcon } from './assets/EyeFilledIcon';
import { OnboardingFlowProps } from './OnBoardingFlow';

type AccountLoginDetailsProps = OnboardingFlowProps & {
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
};

export const AccountLoginDetails = ({
  password,
  setPassword,
  email,
  setEmail
}: AccountLoginDetailsProps) => {
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(!!(email && password));
  }, [email, password]);

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
};
