import { Autocomplete, Link, ModalBody, ModalHeader } from '@nextui-org/react';
import { AnchorIcon } from '../assets/AnchorIcon';

type SchoolSearchProps = {
  searchCityState?: string;
  searchZip?: string;
  currentStep: number;
  onBackClick: () => void;
  onNextClick: () => void;
};

export const SchoolSearch = () => {
  return (
    <div></div>

    // <>
    //   <ModalHeader className='z-1flex flex-col gap-1 bg-orange-400 py-6 text-center text-white'>
    //     <h2 className='text-base font-normal'>Welcome to Ignatius Book Club</h2>
    //     <h1 className='text-2xl'>Find a School</h1>
    //   </ModalHeader>
    //   <ModalBody className='my-6'>
    //     <div className='absolute left-1/2 z-0 -my-11 mx-auto flex -translate-x-1/2 gap-8'>
    //       <span className='inline-block flex h-6 w-6 items-center justify-center rounded-full border-1 border-gray-500 bg-white'>
    //         <span className='inline-block h-4 w-4 rounded-full bg-white'></span>
    //       </span>
    //       <span className='inline-block flex h-6 w-6 items-center justify-center rounded-full border-1 border-gray-500 bg-white'>
    //         <span className='inline-block h-4 w-4 rounded-full bg-blue-500'></span>
    //       </span>

    //       <span className='inline-block flex h-6 w-6 items-center justify-center rounded-full border-1 border-gray-500 bg-white'>
    //         <span className='inline-block h-4 w-4 rounded-full bg-white'></span>
    //       </span>
    //       <span className='inline-block flex h-6 w-6 items-center justify-center rounded-full border-1 border-gray-500 bg-white'>
    //         <span className='inline-block h-4 w-4 rounded-full bg-white'></span>
    //       </span>
    //     </div>
    //     <h3>You are searching in:</h3>
    //     <div className='flex justify-between font-bold'>
    //       <h4 className='inline-block text-blue-800'>Adak, Alaska</h4>
    //       <Link
    //         showAnchorIcon
    //         anchorIcon={<AnchorIcon />}
    //         className=''
    //         href='#'
    //       >
    //         Change Location
    //       </Link>
    //     </div>
    //     <div className='my-5 flex justify-between'>
    //       <h4 className='inline-block'>School Name</h4>
    //       <Link className='font-bold' href='#'>
    //         Cant find your School?
    //       </Link>
    //     </div>
    //     <Autocomplete placeholder='Type to view matches'>
    //       <h1>HIIIIII</h1>
    //     </Autocomplete>
    //   </ModalBody>
    // </>
  );
};
