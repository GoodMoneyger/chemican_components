import { TextField as TextFieldComponent } from './TextField';
import { AutoSuggest } from './AutoSuggest';
import { TagInput } from './TagInput';

export * from './TextField';
export * from './AutoSuggest';
export * from './TagInput';

// Attach AutoSuggest and TagInput as properties of TextField
export const TextField = Object.assign(TextFieldComponent, {
  AutoSuggest,
  TagInput,
});
