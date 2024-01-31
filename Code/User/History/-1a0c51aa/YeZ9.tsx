import { Dispatch, SetStateAction, useEffect, useState, useRef } from 'react';
import { OnBoardingModalFooter } from './OnboardingModalFooter';
import { Checkbox, Input, Link } from '@nextui-org/react';
import { OnBoardingModalHeader } from './OnboardingModalHeader';
import { EyeSlashFilledIcon } from './assets/EyeSlashFilledIcon';
import { EyeFilledIcon } from './assets/EyeFilledIcon';
import { OnboardingFlowProps } from './OnBoardingFlow';

type AccountDetailsProps = OnboardingFlowProps & {
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
};

export const AccountLoginDetails = {};
