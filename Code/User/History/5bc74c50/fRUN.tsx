import { useState } from 'react';
import { OnboardingModalContent } from '../OnboardingModalContent';
import { OnboardingFlowProps } from '../OnBoardingFlow';
import { Input } from '@nextui-org/react';
import { Grades, Months } from 'src/lib/constants';
import { Select } from '../../../../components/Select/Select';
import { IBCUserBirthday } from 'src/lib/types/user-types';

type AddChildProps = OnboardingFlowProps & {
  birthday: IBCUserBirthday;
  setBirthday: Dispatch<SetStateAction<IBCUserBirthday>>;
};

/* 
    TODO: waiting on new database setup to set user data
*/

export const ChildInfo = (onBackClick, currentStep) => {
  const [birthdayMonth, setBirthdayMonth] = useState(birthday?.month || 0);
  const [birthdayDay, setBirthdayDay] = useState(birthday?.day || null);
  return (
    <OnboardingModalContent
      headerText='Add Your Child'
      onNextClick={() => {}}
      onBackClick={onBackClick}
      nextBtnDisabled={true}
      currentStep={currentStep}
    >
      <div className='mb-3'>
        <label className='mb-2 inline-block font-poppins text-[#424242]'>
          Child's Name*
        </label>
        <div className='mb-3 flex gap-4'>
          <Input
            placeholder='First name'
            className='w-full flex-1'
            aria-label='First Name'
            required={true}
            // value={firstName}
            // onChange={(e) => setFirstName(e.target.value)}
          />
          <Input
            className='w-full flex-1'
            placeholder='Last name'
            aria-label='Last Name'
            required={true}
            // value={lastName}
            // onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </div>
      <div className='mb-3'>
        <Select
          aria-label='Select Grade'
          required={true}
          className='w-full'
          placeholder='Select Grade'
          items={Grades.map((grade) => ({
            display: grade,
            value: grade
          }))}
          label='Grade'
          // selectedKeys={grade ? [grade] : []}
          onChange={(e) => {
            // setGrade(e.target.value);
          }}
        />
      </div>
      <div className='mb-3'>
        <label className='mb-2 inline-block font-poppins text-[#424242]'>
          When is your birthday*
        </label>
        <div className='flex gap-3'>
          <div className='flex-1'>
            <Select
              aria-label='Select Month'
              className='w-full'
              placeholder='Select month'
              selectedKeys={
                birthdayMonth ? [Object.values(Months)[birthdayMonth - 1]] : []
              }
              onChange={(e) =>
                setBirthdayMonth(
                  Object.values(Months).findIndex((m) => m === e.target.value) +
                    1
                )
              }
              items={Object.values(Months).map((m) => ({
                display: m,
                value: m
              }))}
            />
          </div>
          <div className='basis-24'>
            <Input
              type='number'
              max={31}
              placeholder='Day'
              value={String(birthdayDay)}
              onChange={(e) => {
                let day = +e.target.value;
                if (day <= 0) {
                  day = 1;
                } else if (day > 31) {
                  day = 31;
                }
                setBirthdayDay(day);
              }}
            />
          </div>
        </div>
      </div>
    </OnboardingModalContent>
  );
};
