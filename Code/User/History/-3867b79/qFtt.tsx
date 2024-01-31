import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';
import { Autocomplete } from 'src/components/Autocomplete/Autocomplete';
import { School } from 'src/lib/types/types';
import { OnboardingFlowProps } from '../../OnboardingFlow';
import { OnboardingModalContent } from '../../OnboardingModalContent';

type SchoolSearchResultsProps = OnboardingFlowProps & {
  search: string;
  selectedSchool: School;
  setSelectedSchool: Dispatch<SetStateAction<School>>;
  schools: School[];
  setSchools: Dispatch<SetStateAction<School[]>>;
};

export const SchoolSearchResults = ({
  search,
  setSelectedSchool,
  selectedSchool,
  schools,
  onNextClick,
  onBackClick,
  currentStep
}: SchoolSearchResultsProps) => {
  return (
    <OnboardingModalContent
      headerText='Find Your School'
      onNextClick={onNextClick}
      onBackClick={onBackClick}
      nextBtnDisabled={!selectedSchool}
      currentStep={currentStep}
    >
      <div className='mb-40'>
        <p className='mb-4 font-normal'>You are searching in:</p>
        <div className='mb-8 flex justify-between'>
          <p className='inline-block text-lg font-medium text-ibc-dark-blue'>
            {search}
          </p>
          <button className='font-medium text-primary' onClick={onBackClick}>
            Change Location
          </button>
        </div>

        <Autocomplete
          aria-label='School Name'
          autoFocus={true}
          label={
            <span className='flex items-center justify-between'>
              <span>School Name</span>
              <Link
                className='text-base font-medium text-primary'
                href='/add-your-school'
              >
                Can't find your School?
              </Link>
            </span>
          }
          placeholder='Select a school'
          selectedKey={String(selectedSchool?.id)}
          onSelectionChange={(value) => {
            const school = schools.find((s) => s.id === +value);
            setSelectedSchool(school);
          }}
          items={(schools || []).map((school) => ({
            display: (
              <>
                <h1>{school.name}</h1>
                <p>{school.zip}</p>
              </>
            ),
            value: school.id
          }))}
        />
      </div>
    </OnboardingModalContent>
  );
};
