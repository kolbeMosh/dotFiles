import { useState } from 'react';
import { ParentSignupInputs } from 'src/app/api/auth/auth-types';
import { AddStudentForm } from 'src/app/components/AddStudentForm';
import { CustomerGroups } from 'src/app/users/user-constants';
import { Student } from '../../user-types';

interface ParentSignupFormProps {
  onSubmit: (inputs: ParentSignupInputs) => void;
}

export const ParentSignupForm = ({ onSubmit }: ParentSignupFormProps) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [students, setStudents] = useState<Student[]>([]);

  const onFormSubmitted = () => {
    onSubmit({
      first_name: firstName,
      last_name: lastName,
      email,
      authentication: {
        new_password: password
      },
      customer_group_id: CustomerGroups.PARENT,
      students
    });
  };

  return (
    <form
      className='block bg-gray-600 px-16 py-5 text-xl'
      onSubmit={(e) => {
        e.preventDefault();
        onFormSubmitted();
      }}
    >
      <div className='mb-4'>
        <input
          className='p-4'
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
          className='p-4'
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
          className='p-4'
          type='email'
          name='email'
          id='email'
          placeholder='Email address'
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>

      <div className='mb-4'>
        <input
          className='p-4'
          type='password'
          name='password'
          id='password'
          placeholder='Password'
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>

      <AddStudentForm
        onAddStudent={(student) => {
          setStudents((prev) => [...prev, student]);
        }}
      />

      <button className='w-full py-3 text-center hover:bg-gray-300'>
        Sign Up
      </button>
    </form>
  );
};
