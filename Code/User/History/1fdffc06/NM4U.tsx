import { Dispatch, SetStateAction, useState } from 'react';
import {
  IBCUserBirthday,
  School,
  TeacherClassroom
} from 'src/lib/types/user-types';
import { OnboardingFlowProps } from '../OnBoardingFlow';
import { TeacherOnboardingProfile } from './TeacherOnboardingProfile';
import { TeacherRole } from './TeacherRole';

type TeacherInfoProps = OnboardingFlowProps & {
  readingLevel: string;
  setReadingLevel: Dispatch<SetStateAction<string>>;
  birthday: IBCUserBirthday;
  setBirthday: Dispatch<SetStateAction<IBCUserBirthday>>;
  role: string;
  setRole: Dispatch<SetStateAction<string>>;
  selectedSchool: School;
  classrooms: TeacherClassroom[];
  setClassrooms: Dispatch<SetStateAction<TeacherClassroom[]>>;
  profileImageUrl: string;
  setProfileImageUrl: Dispatch<SetStateAction<string>>;
  signupLoading: boolean;
  signupError: string;
  headerColor: string;
};

export const TeacherInfo = ({
  readingLevel,
  setReadingLevel,
  birthday,
  setBirthday,
  currentStep,
  onBackClick,
  onNextClick,
  role,
  setRole,
  selectedSchool,
  classrooms,
  setClassrooms,
  profileImageUrl,
  setProfileImageUrl,
  signupError,
  signupLoading,
  headerColor
}: TeacherInfoProps) => {
  const [teacherInfoStep, setTeacherInfoStep] = useState(1);

  if (teacherInfoStep === 1) {
    return (
      <TeacherRole
        currentStep={currentStep}
        classrooms={classrooms}
        setClassrooms={setClassrooms}
        role={role}
        setRole={setRole}
        onNextClick={() => setTeacherInfoStep((prev) => prev + 1)}
        onBackClick={onBackClick}
        selectedSchool={selectedSchool}
        headerColor={headerColor}
      />
    );
  }
  if (teacherInfoStep === 2) {
    return (
      <TeacherOnboardingProfile
        signupError={signupError}
        signupLoading={signupLoading}
        profileImageUrl={profileImageUrl}
        setProfileImageUrl={setProfileImageUrl}
        readingLevel={readingLevel}
        setReadingLevel={setReadingLevel}
        birthday={birthday}
        setBirthday={setBirthday}
        currentStep={currentStep}
        onNextClick={onNextClick}
        onBackClick={() => setTeacherInfoStep((prev) => prev - 1)}
        headerColor={headerColor}
      />
    );
  }
};
