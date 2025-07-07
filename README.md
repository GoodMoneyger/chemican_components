# **@chemican/components** 🎨🚀

Our **React component library** built with **Radix UI, TailwindCSS, and TypeScript**. Designed for internal company use, it provides reusable, accessible, and customizable UI components.

**Please see the [live component library storybook here](https://goodmoneyger.github.io/chemican_components/).**

---

## **📦 Installation**

Since this library is private, install it directly from GitHub:

```json
"dependencies": {
  "@chemican/components": "git+ssh://git@github.com:GoodMoneyger/chemican_components.git#release-0.0.13"
}
```

> **Note:** Replace `release-1.0.0` with the latest release tag and always use a specific version to avoid breaking changes.

---

## **🚀 Usage**

### **1️⃣ Import a Component**

```tsx
import { Button } from '@chemican/components';

function App() {
    return <Button intent="primary">Click Me</Button>;
}
```

### **2️⃣ Ensure TailwindCSS v4 is Set Up**

The Chemican Component library is meant to be used with TailwindCSS and it requires to import the Chemican Tailwind preset.

More infos to follow.

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

> **Note:** Once you're done making changes, always make sure to open a PR and merge the changes back into the library and double-check that the consuming project still works as expected without linking.

---

## **🔄 Release Process**

This library follows **Semantic Versioning**.
To release a new version:

```bash
npx release-it patch  # (or minor/major)
```

This will:

- **Bump the version** in `package.json`
- **Create a Git tag (`vX.X.X`)**
- **Trigger CI to push a new `release` branch**
- **Create a `release-X.X.X` tag for installing**

---

## **📌 Features**

✅ **Flexible & Accessible** – Powered by Radix UI  
✅ **TailwindCSS Styling** – Shared Tailwind preset  
✅ **TypeScript Support** – Fully typed components  
✅ **Storybook Integration** – Interactive documentation  
✅ **Optimized with Vite** – Fast builds
