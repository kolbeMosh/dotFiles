import Link from 'next/link';

export const SignupPage = () => {
  return (
    <div>
      <h1>Signup</h1>
      <div>
        <h2>Are you a Teacher or a Parent?</h2>
        <Link href='/users/signup/teacher'>Teacher</Link>
        <div></div>
        <Link href='/users/signup/parent'>Parent</Link>
      </div>
    </div>
  );
};
