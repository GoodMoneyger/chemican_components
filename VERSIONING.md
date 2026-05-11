# Versioning Guide

This library follows [Semantic Versioning](https://semver.org/) (semver). This document explains what that means in the context of an internal component library, and how to decide which version bump to use when releasing.

## Version Format

```
MAJOR.MINOR.PATCH
```

- **MAJOR** - Breaking changes that require consuming projects to update their code
- **MINOR** - New features or enhancements that are fully backwards-compatible
- **PATCH** - Bug fixes and minor corrections with no API changes

## What Counts as a Breaking Change?

For a component library, a "breaking change" is anything that could cause a consuming project to fail to build, render incorrectly, or behave differently after upgrading - without changing their own code. Examples:

| Change | Breaking? | Bump |
|---|---|---|
| Remove a component | Yes | MAJOR |
| Remove or rename a prop | Yes | MAJOR |
| Change a prop's type (e.g. `string` to `number`) | Yes | MAJOR |
| Change default behavior of an existing prop | Yes | MAJOR |
| Rename a CSS variable or design token | Yes | MAJOR |
| Remove or rename an exported utility or type | Yes | MAJOR |
| Change the required peer dependency range | Yes | MAJOR |
| Add a new component | No | MINOR |
| Add a new optional prop to an existing component | No | MINOR |
| Add a new variant to CVA config | No | MINOR |
| Add new design tokens (without removing existing ones) | No | MINOR |
| Add a new export | No | MINOR |
| Fix a visual bug (e.g. wrong spacing, color) | No | PATCH |
| Fix a behavioral bug (e.g. event not firing) | No | PATCH |
| Internal refactoring with no API or visual change | No | PATCH |
| Update dependencies (no API change) | No | PATCH |

### A note on visual changes

Visual changes can be ambiguous. A spacing fix is a patch, but a significant redesign of a component's appearance - even if the API stays the same - should be treated as a minor bump, since consuming projects may have made layout decisions based on the previous rendering.

## How to Release

Use `release-it` to create a new version:

```bash
# Bug fixes, dependency updates, internal refactoring
npx release-it patch

# New components, new props, new variants
npx release-it minor

# Breaking changes (removed/renamed props, changed defaults, removed components)
npx release-it major
```

This will:

1. Bump the version in `package.json`
2. Auto-generate a changelog in `CHANGELOG.md` from conventional commit messages
3. Create a git tag and GitHub release with the changelog as the release body
4. Trigger CI to publish a `release-X.X.X` tag

The changelog groups commits by type (Features, Bug Fixes, Refactoring, etc.), so writing good commit messages directly improves the changelog quality.

## Installing a Specific Version

Consuming projects pin to a specific release tag:

```sh
npm install --save @chemican/components@git+ssh://git@github.com:GoodMoneyger/chemican_components.git#release-1.0.0
```

Because there is no automatic version resolution (this is not an npm registry package), consuming projects must manually update their version reference. This makes it especially important to version correctly - a consumer upgrading from `1.0.0` to `1.1.0` should be confident that nothing will break.

## When in Doubt

- If you're unsure whether a change is breaking, treat it as breaking. A conservative major bump is safer than a minor bump that breaks a consuming project.
- Group related breaking changes into a single major release when possible, to reduce the number of mandatory upgrades for consumers.
- Document breaking changes clearly in the GitHub release notes so consumers know what to update.
