import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { OnboardingFlowProps } from '../OnBoardingFlow';
import { OnBoardingModalHeader } from '../OnboardingModalHeader';
import { OnBoardingModalFooter } from '../OnboardingModalFooter';
import {
  Input,
  Select,
  SelectItem,
  Tooltip,
  cn,
  focusVisibleClasses
} from '@nextui-org/react';

type TeacherRoleProps = OnboardingFlowProps & {
  role: string;
  setRole: Dispatch<SetStateAction<string>>;
  grade: string;
  setGrade: Dispatch<SetStateAction<string>>;
  studentCount: number;
  setStudentCount: Dispatch<SetStateAction<number>>;
};

export const TeacherRole = ({
  role,
  setRole,
  grade,
  setGrade,
  studentCount,
  setStudentCount,
  onBackClick,
  onNextClick,
  currentStep
}: TeacherRoleProps) => {
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    //   setIsValid(!!(role && grade && studentCount));
    setIsValid(!true);
  });

  return (
    <div>
      <OnBoardingModalHeader text='My Role' currentStep={currentStep} />
      <div className='p-10'>
        <div className='mb-5'>
          <div>
            <h4>Role</h4>
            <Select placeholder='Select Role'>
              <SelectItem key='teacher' value='teacher'>
                Teacher
              </SelectItem>
              <SelectItem key='admin' value='admin'>
                Teacher
              </SelectItem>
            </Select>
          </div>
        </div>
        <OnBoardingModalFooter
          onBackClick={onBackClick}
          onNextClick={onNextClick}
          nextDisabled={isValid}
        />
      </div>
      <div>
        <div className='flex'>
          <h4>Grade</h4>
        </div>
        <div>
          <h4>
            Student Count <Tooltip></Tooltip>
          </h4>
          <Input></Input>
        </div>
      </div>
    </div>
  );
};
