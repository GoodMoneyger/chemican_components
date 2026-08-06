// INFO: This file is the main entry point for the Chemican Components
// library. It does not include the Tailwind CSS preset, as it is
// intended to be included separately so that consuming projects can
// integrate it into their own Tailwind setup.

'use client';

import { Slot as RadixSlot } from 'radix-ui';

import './index.css';

export * from './components';

/**
 * Radix `Slot` re-export for consuming apps that need to merge props onto an
 * arbitrary child (e.g. tooltip wrappers), so they don't have to depend on
 * radix directly.
 */
export const Slot = RadixSlot.Root;
