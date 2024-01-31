import clsx from 'clsx';
import { range } from 'lodash';
import Doodle1Svg from '../../../components/icons/doodles/doodle-1.svg';
import DoodlePagesSvg from '../../../components/icons/doodles/doodle-pages-1.svg';

type OnBoardingModalHeaderProps = {
  currentStep?: number;
  text: string;
  headerColor: string;
};

export const OnBoardingModalHeader = ({
  currentStep,
  text,
  headerColor
}: OnBoardingModalHeaderProps) => {
  return (
    <div
      className={`${headerColor} relative flex flex-col gap-1  py-8 text-center text-white`}
    >
      <span className='absolute bottom-0 left-0'>
        <Doodle1Svg />
      </span>
      <span className='absolute right-0 top-0'>
        <DoodlePagesSvg />
      </span>
      <p className='text-base font-normal uppercase text-ibc-gray'>
        Welcome to Ignatius Book Club
      </p>
      <h1 className='text-3xl font-medium'>{text}</h1>
      {!!currentStep && (
        <div className='absolute bottom-0 left-1/2 flex -translate-x-1/2 translate-y-1/2 gap-10'>
          {range(3).map((i) => (
            <span
              key={`onboarding-circle-${i}`}
              className='inline-flex h-6 w-6 items-center justify-center rounded-full border-1 border-[#C2C2C2] bg-white'
            >
              <span
                className={clsx('inline-block h-4 w-4 rounded-full', {
                  'bg-primary': i === currentStep - 1
                })}
              ></span>
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
