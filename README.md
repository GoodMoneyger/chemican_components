# **@chemican/components** 🎨🚀

[![Release build](https://github.com/GoodMoneyger/chemican_components/actions/workflows/release.yml/badge.svg)](https://github.com/GoodMoneyger/chemican_components/actions/workflows/release.yml)

Our **React component library** built with **Radix UI, TailwindCSS, and TypeScript**. Designed for internal company use, it provides reusable, accessible, and customizable UI components.

**Please see the [live component library storybook here](https://goodmoneyger.github.io/chemican_components/).**

---

## **📦 Installation**

Install directly from GitHub:

```sh
npm install --save @chemican/components@git+ssh://git@github.com:GoodMoneyger/chemican_components.git#release-1.11.1
```

> [!NOTE]
> `#release-1.11.1` points to a specific version. You should set versions manually to avoid breaking changes.

---

## **🚀 Usage**

Read the more detailed setup guide [here](https://goodmoneyger.github.io/chemican_components/?path=/docs/design-system-installation--docs).

### **1️⃣ Import a Component**

Include the Chemican Tailwind preset in your CSS:

```css
@import "tailwindcss"
@import "@chemican/components/tailwind-preset-next.css"
// @import "@chemican/components/tailwind-preset.css" // Use this for non-Next.js projects instead
@source "../node_modules/@chemican/components";
```

Then, you can use the components in your React project:


```tsx
import { Button } from '@chemican/components';

function App() {
    return <Button intent="primary">Click Me</Button>;
}
```

### **2️⃣ Ensure TailwindCSS v4 is Set Up**

The Chemican Component library is meant to be used with TailwindCSS and it requires to import the Chemican Tailwind preset.

---

## **🛠 Development**

### **Run Storybook**

To see all available components:

```bash
npm run storybook
```

### **Build the Library**

```bash
npm run build
```

### Develop within consuming project

To develop the library within a consuming project, you can use the following command to link the library:

```bash
npm link
```

Then, in the consuming project, link the library:

```bash
npm link @chemican/components
```

This will allow you to make changes to the library and see them reflected in the consuming project, which is great for dynamic development.

> [!NOTE]
> Once you're done making changes, always make sure to open a PR and merge the changes back into the library and double-check that the consuming project still works as expected without linking.

---

### Development Guidelines

Please refer to the [CLAUDE.md](./CLAUDE.md) file for detailed development guidelines, including project structure, coding standards, and best practices. Even though written for Claude Code, these guidelines are applicable to all developers working on this project.

### Commit Message Rules

This project enforces commit message conventions using [Commitlint](https://commitlint.js.org/) and [Husky](https://typicode.github.io/husky/).

**Format:**
```
type(scope): Subject description
```

Multiple types or scopes can be comma-separated: `type1,type2(scope1,scope2): Subject`

**Rules:**
- **Type**: Required. One or more of the valid types below
- **Scope**: Required for `feat`, `fix`, `refactor`, `perf`, `test`, `style` — optional for others
- **Subject**: Must start with a capital letter
- **Max length**: 100 characters
- **No period**: Subject must not end with a period

**Valid types:**
`feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`, `release`

**Valid scopes:**
- Component names (auto-detected from `src/components/`): `button`, `input`, `select`, etc.
- General categories: `multiple`, `misc`, `general`, `tokens`, `dev`, `doc`, `config`, `ci`, `deps`, `release`, `util`, `assets`

**Examples:**
```bash
feat(button): Add loading state prop
fix(input,select): Update border styling
docs: Update installation instructions
chore(tokens): Regenerate design tokens from Figma
refactor(dialog): Simplify animation logic
```

**Setup:**

Commit hooks are automatically installed when you run `npm install` (via the `prepare` script). Please make sure that your setup has the hooks correctly installed to enforce the commit message rules.

### Vibe coding

This project is setup to work well in AI assisted workflows, specifically using Claude Code. This is achieved as follows:

- The project uses [CLAUDE.md](./CLAUDE.md) to provide context and guidelines for Claude Code.
- The project uses Tailwind which allows AI agents to easily define styles without needing to write complex CSS.
- The corresponding [Chemican Design Master Figma file](https://www.figma.com/design/f46iSbgpNKClOOIDRfG7AB/Master-v2.0-SDS%E7%AE%A1%E7%90%86%EF%BC%88JP_Products%EF%BC%89?node-id=16862-15964&m=dev) is setup to work well with Figma MCP server.
- The project uses convetional React and TypeScript as much as possible.

## **🔄 Release Process**

This library follows **Semantic Versioning**.
To release a new version:

```bash
npm run release
```

This will:

- **Bump the version** in `package.json`
- **Generate a changelog** in `CHANGELOG.md` from conventional commits
- **Create a Git tag (`vX.X.X`)** and a GitHub Release with the changelog
- **Trigger CI to push a new `release` branch**
- **Create a `release-X.X.X` tag for installing**

See [VERSIONING.md](./VERSIONING.md) for details on semantic versioning and when to use each bump type.

---
