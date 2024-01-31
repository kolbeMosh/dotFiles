import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';
import { Autocomplete } from 'src/app/components/Autocomplete/Autocomplete';
import { School } from 'src/lib/types/user-types';

type SchoolSearchResultsProps = {
  search: string;
  selectedSchool: School;
  setSelectedSchool: Dispatch<SetStateAction<School>>;
  schools: School[];
  setSchools: Dispatch<SetStateAction<School[]>>;
  onReset: () => void;
};

export const SchoolSearchResults = ({
  search,
  setSelectedSchool,
  selectedSchool,
  schools,
  onReset
}: SchoolSearchResultsProps) => {
  return (
    <div>
      <p className='mb-4 font-poppins font-normal'>You are searching in:</p>
      <div className='flex justify-between'>
        <p className='inline-block text-lg font-medium text-ibc-dark-blue'>
          {search}
        </p>

        <button
          className='text-base font-medium text-primary'
          onClick={onReset}
        >
          Change Location
        </button>
      </div>

      <Autocomplete
        label={
          <div className='flex justify-between'>
            <span>School Name</span>
            <Link className='text-base font-medium text-primary' href='/'>
              Cant find your School?
            </Link>
          </div>
        }
        placeholder='Select a school'
        selectedKey={selectedSchool?.id}
        onSelectionChange={(value) => {
          const school = schools.find((s) => s.id === value);
          setSelectedSchool(school);
        }}
        items={(schools || []).map((school) => ({
          display: school.name,
          value: school.id
        }))}
      />
    </div>
  );
};
