'use client';

import { Button } from '@nextui-org/react';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Autocomplete } from 'src/app/components/Autocomplete/Autocomplete';
import {
  querySchoolStates,
  querySchools
} from 'src/app/server-actions/schools-actions';
import { StatesAndProvinces } from 'src/lib/constants';
import { School } from 'src/lib/types/user-types';
import { Input } from '../../../../components/Input/Input';
import { OnboardingFlowProps } from '../OnBoardingFlow';
import { OnboardingModalContent } from '../OnboardingModalContent';
import { SchoolSearchResults } from './SchoolSearchResults';

type FindSchoolProps = OnboardingFlowProps & {
  selectedSchool: School;
  setSelectedSchool: Dispatch<SetStateAction<School>>;
};

export const FindSchool = ({
  selectedSchool,
  setSelectedSchool,
  currentStep,
  onBackClick,
  onNextClick
}: FindSchoolProps) => {
  const [schoolOptions, setSchoolOptions] = useState<School[]>();
  const [searching, setSearching] = useState<'zip' | 'state'>();
  const [zipQ, setZipQ] = useState('');
  const [stateQ, setStateQ] = useState('');
  const [searchErrors, setSearchErrors] = useState<{
    zip?: string;
    state?: string;
  }>();

  const [schoolQ, setSchoolQ] = useState('');
  const [schoolStates, setSchoolStates] = useState<string[]>();

  const doSearch = async (q: string, qType: 'zip' | 'state') => {
    try {
      if (qType === 'state') {
        setZipQ('');
      } else {
        setStateQ('');
      }
      setSchoolQ(q);
      setSearching(qType);
      setSearchErrors(null);
      const searchRes = await querySchools(qType, '==', q);
      if (searchRes.error) {
        throw searchRes.error;
      }

      setSearching(null);
      setSchoolOptions(searchRes.body as School[]);
    } catch (error) {
      setSearching(null);
      setSearchErrors({
        [qType]: 'Unexpected error, please try again'
      });
    }
  };

  const orBreak = (
    <div className='my-5 flex items-center'>
      <span className='mr-2 inline-block text-gray-400'>or</span>
      <hr className='flex-1' />
    </div>
  );

  const reset = () => {
    setSelectedSchool(null);
    setSchoolOptions(null);
  };

  useEffect(() => {
    (async () => {
      try {
        const schoolStatesRes = await querySchoolStates();

        if (schoolStatesRes.error) {
          throw schoolStatesRes.error;
        }

        setSchoolStates(schoolStatesRes.body);
      } catch (error) {
        setSchoolStates(Object.values(StatesAndProvinces));
      }
    })();
  }, []);

  if (Array.isArray(schoolOptions)) {
    return (
      <SchoolSearchResults
        search={schoolQ}
        schools={schoolOptions}
        onBackClick={reset}
        onNextClick={onNextClick}
        currentStep={currentStep}
        setSchools={setSchoolOptions}
        selectedSchool={selectedSchool}
        setSelectedSchool={setSelectedSchool}
      />
    );
  }

  return (
    <OnboardingModalContent
      headerText='Find a School'
      onNextClick={() => {}}
      onBackClick={onBackClick}
      nextBtnDisabled={true}
      currentStep={currentStep}
    >
      <h4 className='mb-4 text-lg font-medium'>Find My School</h4>
      <Input
        label='Search by Zip Code'
        pattern='[0-9]{5}'
        value={zipQ}
        errorMessage={searchErrors?.zip}
        onChange={(e) => setZipQ(e.target.value)}
        endContent={
          <Button
            color='primary'
            className='-right-4 h-12 w-8/12 rounded font-poppins font-medium text-white'
            onClick={() => doSearch(zipQ, 'zip')}
            isLoading={searching === 'zip'}
            isDisabled={!zipQ || !!searching}
          >
            Search
          </Button>
        }
      />
      {orBreak}
      <div className='my-4 font-poppins'>
        <Autocomplete
          label='Search by State'
          selectedKey={stateQ}
          isDisabled={!schoolStates?.length}
          onSelectionChange={(value) => {
            setStateQ(value as string);
          }}
          items={Object.values(schoolStates || []).map((state) => ({
            display: state,
            value: state
          }))}
        />
        <Button
          color='primary'
          className='mt-3 h-12 w-full rounded font-poppins font-medium text-white'
          onClick={() => doSearch(stateQ, 'state')}
          isLoading={searching === 'state'}
          isDisabled={!stateQ || !!searching}
        >
          Search
        </Button>
      </div>
    </OnboardingModalContent>
  );
};
