'use client';

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalSlots,
  SlotsToClasses
} from '@nextui-org/react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { PropsWithChildren, useCallback, useEffect, useState } from 'react';

type ParamModalProps = PropsWithChildren<{
  classNames?: SlotsToClasses<ModalSlots>;
  triggerParam: {
    name: string;
    value: string;
    size:
      | 'xs'
      | 'sm'
      | 'md'
      | 'lg'
      | 'xl'
      | '2xl'
      | '3xl'
      | '4xl'
      | '5xl'
      | 'full';
  };
}>;

export const ParamModal = ({
  triggerParam,
  children,
  classNames
}: ParamModalProps) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const paramVal = searchParams.get(triggerParam.name);
    setIsOpen(paramVal === triggerParam.value);
  }, [searchParams]);

  const removeParamFromUrl = useCallback(() => {
    const params = new URLSearchParams(searchParams);
    params.delete(triggerParam.name);
    const paramStr = params.toString();
    const newPath = `${pathname}${paramStr ? '?' : ''}${paramStr}`;
    router.push(newPath);
  }, [searchParams]);

  return (
    <Modal
      isOpen={isOpen}
      isDismissable={true}
      onClose={removeParamFromUrl}
      classNames={classNames}
    >
      <ModalContent>
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </Modal>
  );
};
