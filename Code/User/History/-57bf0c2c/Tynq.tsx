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

// const MyInput = extendVariants(Input, {
//   variants: {
//     // <- modify/add variants
//     color: {
//       stone: {
//         // <- add a new color variant
//         inputWrapper: [
//           // <- Input wrapper slot
//           'bg-zinc-100',
//           'border',
//           'shadow',
//           'transition-colors',
//           'focus-within:bg-zinc-100',
//           'data-[hover=true]:border-zinc-600',
//           'data-[hover=true]:bg-zinc-100',
//           'group-data-[focus=true]:border-zinc-600',
//           // dark theme
//           'dark:bg-zinc-900',
//           'dark:border-zinc-800',
//           'dark:data-[hover=true]:bg-zinc-900',
//           'dark:focus-within:bg-zinc-900'
//         ],
//         input: [
//           // <- Input element slot
//           'text-zinc-800',
//           'placeholder:text-zinc-600',
//           // dark theme
//           'dark:text-zinc-400',
//           'dark:placeholder:text-zinc-600'
//         ]
//       }
//     },
//     size: {
//       xs: {
//         inputWrapper: 'h-unit-6 min-h-unit-6 px-1',
//         input: 'text-tiny'
//       },
//       md: {
//         inputWrapper: 'h-unit-10 min-h-unit-10',
//         input: 'text-small'
//       },
//       xl: {
//         inputWrapper: 'h-unit-14 min-h-unit-14',
//         input: 'text-medium'
//       }
//     },
//     radius: {
//       xs: {
//         inputWrapper: 'rounded'
//       },
//       sm: {
//         inputWrapper: 'rounded-[4px]'
//       }
//     },
//     textSize: {
//       base: {
//         input: 'text-base'
//       }
//     },
//     removeLabel: {
//       true: {
//         label: 'hidden'
//       },
//       false: {}
//     }
//   },
//   defaultVariants: {
//     color: 'stone',
//     textSize: 'base',
//     removeLabel: true
//   }
// });

export const Input = extendVariants(NextUIInput, {
  variants: {
    radius: {
      sm: {}
    }
  }
});

// export const Input = ({
//   label,
//   size = 'sm',
//   type = 'text',
//   radius = 'md',
//   variant = 'bordered',
//   classNames = {},
//   required,
//   tooltip,
//   ...props
// }: InputProps) => {
//   return (
//     <div className='font-poppins'>
//       {!!label && (
//         <label className='mb-2 inline-flex items-center justify-between text-[#424242]'>
//           <span>
//             {label}
//             {required && '*'}
//           </span>

//           {tooltip && (
//             <span>
//               <Tooltip content={tooltip}>
//                 <span className='inline-block'>&nbsp;(?)</span>
//               </Tooltip>
//             </span>
//           )}
//         </label>
//       )}
//       <NextUIInput
//         {...props}
//         type={type}
//         label=''
//         variant={variant}
//         size={size}
//         radius={radius}
//         classNames={{
//           ...defaultClassNames,
//           ...classNames
//         }}
//       />
//     </div>
//   );
// };
