import { Dispatch, SetStateAction, useState } from 'react';
import {
  IBCUserBirthday,
  School,
  TeacherClassroom
} from 'src/lib/types/user-types';
import { OnboardingFlowProps } from '../OnBoardingFlow';
import { OnboardingModalContent } from '../OnboardingModalContent';

type TeacherInfoProps = OnboardingFlowProps & {
  //   readingLevel: string;
  //   setReadingLevel: Dispatch<SetStateAction<string>>;
  //   birthday: IBCUserBirthday;
  //   setBirthday: Dispatch<SetStateAction<IBCUserBirthday>>;
  //   role: string;
  //   setRole: Dispatch<SetStateAction<string>>;
  //   selectedSchool: School;
  //   classrooms: TeacherClassroom[];
  //   setClassrooms: Dispatch<SetStateAction<TeacherClassroom[]>>;
  //   profileImageUrl: string;
  //   setProfileImageUrl: Dispatch<SetStateAction<string>>;
  //   signupLoading: boolean;
  //   signupError: string;
};

export const TeacherInfo = ({
  currentStep,
  onBackClick,
  onNextClick
}: TeacherInfoProps) => {
  const [teacherInfoStep, setTeacherInfoStep] = useState(1);

  return (
    <OnboardingModalContent
      headerText='Find a School'
      onNextClick={() => {}}
      onBackClick={onBackClick}
      nextBtnDisabled={true}
      currentStep={currentStep}
    />
  );
};
