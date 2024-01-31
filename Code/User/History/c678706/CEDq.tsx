import { PropsWithChildren, ReactNode } from 'react';
import { OnBoardingModalFooter } from './OnboardingModalFooter';
import { OnBoardingModalHeader } from './OnboardingModalHeader';

type OnboardingModalContentProps = PropsWithChildren<{
  currentStep?: number;
  headerText: string;
  onBackClick: () => void;
  onNextClick: () => void;
  nextBtnText?: string;
  nextBtnDisabled: boolean;
  nextBtnLoading?: boolean;
  signupError?: string;
  headerColor?: string;
}>;

export const OnboardingModalContent = ({
  children,
  currentStep,
  headerText,
  onNextClick,
  onBackClick,
  nextBtnText = 'Next',
  nextBtnDisabled,
  nextBtnLoading,
  signupError,
  headerColor
}: OnboardingModalContentProps) => {
  return (
    <div>
      <OnBoardingModalHeader
        text={headerText}
        currentStep={currentStep}
        headerColor={!!headerColor ? headerColor : 'bg-ibc-orange'}
      />
      <div className='px-20 py-8'>
        {children}
        <OnBoardingModalFooter
          nextBtnDisabled={nextBtnDisabled}
          nextBtnLoading={nextBtnLoading}
          onBackClick={onBackClick}
          onNextClick={onNextClick}
          nextBtnText={nextBtnText}
          signupError={signupError}
        />
      </div>
    </div>
  );
};
