import { useState } from 'react';

import { Button, ModalBody, ModalHeader } from '@nextui-org/react';
import { TeacherSignupInputs } from 'src/lib/types/user-types';
import { useSignUp } from '../sign-up-context/sign-up-context';

interface TeacherSignupFormProps {
  onSubmit: (inputs: TeacherSignupInputs) => void;
}

export const TeacherSignupForm = ({ onSubmit }: TeacherSignupFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNum] = useState('');
  const [title, setTitle] = useState('');

  const { lastNameInput, setLastNameInput } = useSignUp();
  const { firstNameInput, setFirstNameInput } = useSignUp();

  const onFormSubmitted = () => {
    // onSubmit({
    //   first_name: firstName,
    //   last_name: lastName,
    //   email,
    //   authentication: {
    //     new_password: password
    //   },
    //   customer_group_id: CustomerGroups.TEACHER,
    //   phoneNumber: phoneNumber
    // });
  };

  return (
    <>
      <ModalHeader className='z-1flex flex-col gap-1 bg-orange-400 py-6 text-center text-white'>
        <h2 className='text-base font-normal'>Welcome to Ignatius Book Club</h2>
        <h1 className='text-2xl'>Create Teacher Account</h1>
      </ModalHeader>
      <ModalBody className='my-6'>
        <div className='absolute left-1/2 z-0 -my-11 mx-auto flex -translate-x-1/2 gap-8'>
          <span className='inline-block flex h-6 w-6 items-center justify-center rounded-full border-1 border-gray-500 bg-white'>
            <span className='inline-block h-4 w-4 rounded-full bg-blue-500'></span>
          </span>
          <span className='inline-block flex h-6 w-6 items-center justify-center rounded-full border-1 border-gray-500 bg-white'>
            <span className='inline-block h-4 w-4 rounded-full bg-white'></span>
          </span>

          <span className='inline-block flex h-6 w-6 items-center justify-center rounded-full border-1 border-gray-500 bg-white'>
            <span className='inline-block h-4 w-4 rounded-full bg-white'></span>
          </span>
          <span className='inline-block flex h-6 w-6 items-center justify-center rounded-full border-1 border-gray-500 bg-white'>
            <span className='inline-block h-4 w-4 rounded-full bg-white'></span>
          </span>
        </div>
        <form
          className=''
          onSubmit={(e) => {
            e.preventDefault();
            onFormSubmitted();
          }}
        >
          <div className=''>
            <label className='mx-6' htmlFor='first_name'>
              Title*
            </label>
            <div className='mx-6 mb-3 mt-1'>
              <input
                className='w-full rounded-md border-2 py-1'
                type='text'
                name='first_name'
                id='first_name'
                placeholder=''
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>

            <label className='mx-6' htmlFor='first_name'>
              First Name*
            </label>
            <div className='mx-6 mb-3 mt-1'>
              <input
                className='w-full rounded-md border-2 py-1'
                type='text'
                name='first_name'
                id='first_name'
                placeholder=''
                value={firstNameInput}
                onChange={(e) => {
                  setFirstNameInput(e.target.value);
                }}
              />
            </div>

            <label className='mx-6' htmlFor='first_name'>
              Last Name*
            </label>
            <div className='mx-6 mb-3 mt-1'>
              <input
                className='w-full rounded-md border-2 py-1'
                type='text'
                name='last_name'
                id='last_name'
                placeholder=''
                value={lastNameInput}
                onChange={(e) => {
                  setLastNameInput(e.target.value);
                }}
              />
            </div>

            <label className='mx-6' htmlFor='first_name'>
              Email Address*
            </label>
            <div className='mx-6 mb-3 mt-1'>
              <input
                className='w-full rounded-md border-2 py-1'
                type='email'
                name='email'
                id='email'
                placeholder=''
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <label className='mx-6' htmlFor='first_name'>
              Password*
            </label>
            <div className='mx-6 mb-3 mt-1'>
              <input
                className='w-full rounded-md border-2 py-1'
                type='password'
                name='password'
                id='password'
                placeholder=''
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            <label className='mx-6' htmlFor='first_name'>
              Mobile Number
            </label>
            <div className='mx-6 mb-3 mt-1'>
              <input
                className='w-full rounded-md border-2 py-1'
                type='tel'
                pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                name='phone_number'
                id='phone_number'
                placeholder=''
                value={phoneNumber}
                onChange={(e) => {
                  setPhoneNum(e.target.value);
                }}
              />
            </div>

            <div className=' mx-6 mb-3 mt-1 flex justify-center gap-4'>
              <input
                className='inline-block rounded-md border-2 py-1'
                type='checkbox'
                name='terms_of_service'
                id='terms_of_service'
                placeholder=''
              />
              <label className='inline-block'>
                I have read and accept the{' '}
                <a href='#' className='text-blue-500'>
                  Terms of Use
                </a>
                &nbsp;and&nbsp;
                <a href='#' className='text-blue-500'>
                  Privacy Policy
                </a>
              </label>
            </div>
          </div>
          <div className='mx-6 flex justify-center gap-4'>
            <Button
              radius='sm'
              className='w-full bg-blue-50 font-bold text-blue-600'
            >
              Back
            </Button>
            <Button radius='sm' color='primary' className='w-full'>
              Next
            </Button>
          </div>
        </form>
      </ModalBody>
    </>
  );
};
