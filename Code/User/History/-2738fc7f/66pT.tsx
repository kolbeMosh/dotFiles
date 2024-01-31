import { setCookie } from 'cookies-next';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { createTeacherAccount } from 'src/app/users/auth/signup/signup-actions';
import { CustomerGroups, STORE_CONTEXT_KEY } from 'src/lib/constants';
import {
  IBCUserBirthday,
  School,
  TeacherClassroom
} from 'src/lib/types/user-types';
import { AccountDetails } from '../AccountDetails';
import { FindSchool } from '../schoolSearch/FindSchool';
import { TeacherInfo } from './TeacherInfo';

type TeacherOnboardingFlowProps = {
  onBackClick: () => void;
};

export const TeacherOnboardingFlow = ({
  onBackClick
}: TeacherOnboardingFlowProps) => {
  const [currentStep, setCurrentStep] = useState(1);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [readingLevel, setReadingLevel] = useState('');
  const [birthday, setBirthday] = useState<IBCUserBirthday>();
  const [acceptTOS, setAcceptTOS] = useState(false);
  const [selectedSchool, setSelectedSchool] = useState<School>();
  const [classrooms, setClassrooms] = useState<TeacherClassroom[]>();
  const [profileImageUrl, setProfileImageUrl] = useState('');

  const [signupLoading, setSignupLoading] = useState(false);
  const [signupError, setSignupError] = useState('');

  const validateSignupForm = () => {
    return true;
  };

  const createAccount = async () => {
    const isValid = validateSignupForm();
    if (!isValid) {
      return;
    }
    try {
      setSignupLoading(true);
      const signupRes = await createTeacherAccount({
        first_name: firstName,
        last_name: lastName,
        email,
        title,
        authentication: {
          new_password: password
        },
        role,
        readingLevel,
        classrooms,
        profileImageUrl,
        customer_group_id: CustomerGroups.TEACHER,
        birthday,
        acceptedTOS: acceptTOS
      });

      if (signupRes.error) {
        throw signupRes.error;
      }

      const teacher = signupRes.body;
      await signIn('credentials', {
        email: email,
        password: password,
        redirect: true,
        callbackUrl: `/users/profile/${teacher.id}`
      });
      setSignupLoading(false);
      setCookie(STORE_CONTEXT_KEY, String(teacher.customer_group_id));
    } catch (error) {
      setSignupLoading(false);
      setSignupError(
        typeof error === 'string'
          ? error
          : 'Unexpected signup error, please try again'
      );
    }
  };

  if (currentStep === 1) {
    return (
      <AccountDetails
        currentStep={currentStep}
        onNextClick={() => {
          setCurrentStep((prev) => prev + 1);
        }}
        onBackClick={onBackClick}
        firstName={firstName}
        setFirstName={setFirstName}
        lastName={lastName}
        setLastName={setLastName}
        title={title}
        setTitle={setTitle}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        acceptTOS={acceptTOS}
        setAcceptTOS={setAcceptTOS}
        headerText='Create Teacher Account'
        enableTitle={true}
      />
    );
  }

  if (currentStep === 2) {
    return (
      <FindSchool
        selectedSchool={selectedSchool}
        setSelectedSchool={setSelectedSchool}
        onNextClick={() => {
          setCurrentStep((prev) => prev + 1);
        }}
        onBackClick={() => {
          setCurrentStep((prev) => prev - 1);
        }}
        currentStep={currentStep}
      />
    );
  }

  if (currentStep === 3) {
    return (
      <TeacherInfo
        signupError={signupError}
        signupLoading={signupLoading}
        profileImageUrl={profileImageUrl}
        setProfileImageUrl={setProfileImageUrl}
        classrooms={classrooms}
        setClassrooms={setClassrooms}
        selectedSchool={selectedSchool}
        currentStep={currentStep}
        readingLevel={readingLevel}
        setReadingLevel={setReadingLevel}
        birthday={birthday}
        setBirthday={setBirthday}
        onNextClick={createAccount}
        onBackClick={() => {
          setCurrentStep((prev) => prev - 1);
        }}
        role={role}
        setRole={setRole}
      />
    );
  }
};
