'use client';

import { signIn } from 'next-auth/react';
import { ParentSignupInputs } from 'src/app/api/auth/auth-types';
import { ParentSignupForm } from './ParentSignupForm';

export const ParentSignupPage = () => {
  const handleSignup = async (inputs: ParentSignupInputs) => {
    try {
      const signupRes = await fetch('/api/auth/signup', {
        method: 'POST',
        body: JSON.stringify(inputs)
      });
      const signupResParsed = await signupRes.json();
      if (signupResParsed.error) {
        throw signupResParsed.error;
      }
      const signinRes = await signIn('credentials', {
        email: inputs.email,
        password: inputs.authentication.new_password,
        redirect: true,
        callbackUrl: '/'
      });
    } catch (error) {
      // @TODO error
      console.error(error);
    }
  };

  return (
    <div className='ml- w-2/4 text-lg'>
      <h1 className='mt-9 bg-blue-500 p-10 px-20 text-2xl'>
        Create Parent Account
      </h1>
      <ParentSignupForm onSubmit={handleSignup} />
    </div>
  );
};
