import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Grades } from 'src/lib/constants';
import { School, TeacherClassroom } from 'src/lib/types/user-types';
import { Input } from '../../../../components/Input/Input';
import { Select } from '../../../../components/Select/Select';
import { OnboardingFlowProps } from '../OnBoardingFlow';
import { OnboardingModalContent } from '../OnboardingModalContent';

type TeacherRoleProps = OnboardingFlowProps & {
  role: string;
  setRole: Dispatch<SetStateAction<string>>;
  classrooms: TeacherClassroom[];
  setClassrooms: Dispatch<SetStateAction<TeacherClassroom[]>>;
  selectedSchool: School;
};

export const TeacherRole = ({
  currentStep,
  onBackClick,
  onNextClick,
  classrooms,
  setClassrooms,
  selectedSchool,
  role,
  setRole
}: TeacherRoleProps) => {
  const [isValid, setIsValid] = useState(false);

  const [totalStudents, setTotalStudents] = useState(
    classrooms?.length ? classrooms[0].totalStudents : null
  );
  const [grade, setGrade] = useState(
    classrooms?.length ? classrooms[0].grade : ''
  );

  useEffect(() => {
    setIsValid(!!(role && grade && totalStudents));
  }, [role, grade, totalStudents]);

  return (
    <OnboardingModalContent
      headerText='My Role'
      onNextClick={() => {
        setClassrooms([
          {
            grade,
            school: selectedSchool,
            totalStudents
          }
        ]);
        onNextClick();
      }}
      onBackClick={onBackClick}
      nextBtnDisabled={!isValid}
      currentStep={currentStep}
    >
      <div className='mb-40'>
        <div className='mb-3'>
          <Select
            label='Role'
            placeholder='Select Role'
            selectedKeys={role ? [role] : []}
            items={[{ display: 'Teacher', value: 'teacher' }]}
            onChange={(e) => {
              setRole(e.target.value);
            }}
          />
        </div>
        <div className='mb-3'>
          <Select
            className='w-full'
            placeholder='Select Grade'
            items={Object.keys(Grades)
              .sort()
              .map((key) => ({
                display: Grades[key],
                value: Grades[key]
              }))}
            label='Grade'
            selectedKeys={grade ? [grade] : []}
            onChange={(e) => {
              setGrade(e.target.value);
            }}
          />
        </div>

        <div>
          <Input
            label='Student Count'
            placeholder='Enter student count'
            type='number'
            pattern='[0-9]'
            value={String(totalStudents)}
            onChange={(e) => {
              setTotalStudents(Number(e.target.value));
            }}
          />
        </div>
      </div>
    </OnboardingModalContent>
  );
};
