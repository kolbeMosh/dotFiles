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
            <Select
              placeholder='month'
              items={months}
              onSelectionChange={() => {}}
            >
              {months.map((month) => (
                <SelectItem
                  key={months.indexOf(month)}
                  value={months.indexOf(month)}
                >
                  {month}
                </SelectItem>
              ))}
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
