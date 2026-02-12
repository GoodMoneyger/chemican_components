import { default as React } from '../../../node_modules/react';
import { TextFieldProps } from './TextField';
/**
 * Suggestion value can be either a simple string or an object with value/label
 */
export type SuggestionValue = string | {
    value: string;
    label?: string;
    [key: string]: unknown;
};
export interface AutoSuggestProps extends Omit<TextFieldProps, 'onChange' | 'value' | 'onSelect'> {
    value: string;
    onChange: (value: string) => void;
    suggestions?: SuggestionValue[];
    onSearch?: (query: string) => Promise<SuggestionValue[]>;
    onSelect?: (value: SuggestionValue) => void;
    renderSuggestion?: (item: SuggestionValue) => React.ReactNode;
    getSuggestionValue?: (item: SuggestionValue) => string;
    getSuggestionKey?: (item: SuggestionValue, index: number) => string;
    debounceMs?: number;
    minQueryLength?: number;
    loadingText?: React.ReactNode;
}
/**
 * AutoSuggest component - TextField with dropdown suggestions
 *
 * @example
 * // Static suggestions
 * <TextField.AutoSuggest
 *   suggestions={['React', 'Vue', 'Angular']}
 *   value={value}
 *   onChange={setValue}
 * />
 *
 * @example
 * // Async suggestions
 * <TextField.AutoSuggest
 *   onSearch={async (query) => fetchSuggestions(query)}
 *   value={value}
 *   onChange={setValue}
 * />
 */
export declare const AutoSuggest: React.ForwardRefExoticComponent<AutoSuggestProps & React.RefAttributes<HTMLInputElement>>;
