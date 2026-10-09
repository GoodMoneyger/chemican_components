import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';

import { describe, expect, it } from 'vitest';

import { PLACEHOLDER_ATTRIBUTE } from './dragAndDrop';

const require = createRequire(import.meta.url);

describe('dnd-kit internals', () => {
  it('still names its placeholder attribute as the tree expects', () => {
    const source = readFileSync(require.resolve('@dnd-kit/dom'), 'utf8');
    const prefix = source.match(/ATTR_PREFIX = "([^"]+)"/)?.[1];
    const suffix = source.match(
      /PLACEHOLDER_ATTRIBUTE = `\$\{ATTR_PREFIX\}([^`]+)`/
    )?.[1];
    expect(`${prefix}${suffix}`).toBe(PLACEHOLDER_ATTRIBUTE);
  });
});
