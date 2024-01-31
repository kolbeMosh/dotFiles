import {
  InputSlots,
  Input as NextUIInput,
  InputProps as NextUIInputProps,
  SlotsToClasses,
  Tooltip,
  extendVariants
} from '@nextui-org/react';

type InputProps = NextUIInputProps & {
  tooltip?: string;
};

const defaultClassNames: SlotsToClasses<InputSlots> = {
  input: 'text-base'
};

const extendedInput = extendVariants(NextUIInput, {
  variants: {
    endContent: {
      endButton: {
        innerWrapper: ['w-8/12', 'text-white']
      }
    }
  }
});

export const Input = ({
  label,
  size = 'sm',
  type = 'text',
  radius = 'md',
  variant = 'endButton',
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
      <NextUIInput
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
