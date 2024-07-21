import type { ComponentWithAs } from '@paalan/react-shared/types';
import type { InputProps } from '../Input';

import { VStack } from '@paalan/react-layouts';
import { cn } from '@paalan/react-shared/lib';
import { forwardRef } from '@paalan/react-shared/utils';

import { Input } from '../Input';
import { Label } from '../Label';

interface LabelInputProps extends InputProps {
  label: string;
}

const LabelInput: ComponentWithAs<'input', LabelInputProps> = forwardRef<LabelInputProps, 'input'>(
  ({ label, className, id, ...inputProps }, ref) => {
    const labelId = id || label;
    return (
      <VStack className={cn('gap-2', className)}>
        <Label htmlFor={labelId} text={label} required={inputProps.required} isInvalid={inputProps.isInvalid} />
        <Input {...inputProps} ref={ref} id={labelId} />
      </VStack>
    );
  },
);
export { LabelInput };
