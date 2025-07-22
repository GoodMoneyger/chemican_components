export default {
  extends: ['@commitlint/config-conventional'],
  // Custom parser to handle multiple topics
  parserPreset: {
    parserOpts: {
      headerPattern: /^([a-z,]+):\s(.+)$/,
      headerCorrespondence: ['type', 'subject'],
    },
  },
  // Custom plugin to validate multiple topics and capitalization
  plugins: [
    {
      rules: {
        'multiple-topic-enum': (parsed) => {
          const { type } = parsed;
          if (!type) return [false, 'Type is required'];
          
          const validTopics = [
            // Components
            'button', 'callout', 'checkbox', 'chip', 'dialog', 'formfield',
            'input', 'progress', 'radiobutton', 'select', 'spinner', 'switch',
            'table', 'tag', 'textarea', 'toast',
            // General
            'multiple', 'tokens', 'dev', 'doc', 'config', 'ci', 'deps', 'release'
          ];
          
          const topics = type.split(',').map(t => t.trim());
          const invalidTopics = topics.filter(topic => !validTopics.includes(topic));
          
          if (invalidTopics.length > 0) {
            return [false, `Invalid topic(s): ${invalidTopics.join(', ')}. Valid topics: ${validTopics.join(', ')}`];
          }
          
          return [true];
        },
        'subject-capitalization': (parsed) => {
          const { subject } = parsed;
          if (!subject) return [false, 'Subject is required'];
          
          const firstChar = subject.charAt(0);
          
          // Allow special characters (non-letters) to pass through
          if (!/[a-zA-Z]/.test(firstChar)) {
            return [true];
          }
          
          // Check if first letter is capitalized
          if (firstChar !== firstChar.toUpperCase()) {
            return [false, 'Subject must start with a capital letter (unless it starts with a special character)'];
          }
          
          return [true];
        },
      },
    },
  ],
  rules: {
    'type-enum': [0], // Disable default type-enum since we use custom validation
    'type-empty': [2, 'never'],
    'subject-empty': [2, 'never'],
    'subject-case': [0], // Disable default case rule - using custom capitalization
    'subject-full-stop': [2, 'never', '.'],
    'header-max-length': [2, 'always', 100],
    'multiple-topic-enum': [2, 'always'],
    'subject-capitalization': [2, 'always'],
  },
};