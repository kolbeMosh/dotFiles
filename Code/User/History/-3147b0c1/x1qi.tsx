'use client';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { School, Teacher } from 'src/app/users/user-types';
import { ApiResponse } from '../api/api-types';
import { AutoComplete } from './AutoComplete';

type TeacherPickerProps = {
  school: School;
  selectedTeacher: Teacher;
  setSelectedTeacher: Dispatch<SetStateAction<Teacher>>;
};

export const TeacherPicker = ({
  school,
  selectedTeacher,
  setSelectedTeacher
}: TeacherPickerProps) => {
  const [teachers, setTeachers] = useState<Teacher[]>([]);

  useEffect(() => {
    (async () => {
      try {
        let path = '/api/users/teachers';
        if (school?.id) {
          path += `?schoolId=${school.id}`;
        }
        const teachersRes = await fetch(path, { method: 'GET' });
        const teachersResParsed = (await teachersRes.json()) as ApiResponse<
          Teacher[]
        >;
        setTeachers(teachersResParsed.data.data);
      } catch (error) {
        // @TODO error
      }
    })();
  }, [school]);

  if (!teachers?.length) {
    return <p>No teachers at this school</p>;
  }

  return (
    <div>
      <p>Select your teacher</p>
      <AutoComplete
        suggestions={(teachers || []).map((t) => {
          return {
            display: t.name,
            value: t
          };
        })}
        setValue={setSelectedTeacher}
        value={{ display: selectedTeacher?.last_name, value: selectedTeacher }}
      />
    </div>
  );
};
