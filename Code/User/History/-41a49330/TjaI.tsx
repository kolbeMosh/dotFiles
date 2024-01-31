import {
  AutocompleteItem,
  AutocompleteItemProps,
  AutocompleteSlots,
  InputProps,
  Autocomplete as NextUIAutocomplete,
  AutocompleteProps as NextUIAutocompleteProps,
  SlotsToClasses
} from '@nextui-org/react';
import { ReactNode } from 'react';

type AutocompleteProps = Omit<NextUIAutocompleteProps, 'children'> & {
  items: { display: ReactNode; value: any }[];
  autocompleteItemProps?: Partial<AutocompleteItemProps>;
};

const defaultInputProps: Partial<InputProps> = {
  classNames: {
    input: 'text-base'
  }
};

const defaultAutocompleteItemProps: Partial<AutocompleteItemProps> = {
  variant: 'flat',
  classNames: {
    title: 'text-ibc-blue text-base'
  }
};

const defaultClassNames: SlotsToClasses<AutocompleteSlots> = {
  popoverContent: 'bg-ibc-gray rounded-md',
  selectorButton: 'text-base'
};

export const Autocomplete = ({
  label,
  size = 'sm',
  radius = 'md',
  variant = 'bordered',
  required,
  items,
  inputProps = {},
  classNames = {},
  autocompleteItemProps = {},
  ...props
}: AutocompleteProps) => {
  return (
    <div>
      {!!label && (
        <label className='mb-2 inline-block w-full text-[#424242]'>
          {label}
          {required && '*'}
        </label>
      )}
      <NextUIAutocomplete
        {...props}
        label=''
        variant={variant}
        size={size}
        inputProps={{
          ...defaultInputProps,
          ...inputProps
        }}
        radius={radius}
        classNames={{
          ...defaultClassNames,
          ...classNames
        }}
      >
        {items.map((item) => (
          <AutocompleteItem
            key={item.value}
            value={item.value}
            variant='light'
            {...defaultAutocompleteItemProps}
          >
            {item.display}
          </AutocompleteItem>
        ))}
      </NextUIAutocomplete>
    </div>
  );
};
