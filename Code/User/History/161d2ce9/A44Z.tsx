import { ParamModal } from '../../../components/ParamModal/ParamModal';
import { OnboardingFlow } from './OnBoardingFlow';

export const OnboardingModal = () => {
  return (
    <ParamModal
      size='lg'
      triggerParam={{ name: 'signup', value: 'true' }}
      classNames={{
        body: 'p-0',
        closeButton: 'hover:text-[#2379fb] text-white z-50',
        base: 'self-start'
      }}
    >
      <OnboardingFlow />
    </ParamModal>
  );
};