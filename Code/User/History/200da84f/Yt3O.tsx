'use client';

import { useState } from 'react';
import { CustomerGroups } from 'src/lib/constants';
import { CustomerGroupSelect } from './CustomerGroupSelect';
import { ParentOnboardingFlow } from './ParentOnboardingFlow';
import { TeacherOnboardingFlow } from './TeacherOnboardingFlow';

type OnBoardingFlow = {};

export const OnboardingFlow = () => {
  const [customerGroup, setCustomerGroup] = useState<CustomerGroups>(
    CustomerGroups.TEACHER
  );

  const [showGroupSelect, setShowGroupSelect] = useState(true);

  if (showGroupSelect) {
    return (
      <CustomerGroupSelect
        customerGroup={customerGroup}
        setCustomerGroup={setCustomerGroup}
        setShowGroupSelect={setShowGroupSelect}
      />
    );
  }

  if (customerGroup === CustomerGroups.TEACHER) {
    return (
      <TeacherOnboardingFlow onBackClick={() => setShowGroupSelect(true)} />
    );
  }

  if (customerGroup === CustomerGroups.PARENT) {
    return (
      <ParentOnboardingFlow onBackClick={() => setShowGroupSelect(true)} />
    );
  }
};
