import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Input } from 'src/app/components/Input/Input';
import { ProfilePictureUpload } from 'src/app/components/ProfilePictureUpload/ProfilePictureUpload';
import { Select } from 'src/app/components/Select/Select';
import { Months, ReadingLevels } from 'src/lib/constants';
import { IBCUserBirthday } from 'src/lib/types/user-types';
import { OnboardingFlowProps } from '../OnBoardingFlow';
import { OnboardingModalContent } from '../OnboardingModalContent';

type TeacherOnboardingProfileProps = OnboardingFlowProps & {
  readingLevel: string;
  setReadingLevel: Dispatch<SetStateAction<string>>;
  birthday: IBCUserBirthday;
  setBirthday: Dispatch<SetStateAction<IBCUserBirthday>>;
  profileImageUrl: string;
  setProfileImageUrl: Dispatch<SetStateAction<string>>;
  signupLoading: boolean;
  signupError: string;
  headerColor: string;
};

export const TeacherOnboardingProfile = ({
  signupLoading,
  signupError,
  currentStep,
  onNextClick,
  onBackClick,
  readingLevel,
  setReadingLevel,
  birthday,
  setBirthday,
  profileImageUrl,
  setProfileImageUrl,
  headerColor
}: TeacherOnboardingProfileProps) => {
  const [isValid, setIsValid] = useState(false);
  const [birthdayMonth, setBirthdayMonth] = useState(birthday?.month || 0);
  const [birthdayDay, setBirthdayDay] = useState(birthday?.day || null);

  const [uploadProfilePicError, setUploadProfilePicError] = useState('');

  useEffect(() => {
    setBirthday({
      day: birthdayDay,
      month: birthdayMonth
    });
  }, [birthdayDay, birthdayMonth]);

  useEffect(() => {
    setIsValid(!!(readingLevel && birthdayDay && birthdayMonth));
  }, [readingLevel, birthdayDay, birthdayMonth]);

  return (
    <OnboardingModalContent
      headerText='My Profile'
      onNextClick={onNextClick}
      onBackClick={onBackClick}
      nextBtnDisabled={!isValid}
      nextBtnLoading={signupLoading}
      nextBtnText='Get Started'
      currentStep={currentStep}
      signupError={signupError}
      headerColor={headerColor}
    >
      <div className='mb-3'>
        <Select
          aria-label='Preferred Reading Level System'
          label='Preferred Reading Level System'
          placeholder='Select Reading Level'
          selectedKeys={readingLevel ? [readingLevel] : []}
          onChange={(e) => {
            setReadingLevel(e.target.value);
          }}
          items={Object.values(ReadingLevels).map((level) => ({
            display: level,
            value: level
          }))}
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

      <div>
        <label className='mb-2 inline-flex items-center justify-between text-[#424242]'>
          Upload Profile Picture (Optional)
        </label>
        <ProfilePictureUpload
          imgUrl={profileImageUrl}
          onUploadSuccess={(asset) => setProfileImageUrl(asset.secure_url)}
          onUploadError={() =>
            setUploadProfilePicError(
              'Unexpected upload error, please try again'
            )
          }
        />
        {!!uploadProfilePicError && (
          <span className='text-sm text-danger'>{uploadProfilePicError}</span>
        )}
      </div>
    </OnboardingModalContent>
  );
};
