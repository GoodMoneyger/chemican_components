// Copies the label spec's generated TS types into src/components/Label/spec-types.ts.
//   node tools/copy-label-spec-types.mjs <path to sds_manager_label_spec>          copy
//   node tools/copy-label-spec-types.mjs <path to sds_manager_label_spec> --check  fail if the copy differs
import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const TARGET = new URL('../src/components/Label/spec-types.ts', import.meta.url);
const [specDir, flag] = process.argv.slice(2);
if (!specDir) {
  console.error('usage: copy-label-spec-types.mjs <spec repo path> [--check]');
  process.exit(2);
}

const body = readFileSync(join(specDir, 'generated', 'types.ts'), 'utf8');
const commit = execFileSync('git', ['-C', specDir, 'rev-parse', 'HEAD'], { encoding: 'utf8' }).trim();
const header =
  `// Copied from GoodMoneyger/sds_manager_label_spec@${commit} (generated/types.ts).\n` +
  '// Do not edit; run: node tools/copy-label-spec-types.mjs <spec repo path>\n';
const withoutHeader = (text) => text.split('\n').slice(2).join('\n');

if (flag === '--check') {
  if (withoutHeader(readFileSync(TARGET, 'utf8')) !== body) {
    console.error(`src/components/Label/spec-types.ts differs from the spec at ${commit}. Copy it again.`);
    process.exit(1);
  }
  console.log(`src/components/Label/spec-types.ts matches the spec at ${commit}.`);
} else {
  writeFileSync(TARGET, header + body);
  console.log(`Copied the spec types at ${commit}.`);
}
