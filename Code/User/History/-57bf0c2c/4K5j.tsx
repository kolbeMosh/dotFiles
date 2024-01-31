import {
  InputSlots,
  Input as NextUIInput,
  InputProps as NextUIInputProps,
  SlotsToClasses,
  Tooltip,
  ButtonProps as NextUIButtonProps,
  Button as NextUIButton,
  extendVariants
} from '@nextui-org/react';

type InputProps = NextUIInputProps & {
  tooltip?: string;
};

const defaultClassNames: SlotsToClasses<InputSlots> = {
  input: 'text-base'
};

export const cInput = extendVariants(NextUIInput, {
  variants: {
    variant: {
      bordered: {
        inputWrapper: ['rounded-[9px]']
      },
      label: ['text-large']
    }
  },
  defaultVariants: {
    variant: 'bordered',
    size: 'sm',
    type: 'text',
    fullWidth: 'true',
    isDisabled: 'false',
    disableAnimation: 'false'
  }
});

export const Input = ({
  label,
  size = 'sm',
  type = 'text',
  radius = 'md',
  variant = 'bordered',
  classNames = {},
  required,
  tooltip,
  ...props
}: InputProps) => {
  return (
    <div className='font-poppins'>
      {!!label && (
        <label className='mb-2 inline-flex items-center justify-between text-[#424242]'>
          <span>
            {label}
            {required && '*'}
          </span>

          {tooltip && (
            <span>
              <Tooltip content={tooltip}>
                <span className='inline-block'>&nbsp;(?)</span>
              </Tooltip>
            </span>
          )}
        </label>
      )}
      <cInput
        {...props}
        type={type}
        label=''
        variant={variant}
        size={size}
        radius={radius}
        classNames={{
          ...defaultClassNames,
          ...classNames
        }}
      />
    </div>
  );
};
