import { CustomerGroups } from 'src/lib/constants';
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
  const [isValid, setIsValid] = useState(false);
  useEffect(() => {
    setIsValid;
  });

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
