'use client';

import { Dispatch, SetStateAction } from 'react';
import { SchoolSelector } from 'src/components/SchoolSelector/SchoolSelector';
import { CustomerGroups } from 'src/lib/constants';
import { School } from 'src/lib/types/types';
import { OnboardingFlowProps } from '../OnboardingFlow';
import { OnboardingModalContent } from '../OnboardingModalContent';

type ParentFindSchoolProps = OnboardingFlowProps & {
  selectedSchool: School;
  setSelectedSchool: Dispatch<SetStateAction<School>>;
};

export const ParentFindSchool = ({
  selectedSchool,
  setSelectedSchool,
  currentStep,
  onBackClick,
  onNextClick
}: ParentFindSchoolProps) => {
  return (
    <OnboardingModalContent
      headerText='Find School'
      onNextClick={onNextClick}
      onBackClick={onBackClick}
      nextBtnDisabled={!selectedSchool}
      currentStep={currentStep}
      customerGroup={CustomerGroups.PARENT}
    >
      <SchoolSelector
        selectedSchool={selectedSchool}
        onSelectSchool={(school: School) => {
          setSelectedSchool(school);
        }}
        titleText='Help us get your books to the right classroom!'
      />
    </OnboardingModalContent>
  );
};
