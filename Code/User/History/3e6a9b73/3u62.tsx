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

  const displayDays = (month) => {
    let dayObjects = [];
    for (let i = 1; i <= monthDays[month - 1]; i++) {
      dayObjects.push(i);
    }

    return (
      <Select
        className='w-1/4'
        placeholder='day'
        isDisabled={!birthdayMonth}
        onChange={(e) => {
          setBirthdayDay(Number(e.target.value));
        }}
      >
        {dayObjects.map((day) => {
          <SelectItem key={day} value={day}>
            {day}
          </SelectItem>;
        })}
      </Select>
    );
  };

  return (
    <div>
      <OnBoardingModalHeader text='My Role' currentStep={currentStep} />
      <div className='p-10'>
        <div className='mb-5'>
          <div className='mx-6 mb-3 mt-1'>
            <h4>Preferred Reading Level System:</h4>
            <Select
              placeholder='Select Type'
              onChange={(e) => {
                setReadingLevel(e.target.value);
              }}
            >
              <SelectItem key='GRL' value='GRL'>
                Guided Reading Level (GRL)
              </SelectItem>
              <SelectItem key='LEX' value='LEX'>
                Lexile (LEX)
              </SelectItem>
              <SelectItem key='DRA' value='DRA'>
                Development Reading Assessment (DRA)
              </SelectItem>
              <SelectItem key='AR' value='AR'>
                Accelerated Reader (AR)
              </SelectItem>
              <SelectItem key='NA' value='NA'>
                N/A
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
              onChange={(e) => {
                setFirstYear(Boolean(e.target.value));
              }}
            >
              <Radio value='true'>yes</Radio>
              <Radio value='false'>no</Radio>
            </RadioGroup>
          </div>
          <div className='mx-6 mb-3 mt-1'>
            <h4>When is your birthday?</h4>
            <div className='flex gap-3'>
              <Select
                className='w-3/4'
                placeholder='month'
                items={months}
                onChange={(e) => {
                  setBirthdayMonth(Number(e.target.value) + 1);
                }}
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
              {displayDays(birthdayMonth)}
            </div>
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
