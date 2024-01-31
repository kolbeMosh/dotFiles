import { useState } from 'react';
import { School } from 'src/lib/types/user-types';
import { AccountDetails } from './AccountDetails';
import { FindSchool } from './teacher/FindSchool';
import { SchoolSearch } from './teacher/SchoolSearch';
import { TeacherRole } from './teacher/TeacherRole';

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
  const [phoneNumber, setPhoneNum] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [grade, setGrade] = useState('');
  const [studentCount, setStudentCount] = useState();

  const [selectedSchool, setSelectedSchool] = useState<School>();

  const validateSignupForm = () => {
    return true;
  };

  const createAccount = async () => {};

  if (currentStep === 10) {
    return (
      <AccountDetails
        onBackClick={onBackClick}
        currentStep={currentStep}
        onNextClick={() => {
          // setCurrentStep((prev) => prev + 1);
          createAccount();
        }}
        firstName={firstName}
        setFirstName={setFirstName}
        lastName={lastName}
        setLastName={setLastName}
        email={email}
        setEmail={setEmail}
        title={title}
        setTitle={setTitle}
        phoneNumber={phoneNumber}
        setPhoneNum={setPhoneNum}
        password={password}
        setPassword={setPassword}
      />
    );
  }

  if (currentStep === 10) {
    return (
      <FindSchool
        setSelectedSchool={setSelectedSchool}
        onBackClick={() => setCurrentStep(currentStep - 1)}
        onNextClick={() => {
          console.log('this is filler');
        }}
        currentStep={currentStep}
      />
    );
  }

  if (currentStep === 10) {
    return (
      <SchoolSearch
        currentStep={currentStep}
        setSelectedSchool={setSelectedSchool}
        onBackClick={() => setCurrentStep(currentStep - 1)}
        onNextClick={() => {
          console.log('this is filler');
        }}
      />
    );
  }

  if (currentStep === 1) {
    return (
      <TeacherRole
        currentStep={currentStep}
        onBackClick={() => setCurrentStep(currentStep - 1)}
        onNextClick={() => {
          console.log('this is filler');
        }}
        role={role}
        setRole={setRole}
        grade={grade}
        setGrade={setGrade}
        studentCount={studentCount}
        setStudentCount={setStudentCount}
      />
    );
  }

  // if (step === 3) {
  //   return <FindSchool selectedSchool={null} setSelectedSchool={() => {}} />;
  // }

  // if (step === 4) {
  //   return <SchoolSearch />;
  // }
};
