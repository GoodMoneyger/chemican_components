#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Get the new version from command line arguments
const newVersion = process.argv[2];

if (!newVersion) {
  console.error('Error: Version argument is required');
  process.exit(1);
}

// Files to update
const filesToUpdate = [
  'src/components/Utilities/Installation.mdx',
  'README.md',
];

// Regular expression to match #release-x.x.x and #release-x.x.x-x patterns (including prereleases)
const releaseRegex = /#release-\d+\.\d+\.\d+(-\d+)?/g;
const newReleaseTag = `#release-${newVersion}`;

console.log(`Updating version references to ${newReleaseTag}...`);

let updatedFiles = 0;

filesToUpdate.forEach((filePath) => {
  const fullPath = path.resolve(path.dirname(__dirname), filePath);

  if (!fs.existsSync(fullPath)) {
    console.warn(`Warning: File not found: ${filePath}`);
    return;
  }

  try {
    const content = fs.readFileSync(fullPath, 'utf8');
    const originalContent = content;

    // Replace all #release-x.x.x with the new version
    const updatedContent = content.replace(releaseRegex, newReleaseTag);

    if (originalContent !== updatedContent) {
      fs.writeFileSync(fullPath, updatedContent, 'utf8');
      console.log(`✓ Updated ${filePath}`);
      updatedFiles++;
    } else {
      console.log(`- No changes needed in ${filePath}`);
    }
  } catch (error) {
    console.error(`Error updating ${filePath}:`, error.message);
    process.exit(1);
  }
});

console.log(
  `\nVersion reference update complete! Updated ${updatedFiles} file(s).`
);
