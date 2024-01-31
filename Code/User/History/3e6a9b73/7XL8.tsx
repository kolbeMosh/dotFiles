import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { OnboardingFlowProps } from '../OnBoardingFlow';
import { OnBoardingModalHeader } from '../OnboardingModalHeader';
import { OnBoardingModalFooter } from '../OnboardingModalFooter';
import {
  Input,
  Radio,
  RadioGroup,
  Select,
  SelectItem,
  focusVisibleClasses
} from '@nextui-org/react';
import { birthdaySelect } from '../../birthdaySelect';

type TeacherInfoProps = OnboardingFlowProps & {
  readingLevel: string;
  setReadingLevel: Dispatch<SetStateAction<string>>;
  firstYear: boolean;
  setFirstYear: Dispatch<SetStateAction<boolean>>;
  birthdayMonth: number;
  setBirthdayMonth: Dispatch<SetStateAction<number>>;
  birthdayDay: number;
  setBirthdayDay: Dispatch<SetStateAction<number>>;
};

export const TeacherInfo = ({
  readingLevel,
  setReadingLevel,
  firstYear,
  setFirstYear,
  birthdayMonth,
  setBirthdayMonth,
  birthdayDay,
  setBirthdayDay,
  currentStep,
  onBackClick,
  onNextClick
}: TeacherInfoProps) => {
  const [isValid, setIsValid] = useState(false);
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  useEffect(() => {
    setIsValid(!true);
  });

  return (
    <div>
      <OnBoardingModalHeader text='My Role' currentStep={currentStep} />
      <div className='p-10'>
        <div className='mb-5'>
          <div className='mx-6 mb-3 mt-1'>
            <h4>Preferred Reading Level System:</h4>
            <Select placeholder='Select Type'>
              <SelectItem key='option 1' value='option 1'>
                option 1
              </SelectItem>
            </Select>
          </div>
          <div className='mx-6 mb-3 mt-1'>
            <RadioGroup
              label='Is this your first year teaching?'
              orientation='horizontal'
              classNames={{
                label: 'text-black'
              }}
            >
              <Radio value='true'>yes</Radio>
              <Radio value='false'>no</Radio>
            </RadioGroup>
          </div>
          <div>
            <h4>When is your birthday?</h4>
            <Select placeholder='month'>
              <SelectItem key='1' value='1'>
                January
              </SelectItem>
              <SelectItem key='2' value='2'>
                February
              </SelectItem>
              <SelectItem key='3' value='3'>
                March
              </SelectItem>
              <SelectItem key='4' value='4'>
                April
              </SelectItem>
              <SelectItem key='5' value='5'>
                May
              </SelectItem>
              <SelectItem key='6' value='6'>
                June
              </SelectItem>
              <SelectItem key='7' value='7'>
                July
              </SelectItem>
              <SelectItem key='8' value='8'>
                August
              </SelectItem>
              <SelectItem key='9' value='9'>
                September
              </SelectItem>
              <SelectItem key='10' value='10'>
                October
              </SelectItem>
              <SelectItem key='11' value='11'>
                November
              </SelectItem>
              <SelectItem key='12' value='12'>
                December
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
    </div>
  );
};
