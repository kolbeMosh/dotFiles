import { OnboardingFlowProps } from '../OnboardingFlow';
import { OnboardingModalContent } from '../OnboardingModalContent';

type AddStudentProps = OnboardingFlowProps & {};

export const AddStudentFlow = ({
  signupInputs,
  setSignupInputs,
  onNextClick,
  onBackClick,
  currentStep,
  signupLoading,
  signupError
}: addStudentProps) => {
  return (
    <OnboardingModalContent>
      <h1>test</h1>
    </OnboardingModalContent>
  );
};
