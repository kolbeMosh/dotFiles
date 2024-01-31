import { Button, Radio, RadioGroup } from '@nextui-org/react';
import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';
import { CustomerGroups } from 'src/lib/constants';
import { OnBoardingModalHeader } from './OnboardingModalHeader';

type CustomerGroupSelectProps = {
  customerGroup: number;
  setCustomerGroup: Dispatch<SetStateAction<number>>;
  setShowGroupSelect: Dispatch<SetStateAction<boolean>>;
  headerColor?: string;
};

export const CustomerGroupSelect = ({
  customerGroup,
  setCustomerGroup,
  setShowGroupSelect,
  headerColor
}: CustomerGroupSelectProps) => {
  return (
    <div>
      <OnBoardingModalHeader
        text='Create an Account'
        headerColor={headerColor}
      />
      <div className='px-20 py-14'>
        <RadioGroup
          value={String(customerGroup)}
          onChange={(e) => setCustomerGroup(+e.target.value)}
        >
          <Radio
            value={String(CustomerGroups.TEACHER)}
            description='Order for my classroom (or shop as parent after signing in as teacher).'
            classNames={{
              base: 'items-start mb-4',
              labelWrapper: '-mt-1',
              label: 'text-ibc-blue text-lg',
              description: 'text-ibc-gray-2 text-base'
            }}
          >
            Teacher/Administrator/Homeschooler
          </Radio>
          <Radio
            value={String(CustomerGroups.PARENT)}
            description='Order for a child in a book club classroom.'
            classNames={{
              base: 'items-start',
              labelWrapper: '-mt-1',
              label: 'text-ibc-blue text-lg',
              description: 'text-ibc-gray-2 text-base'
            }}
          >
            Parent/Family Member/Guardian
          </Radio>
        </RadioGroup>
        <div className='mt-11'>
          <Button
            isDisabled={!customerGroup}
            className='w-full bg-primary text-white'
            onClick={() => {
              setShowGroupSelect(false);
            }}
          >
            Next
          </Button>

          <div className='mt-4 text-center'>
            Already have an Account?{' '}
            <Link href='/?login=true' className='text-ibc-light-blue'>
              Log In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
