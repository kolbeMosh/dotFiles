import { setCookie } from 'cookies-next';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { createTeacherAccount } from 'src/app/auth/signup/signup-actions';
import { CustomerGroups, STORE_CONTEXT_KEY } from 'src/lib/constants';
import { School } from 'src/lib/types/user-types';
import { AccountDetails } from './AccountDetails';
import { FindSchool } from './teacher/FindSchool';
import { SchoolSearch } from './teacher/SchoolSearch';
import { TeacherRole } from './teacher/TeacherRole';
import { TeacherInfo } from './teacher/TeacherInfo';

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
  const [studentCount, setStudentCount] = useState(0);
  const [readingLevel, setReadingLevel] = useState('');
  const [firstYear, setFirstYear] = useState(false);
  const [birthdayMonth, setBirthdayMonth] = useState(0);
  const [birthdayDay, setBirthdayDay] = useState(0);
  // const [passwordConfirm, setPasswordConfirm] = useState(false);

  const [selectedSchool, setSelectedSchool] = useState<School>();

  const validateSignupForm = () => {
    return true;
  };

  const createAccount = async () => {
    const isValid = validateSignupForm();
    if (!isValid) {
      return;
    }
    try {
      const signupRes = await createTeacherAccount({
        first_name: firstName,
        last_name: lastName,
        email: 'kacysommers1@gmail.com',
        authentication: {
          new_password: 'Password123'
        },
        customer_group_id: CustomerGroups.TEACHER,
        title: '',
        schools: [
          {
            name: 'Greenfield Elementary School',
            city: 'Kansas City',
            state: 'Missouri',
            street: '567 Willow Dr',
            zip: 64101,
            id: '0ZFG5Oc5LFb44meGCESa'
          }
        ],
        grade: '3rd',
        totalStudents: 20
      });

      if (signupRes.error) {
        throw signupRes.error;
      }

      const teacher = signupRes.body;
      await signIn('credentials', {
        email: 'kacysommers1@gmail.com',
        password: 'Password123',
        redirect: true,
        callbackUrl: `/users/profile/${teacher.id}`
      });
      setCookie(STORE_CONTEXT_KEY, String(teacher.customer_group_id));
    } catch (error) {
      // @TODO error
      console.error(':::: ', error);
    }
  };

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
        // passwordConfirm={passwordConfirm}
        // setPasswordConfirm={setPasswordConfirm}
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

  if (currentStep === 10) {
    return (
      <TeacherInfo
        currentStep={currentStep}
        onBackClick={() => setCurrentStep(currentStep - 1)}
        onNextClick={() => {
          console.log('this is filler');
        }}
        readingLevel={readingLevel}
        setReadingLevel={setReadingLevel}
        firstYear={firstYear}
        setFirstYear={setFirstYear}
        birthdayMonth={birthdayMonth}
        setBirthdayMonth={setBirthdayMonth}
        birthdayDay={birthdayDay}
        setBirthdayDay={setBirthdayDay}
        // birthdayDay and birthdayMonth should be
        // combined into a date object before form submission
      />
    );
  }
};
