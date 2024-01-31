import {
  Autocomplete,
  AutocompleteItem,
  AutocompleteSection,
  Link,
  ModalBody,
  ModalHeader
} from '@nextui-org/react';
import { School } from 'src/lib/types/user-types';
import { AnchorIcon } from '../assets/AnchorIcon';
import { SetStateAction, Dispatch, useState } from 'react';
import { OnBoardingModalHeader } from '../OnboardingModalHeader';
import { OnBoardingModalFooter } from '../OnboardingModalFooter';

type SchoolSearchProps = {
  searchCityState?: string;
  searchZip?: string;
  currentStep: number;
  onBackClick: () => void;
  onNextClick: () => void;
  setSelectedSchool: Dispatch<SetStateAction<School>>;
};

export const SchoolSearch = ({
  searchCityState,
  searchZip,
  currentStep,
  onBackClick,
  onNextClick,
  setSelectedSchool
}: SchoolSearchProps) => {
  const [isValid, setIsValid] = useState(false);

  return (
    <div>
      <OnBoardingModalHeader text='Find a School' currentStep={currentStep} />
      <div className='p-10'>
        <div className='mx-4 mb-5'>
          <h3>You are searching in:</h3>
          <div className='flex justify-between font-bold'>
            <h4 className='inline-block text-blue-800'>Adak, Alaska</h4>
            <Link
              showAnchorIcon
              anchorIcon={<AnchorIcon />}
              className=''
              href='#'
            >
              Change Location
            </Link>
          </div>
          <div className='my-5 flex justify-between'>
            <h4 className='inline-block'>School Name</h4>
            <Link className='font-bold' href='#'>
              Cant find your School?
            </Link>
          </div>
          <Autocomplete placeholder='Type to view matches' onInputChange={() =>}>
            <AutocompleteItem key='School Choice 1'>
              School Choice 1
            </AutocompleteItem>
            <AutocompleteItem key='School Choice 2'>
              School Choice 2
            </AutocompleteItem>
            <AutocompleteItem key='School Choice 3'>
              School Choice 3
            </AutocompleteItem>
          </Autocomplete>
        </div>
        <OnBoardingModalFooter
          nextDisabled={!isValid}
          onBackClick={onBackClick}
          onNextClick={onNextClick}
        ></OnBoardingModalFooter>
      </div>
    </div>
  );
};
