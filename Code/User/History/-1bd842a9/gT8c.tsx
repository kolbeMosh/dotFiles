import { cloneDeep } from 'lodash';
import { useEffect, useState } from 'react';
import { CustomerGroups, Months } from 'src/lib/constants';
import { SignupInputs } from 'src/lib/types/types';
import { Input } from '../../../../../components/Input/Input';
import { Select } from '../../../../../components/Select/Select';
import { OnboardingFlowProps } from '../OnboardingFlow';
import { OnboardingModalContent } from '../OnboardingModalContent';

type StudentDetailsProps = OnboardingFlowProps & {
  signupLoading: boolean;
  signupError: string;
};

export const StudentDetails = ({
  signupInputs,
  setSignupInputs,
  onNextClick,
  onBackClick,
  currentStep,
  signupLoading,
  signupError
}: StudentDetailsProps) => {
  const student = (signupInputs.parentProfile?.students || [])[0];

  // const [birthdayMonth, setBirthdayMonth] = useState(
  //   student?.birthday?.month || 0
  // );
  // const [birthdayDay, setBirthdayDay] = useState(
  //   student?.birthday?.day || null
  // );

  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const student = (signupInputs.parentProfile?.students || [])[0];
    setIsValid(
      !!(
        student?.birthday?.day &&
        student?.birthday?.month &&
        student?.firstName &&
        student?.lastName
      )
    );
  }, [signupInputs]);

  // useEffect(() => {
  //   setSignupInputs((prev) => {
  //     const clonedStudents = cloneDeep(
  //       signupInputs.parentProfile?.students ||
  //         ([{}] as SignupInputs['parentProfile']['students'])
  //     );
  //     clonedStudents[0].birthday = {
  //       day: birthdayDay,
  //       month: birthdayMonth
  //     };

  //     return {
  //       ...prev,
  //       parentProfile: {
  //         ...prev.parentProfile,
  //         students: clonedStudents
  //       }
  //     };
  //   });
  // }, [birthdayDay, birthdayMonth]);

  return (
    <OnboardingModalContent
      headerText='Add Your Child'
      onNextClick={onNextClick}
      onBackClick={onBackClick}
      nextBtnDisabled={!isValid}
      currentStep={currentStep}
      customerGroup={CustomerGroups.PARENT}
      nextBtnLoading={signupLoading}
      signupError={signupError}
      // nextBtnText='Create Account'
    >
      <div className='mb-3'>
        <label className='font-poppins mb-2 inline-block text-[#424242]'>
          Child's Name*
        </label>
        <div className='mb-3 flex gap-4'>
          <Input
            placeholder='First name'
            className='w-full flex-1'
            aria-label='First Name'
            required={true}
            value={student?.firstName}
            onChange={(e) => {
              setSignupInputs((prev) => {
                const clonedStudents = cloneDeep(
                  signupInputs.parentProfile?.students ||
                    ([{}] as SignupInputs['parentProfile']['students'])
                );
                clonedStudents[0].firstName = e.target.value;
                return {
                  ...prev,
                  parentProfile: {
                    ...prev.parentProfile,
                    students: clonedStudents
                  }
                };
              });
            }}
          />
          <Input
            className='w-full flex-1'
            placeholder='Last name'
            aria-label='Last Name'
            required={true}
            value={student?.lastName}
            onChange={(e) => {
              setSignupInputs((prev) => {
                const clonedStudents = cloneDeep(
                  signupInputs.parentProfile?.students ||
                    ([{}] as SignupInputs['parentProfile']['students'])
                );
                clonedStudents[0].lastName = e.target.value;
                return {
                  ...prev,
                  parentProfile: {
                    ...prev.parentProfile,
                    students: clonedStudents
                  }
                };
              });
            }}
          />
        </div>
      </div>
      {/* <div className='mb-3'>
        <label className='font-poppins mb-2 inline-block text-[#424242]'>
          Birthday: Help us celebrate it!*
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
          </div> */}
      {/* </div>
      </div> */}
    </OnboardingModalContent>
  );
};
