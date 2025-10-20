# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository. **However, the guidelines are applicable to all developers working on this project.**

## Project Overview

This is `@chemican/components` - a React component library built with Radix UI, TailwindCSS v4, and TypeScript. It's designed for internal company use and provides reusable, accessible UI components with a design token system.

## Key Technologies

- **React + TypeScript**: Component framework with full type safety
- **Radix UI**: Accessibility-first primitives for components
- **TailwindCSS v4**: Utility-first CSS framework with custom theming
- **Class Variance Authority (CVA)**: Type-safe component variants
- **Storybook**: Component documentation and development
- **Vite**: Build tool and development server

## Development Commands

### Essential Commands
```bash
# Start development server
npm run dev

# Run Storybook for component development
npm run storybook

# Build the library
npm run build

# Run linting
npm run lint

# Run type checking
npm run typecheck

# Auto-fix linting issues
npm run lint:fix

# Format code
npm run format
```

### Token Management
```bash
# Generate design tokens from Figma
npm run tokens:generate
```

### Release Process
```bash
# Create new version (patch/minor/major)
npx release-it patch
```

## Architecture

### Component Structure
Components follow a consistent pattern:
- Each component has its own directory: `src/components/ComponentName/`
- Structure: `ComponentName.tsx`, `ComponentName.stories.tsx`, `index.ts`
- Uses CVA for variant-based styling with design tokens
- Follows Radix UI patterns for accessibility

### Design Token System
- Design tokens are generated from Figma via `tools/build-tokens.cjs`
- Tokens are stored in `src/tokens.ts` (auto-generated - do not edit)
- Two themes: "Green Mode" and "Blue Mode"
- Token categories: color-background, color-text, color-border, color-shape, spacing, text-size, radius
**Apply Design Tokens**: Generated code includes design system variables that can be mapped to Tailwind utilities. Note that utility classes are available only for the respective property. For example, tokens for border color cannot be used for a background.

Use semantic design tokens instead of hardcoded colors:

```css
/* Correct: Use design tokens */
.bg-surface-primary          /* background-color: var(--color-surface-primary) */
.text-body-primary      /* color: var(--color-text-body-primary) */

/* Incorrect: Don't use hardcoded colors */
.bg-[#ffffff]
.text-[#1a3b31]
```

### Styling Approach
- Uses TailwindCSS v4 with custom preset
- No custom CSS files undless absolutely necessary
- Design tokens are mapped to Tailwind CSS variables
- Components use `class-variance-authority` for variant management
- Uses `tailwind-merge` for class merging
- Custom spacing, colors, and typography from design tokens

### Component Patterns
- Use `React.forwardRef` for ref forwarding
- Support `asChild` prop via Radix's `Slot` component
- Consistent variant props: `intent`, `size`, etc.
- Icon support via `@tabler/icons-react`
- Proper TypeScript interfaces extending HTML element props
- Any prop that is used as label should use a `React.Node` type, as consuming projects will need to pass i18n components.
- Any prop that specifies an Icon should use the `IconProp` type from `@/lib/utils`.

## Important Files

- `src/tokens.ts`: Auto-generated design tokens (do not edit)
- `src/tailwind-preset.css`: Tailwind configuration
- `tools/build-tokens.cjs`: Token generation script

## Development Guidelines

### Before Making Changes
Always run `npm run lint` and `npm run prettier` before committing changes.

### Component Development
- Follow existing component patterns in `src/components/`
- Use design tokens from `src/tokens.ts`
- Create comprehensive Storybook stories
- Ensure accessibility via Radix UI primitives

### Token Updates
If design tokens need updating, use `npm run tokens:generate` to regenerate from Figma. Never manually edit `src/tokens.ts`.
