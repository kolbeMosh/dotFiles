import { useState } from 'react';
import { School, Student, Teacher } from '../users/user-types';
import { SchoolPicker } from './SchoolPicker';
import { TeacherPicker } from './TeacherPicker';

type AddStudentFormProps = {
  onAddStudent: (student: Student) => void;
};

export const AddStudentForm = ({ onAddStudent }: AddStudentFormProps) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState(0);
  const [grade, setGrade] = useState('');
  const [selectedSchool, setSelectedSchool] = useState<School>();
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher>();

  return (
    <div>
      <h3>Child's Name</h3>
      <div className='mb-4'>
        <input
          className='block w-full p-4'
          type='text'
          name='first_name'
          id='first_name'
          placeholder='First name'
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
      </div>

      <div className='mb-4'>
        <input
          className='block w-full p-4'
          type='text'
          name='last_name'
          id='last_name'
          placeholder='Last name'
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
      </div>

      <div className='mb-4'>
        <input
          className='block w-full p-4'
          type='number'
          min={0}
          name='age'
          id='age'
          placeholder='Age'
          value={age}
          onChange={(e) => {
            setAge(+e.target.value);
          }}
        />
      </div>

      <div className='mb-4'>
        <input
          className='block w-full p-4'
          type='text'
          name='grade'
          id='grade'
          placeholder='Grade'
          value={grade}
          onChange={(e) => {
            setGrade(e.target.value);
          }}
        />
      </div>

      <div className='flex py-3'>
        <SchoolPicker
          selectedSchool={selectedSchool}
          setSelectedSchool={setSelectedSchool}
        />
      </div>
      <div className='flex py-3'>
        {!!selectedSchool && (
          <TeacherPicker
            school={selectedSchool}
            selectedTeacher={selectedTeacher}
            setSelectedTeacher={setSelectedTeacher}
          />
        )}
      </div>

      <button
        className='w-full py-3 text-center hover:bg-gray-300'
        onClick={(e) => {
          e.preventDefault();
          onAddStudent({
            firstName,
            lastName,
            teachers: [
              {
                first_name: selectedTeacher.first_name,
                last_name: selectedTeacher.last_name,
                email: selectedTeacher.email,
                id: selectedTeacher.id
              }
            ],
            schools: [selectedSchool],
            age,
            grade
          });
        }}
      >
        Add student
      </button>
    </div>
  );
};
