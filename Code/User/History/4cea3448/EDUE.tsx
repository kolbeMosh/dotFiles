import { Dispatch, SetStateAction, useState } from 'react';
import {
  IBCUserBirthday,
  School,
  ParentClassroom
} from 'src/lib/types/user-types';
import { OnboardingFlowProps } from '../OnBoardingFlow';
import { OnboardingModalContent } from '../OnboardingModalContent';

type ParentInfoProps = OnboardingFlowProps & {};

export const ParentInfo = ({
  currentStep,
  onBackClick,
  onNextClick,
  headerColor
}: ParentInfoProps) => {
  const [teacherInfoStep, setParentInfoStep] = useState(1);

  return (
    <OnboardingModalContent
      headerText='Find a School'
      onNextClick={() => {}}
      onBackClick={onBackClick}
      nextBtnDisabled={true}
      currentStep={currentStep}
      headerColor={headerColor}
    ></OnboardingModalContent>
  );
};
