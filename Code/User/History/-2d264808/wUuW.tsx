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
    <OnboardingModalContent
      headerText='Add Your Child'
      onNextClick={onNextClick}
      onBackClick={onBackClick}
      nextBtnDisabled={!isValid}
      currentStep={currentStep}
      customerGroup={CustomerGroups.PARENT}
      nextBtnLoading={signupLoading}
      signupError={signupError}
    >
      <h1>test</h1>
    </OnboardingModalContent>
  );
};
