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
          <div className='mx-6 mb-3 mt-1'>
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
          <div className='mx-6 mb-3 mt-1 flex gap-4'>
            <div className='inline-flex w-3/4 flex-col'>
              <h4>Grade</h4>
              <Select>
                <SelectItem key='P' value='P'>
                  Pre-Kindergarten
                </SelectItem>
                <SelectItem key='K' value='K'>
                  Kindergarten
                </SelectItem>
                <SelectItem key='1' value='1'>
                  1st Grade
                </SelectItem>
                <SelectItem key='2' value='2'>
                  2nd Grade
                </SelectItem>
                <SelectItem key='3' value='3'>
                  3rd Grade
                </SelectItem>
                <SelectItem key='4' value='4'>
                  4th Grade
                </SelectItem>
                <SelectItem key='5' value='5'>
                  5th Grade
                </SelectItem>
                <SelectItem key='6' value='6'>
                  6th Grade
                </SelectItem>
                <SelectItem key='7' value='7'>
                  7th Grade
                </SelectItem>
                <SelectItem key='8' value='8'>
                  8th Grade
                </SelectItem>
                <SelectItem key='A' value='A'>
                  Adult
                </SelectItem>
              </Select>
            </div>
            <div className='inline-flex flex-col'>
              <h4 className='inline-block'>
                Student Count
                <Tooltip content='How many students do you currently have in your classroom?'>
                  <h4 className='inline-block'>&nbsp;(?)</h4>
                </Tooltip>
              </h4>
              <Input type='number'></Input>
            </div>
          </div>
          <div className='mx-6 mb-3 mt-1'>
            <OnBoardingModalFooter
              onBackClick={onBackClick}
              onNextClick={onNextClick}
              nextDisabled={isValid}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
