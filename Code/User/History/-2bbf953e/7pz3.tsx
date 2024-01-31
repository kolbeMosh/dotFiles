import { ParamModal } from '../ParamModal/ParamModal';
import { OnboardingFlow } from './OnBoardingFlow';

export const OnboardingModal = () => {
  return (
    <ParamModal
      size='full'
      triggerParam={{ name: 'signup', value: 'true' }}
      classNames={{
        body: 'p-0',
        closeButton: 'text-white z-50'
      }}
    >
      <OnboardingFlow />
    </ParamModal>
  );
};
