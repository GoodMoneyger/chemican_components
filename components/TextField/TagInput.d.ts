import { default as React } from '../../../node_modules/react';
import { IconProp } from '../../lib/utils';
import { TagColorCode } from '../Tag/Tag';
export interface TagInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'onKeyDown'> {
    value: string[];
    onChange: (value: string[]) => void;
    maxTags?: number;
    allowDuplicates?: boolean;
    separators?: string[];
    inputValue?: string;
    onInputChange?: (inputValue: string) => void;
    prefixIcon?: IconProp;
    trailingIcon?: IconProp;
    trailingIconSize?: number;
    prefixIconSize?: number;
    invalid?: boolean;
    helperText?: React.ReactNode;
    onValidateTag?: (tag: string) => {
        valid: boolean;
        error?: React.ReactNode;
    };
    defaultValidationError?: React.ReactNode;
    tagColorCode?: TagColorCode;
}
export declare const TagInput: React.ForwardRefExoticComponent<TagInputProps & React.RefAttributes<HTMLInputElement>>;
