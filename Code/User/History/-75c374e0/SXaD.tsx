'use client';

import {
  Autocomplete,
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

type FindSchoolProps = {
  onBackClick: () => void;
  setSelectedSchool: Dispatch<SetStateAction<School>>;
};

export const FindSchool = ({ setSelectedSchool }: FindSchoolProps) => {
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
      <div className='my-3'>
        <h4 className='mr-2 inline-block text-gray-400'>or</h4>
        <span className='inline-block w-10/12 border-1 border-gray-100 align-middle'></span>
      </div>
    );
  };

  return (
    <div>
      <OnBoardingModalHeader text="Find a School" currentStep={currentStep}/>
    </div>
    <>
      <Modal
        isOpen={true}
        classNames={{
          closeButton: 'text-white hover:bg-transparent text-2xl'
        }}
      >
        <ModalContent>
          <ModalHeader className='z-1flex flex-col gap-1 bg-orange-400 py-6 text-center text-white'>
            <h2 className='text-base font-normal'>
              Welcome to Ignatius Book Club
            </h2>
            <h1 className='text-2xl'>Find a School</h1>
          </ModalHeader>
          <ModalBody className='my-6'>
            <div className='absolute left-1/2 z-0 -my-11 mx-auto flex -translate-x-1/2 gap-8'>
              <span className='inline-block flex h-6 w-6 items-center justify-center rounded-full border-1 border-gray-500 bg-white'>
                <span className='inline-block h-4 w-4 rounded-full bg-white'></span>
              </span>
              <span className='inline-block flex h-6 w-6 items-center justify-center rounded-full border-1 border-gray-500 bg-white'>
                <span className='inline-block h-4 w-4 rounded-full bg-blue-500'></span>
              </span>

              <span className='inline-block flex h-6 w-6 items-center justify-center rounded-full border-1 border-gray-500 bg-white'>
                <span className='inline-block h-4 w-4 rounded-full bg-white'></span>
              </span>
              <span className='inline-block flex h-6 w-6 items-center justify-center rounded-full border-1 border-gray-500 bg-white'>
                <span className='inline-block h-4 w-4 rounded-full bg-white'></span>
              </span>
            </div>
            <div className='mx-4 -mt-3'>
              <br className='gray-500'></br>
              <h3>Find My School</h3>
              <div className='my-4'>
                <label>Search by Zip Code</label>
                <div className='my-1 h-8'>
                  <Input
                    type='text'
                    pattern='[0-9]{5}'
                    size='sm'
                    variant='bordered'
                    className=''
                    classNames={{}}
                    endContent={
                      <Button
                        color='primary'
                        className='-right-4 h-12 w-8/12 rounded'
                      >
                        Search
                      </Button>
                    }
                  ></Input>
                </div>
              </div>
              {orBreak()}
              <div className='my-4'>
                <h4 className='my-1'>Search by State and City</h4>
                <Autocomplete
                  variant='bordered'
                  className='block'
                  size='sm'
                  label=''
                >
                  <h1>HIIIIIII</h1>
                </Autocomplete>
                <Button color='primary' className='my-3 block w-full'>
                  Search
                </Button>
              </div>
              {orBreak()}
              <Button className='block h-12 w-full rounded bg-blue-50 font-bold text-blue-900'>
                I'm a Homeschooler
              </Button>
            </div>
            <div className='mx-6 mt-4 flex justify-center gap-4'>
              <Button
                radius='sm'
                className='w-full bg-blue-50 font-bold text-blue-600 '
              >
                Back
              </Button>
              <Button radius='sm' color='primary' className='w-full'>
                Next
              </Button>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
