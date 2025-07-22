export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Override the type-enum rule to use our custom topic prefixes
    'type-enum': [
      2,
      'always',
      [
        // Component prefixes (current components)
        'button',
        'callout',
        'checkbox',
        'chip',
        'dialog',
        'formfield',
        'input',
        'progress',
        'radiobutton',
        'select',
        'spinner',
        'switch',
        'table',
        'tag',
        'textarea',
        'toast',
        
        // General categories
        'multiple',
        'tokens',
        'dev',
        'doc',
        'config',
        'ci',
        'deps',
        'release',
      ],
    ],
    // Custom rule to allow multiple topics separated by comma
    'type-case': [0], // Disable default case rule
    'type-empty': [2, 'never'],
    'subject-empty': [2, 'never'],
    'subject-case': [2, 'always', 'lower-case'],
    'subject-full-stop': [2, 'never', '.'],
    'header-max-length': [2, 'always', 100],
  },
  // Custom parser to handle multiple topics
  parserPreset: {
    parserOpts: {
      headerPattern: /^([a-z,]+):\s(.+)$/,
      headerCorrespondence: ['type', 'subject'],
    },
  },
  // Custom plugin to validate multiple topics
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
      },
    },
  ],
  rules: {
    ...{
      'type-enum': [0], // Disable default type-enum since we use custom validation
      'type-empty': [2, 'never'],
      'subject-empty': [2, 'never'],
      'subject-case': [2, 'always', 'lower-case'],
      'subject-full-stop': [2, 'never', '.'],
      'header-max-length': [2, 'always', 100],
      'multiple-topic-enum': [2, 'always'],
    },
  },
};