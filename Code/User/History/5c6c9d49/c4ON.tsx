'use client';

import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { School } from 'src/app/users/user-types';
import Autocomplete from './AutoComplete';

type SchoolPickerProps = {
  selectedSchool: School;
  setSelectedSchool: Dispatch<SetStateAction<School>>;
};

export const SchoolPicker = ({
  selectedSchool,
  setSelectedSchool
}: SchoolPickerProps) => {
  const [schools, setSchools] = useState<String[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const schoolsRes = await fetch('/api/schools', { method: 'GET' });
        const schools = await schoolsRes.json();
        const schoolNames = []
        schools.data.schools.forEach( s => {
          schoolNames.push(s.name)
        })
        setSchools(schoolNames);

      } catch (error) {
        // @TODO error
      }
    })();
  }, []);

  return (
    <div>
      <p>Select your school</p>
        <Autocomplete suggestions={...schools} actionFunction={}/>
    </div>
  );
};
