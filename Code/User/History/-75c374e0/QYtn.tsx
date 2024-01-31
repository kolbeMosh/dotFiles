'use client';

import {
  Autocomplete,
  AutocompleteItem,
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader
} from '@nextui-org/react';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { School } from 'src/lib/types/user-types';
import { OnBoardingModalHeader } from '../OnboardingModalHeader';
import { OnBoardingModalFooter } from '../OnboardingModalFooter';

type FindSchoolProps = {
  onBackClick: () => void;
  setSelectedSchool: Dispatch<SetStateAction<School>>;
  currentStep: number;
  onNextClick: () => void;
};

export const FindSchool = ({
  setSelectedSchool,
  currentStep,
  onBackClick,
  onNextClick
}: FindSchoolProps) => {
  const [isValid, setIsValid] = useState(false);

  // useEffect(() => {
  //   setIsValid(!!())
  // })

  const [schools, setSchools] = useState<School[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const schoolsRes = await fetch('/api/schools', { method: 'GET' });
        const schools = await schoolsRes.json();
        setSchools(schools.data.schools);
      } catch (error) {
        // @TODO error
      }
    })();
  }, []);

  const orBreak = () => {
    return (
      <div className='my-5'>
        <h4 className='mr-2 inline-block text-gray-400'>or</h4>
        <span className='inline-block w-10/12 border-1 border-gray-100 align-middle'></span>
      </div>
    );
  };

  return (
    <div>
      <OnBoardingModalHeader text='Find a School' currentStep={currentStep} />
      <div className='p-10'>
        <div className='mx-4'>
          <h4 className='font-bold'>Find My School</h4>
          <h4>Search by Zip Code</h4>
          <div className='my-1 h-8'>
            <Input
              type='text'
              radius='md'
              pattern='[0-9]{5}'
              size='sm'
              variant='bordered'
              className=''
              classNames={{}}
              endContent={
                <Button
                  color='primary'
                  className='-right-4 h-12 w-8/12 rounded font-bold text-white'
                >
                  Search
                </Button>
              }
            ></Input>
          </div>
          {orBreak()}
          <div>
            <div className='my-4'>
              <h4 className='my-1'>Search by State and City</h4>
              <Autocomplete
                variant='bordered'
                className='block'
                size='sm'
                label=''
                radius='md'
              >
                <AutocompleteItem key='City, State'>
                  City, State
                </AutocompleteItem>
              </Autocomplete>
              <Button
                color='primary'
                className='my-3 block w-full font-bold text-white'
              >
                Search
              </Button>
            </div>
            {orBreak()}
            <div>
              <Button className='block h-12 w-full rounded bg-blue-50 font-bold text-blue-900'>
                I'm a Homeschooler
              </Button>
            </div>
          </div>
        </div>
        <OnBoardingModalFooter
          nextDisabled={!isValid}
          onBackClick={onBackClick}
          onNextClick={onNextClick}
        />
      </div>
    </div>
  );
};
