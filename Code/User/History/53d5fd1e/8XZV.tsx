import { Avatar } from '@nextui-org/react';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { authOptions } from 'src/app/api/auth/[...nextauth]/auth-options';
import { CustomerGroups } from 'src/lib/constants';
import { BCv3 } from 'src/lib/types/bc-v3-types';
import { DropdownMenu } from '../DropdownMenu/DropdownMenu';
import { BookFairsLogo } from '../icons/BookFairsLogo';
import { ShoppingBagIcon } from '../icons/ShoppingBagIcon';
import { LogoutButton } from './LogoutButton';
import { SearchBar } from './SearchBar';
import { StoreContextBtn } from './StoreContextBtn';

export const Header = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user as BCv3.Customer;

  return (
    <header className='px-[98px]'>
      <div className='relative flex h-[115px] items-center justify-center'>
        <div className='absolute inset-0 flex items-center justify-between'>
          <span>
            <Link href='/'>
              <BookFairsLogo />
            </Link>
          </span>
          <span className='flex items-center'>
            <ShoppingBagIcon />
            <span className='ml-8'>
              {!!user ? (
                <DropdownMenu
                  trigger={
                    <button className='flex items-center'>
                      <Avatar size='lg' className='bg-ibc-yellow text-white' />
                      <span className='ml-2 font-medium text-ibc-dark-blue'>
                        {user.first_name}
                      </span>
                    </button>
                  }
                  menuItems={[
                    {
                      key: 'profile-item',
                      content: (
                        <Link href={`/users/profile/${user.id}`}>Profile</Link>
                      )
                    },
                    {
                      key: 'sign-out-item',
                      content: <LogoutButton />
                    }
                  ]}
                ></DropdownMenu>
              ) : (
                <>
                  <Link
                    href='/api/auth/signin'
                    className='mr-4 text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300'
                  >
                    Login
                  </Link>
                  <Link
                    href='/?signup=true'
                    className='mr-4 text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300'
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </span>
          </span>
        </div>
        <div className='w-full max-w-[50%]'>
          <SearchBar />
        </div>
      </div>
      <nav className='h-[100px] border-t-1'>
        <div className='flex h-full items-center justify-between font-medium uppercase text-ibc-dark-blue'>
          <Link href='/' aria-label='Books & Resources'>
            Books & Resources
          </Link>
          <Link href='/' aria-label='Flyers'>
            Flyers
          </Link>
          <Link href='/' aria-label="Teacher's Desk">
            Teacher's Desk
          </Link>
          <Link href='/' aria-label='Orders'>
            Orders
          </Link>
          <Link href='/' aria-label='EGift Cards'>
            EGift Cards
          </Link>
          <Link href='/' aria-label='Help'>
            Help
          </Link>
          {user?.customer_group_id === CustomerGroups.TEACHER && (
            <StoreContextBtn />
          )}
        </div>
      </nav>
    </header>
  );
};
