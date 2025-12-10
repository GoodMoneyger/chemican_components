import { readdirSync } from 'fs';
import { join } from 'path';

// Dynamically get component names from src/components directory
function getComponentTopics() {
  // Directories to exclude from component topics (utility/documentation directories)
  const excludeList = [
    'utilities',
    // Add more directories to exclude here if needed
  ];

  try {
    const componentsDir = join(process.cwd(), 'src', 'components');
    const entries = readdirSync(componentsDir, { withFileTypes: true });

    return entries
      .filter((entry) => entry.isDirectory())
      .map((entry) => entry.name.toLowerCase())
      .filter((name) => !excludeList.includes(name));
  } catch (error) {
    console.warn(
      'Could not read components directory, falling back to static list'
    );
    // Fallback to static list if directory reading fails
    return [
      'accordion',
      'accountmenu',
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
    ];
  }
}

const componentTopics = getComponentTopics();

export default {
  extends: ['@commitlint/config-conventional'],
  // Custom parser to handle scopes (standard conventional commits format)
  parserPreset: {
    parserOpts: {
      headerPattern: /^([a-z,]+)(?:\(([a-z,\s]+)\))?:\s(.+)$/i,
      headerCorrespondence: ['type', 'scope', 'subject'],
    },
  },
  // Custom plugin to validate multiple topics and capitalization
  plugins: [
    {
      rules: {
        'multiple-topic-enum': (parsed) => {
          const { type, scope } = parsed;
          if (!type) return [false, 'Type is required'];

          // Valid conventional commit types
          const validTypes = [
            'feat',
            'fix',
            'docs',
            'style',
            'refactor',
            'perf',
            'test',
            'build',
            'ci',
            'chore',
            'revert',
            'release',
          ];

          // Types that require a scope
          const typesThatRequireScope = [
            'feat',
            'fix',
            'refactor',
            'perf',
            'test',
            'style',
          ];

          // Valid scopes (component names and general categories)
          const validScopes = [
            // Dynamic component topics
            ...componentTopics,
            // General categories
            'multiple',
            'misc',
            'general',
            'tokens',
            'dev',
            'doc',
            'config',
            'ci',
            'deps',
            'release',
            'util',
            'assets',
          ];

          // Validate type
          const types = type.split(',').map((t) => t.trim().toLowerCase());
          const invalidTypes = types.filter((t) => !validTypes.includes(t));

          if (invalidTypes.length > 0) {
            return [
              false,
              `Invalid type(s): ${invalidTypes.join(', ')}. Valid types: ${validTypes.join(', ')}`,
            ];
          }

          // Check if scope is required for this type
          const requiresScope = types.some((t) =>
            typesThatRequireScope.includes(t)
          );
          if (requiresScope && !scope) {
            return [
              false,
              `Scope is required for commit types: ${typesThatRequireScope.join(', ')}`,
            ];
          }

          // Validate scope if provided
          if (scope) {
            const scopes = scope.split(',').map((s) => s.trim().toLowerCase());
            const invalidScopes = scopes.filter(
              (s) => !validScopes.includes(s)
            );

            if (invalidScopes.length > 0) {
              return [
                false,
                `Invalid scope(s): ${invalidScopes.join(', ')}. Valid scopes: ${validScopes.join(', ')}`,
              ];
            }
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
            return [
              false,
              'Subject must start with a capital letter (unless it starts with a special character)',
            ];
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
