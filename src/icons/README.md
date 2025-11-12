# Custom Icons

This directory exports custom icons from the `src/assets/icons/` folder.

**Important:** Only SVG files placed in `src/assets/icons/` are considered icons. Logos and other images should remain in `src/assets/img/`.

## Adding New Icons

Thanks to `vite-plugin-svgr`, you can easily add new SVG icons without creating wrapper components each time.

### Steps to Add a New Icon:

1. **Add your SVG file** to `src/assets/icons/` (not `src/assets/img/`)
   - Use snake_case for filenames (e.g., `my_icon.svg`)
   - Ensure the SVG has `viewBox="0 0 24 24"` for consistency
   - Use `fill="currentColor"` for colorable icons

2. **Add export to `src/icons/index.tsx`**

   ```typescript
   // Add to the "Custom icons from assets/icons/" section
   export const IconMyIcon = createIconComponent(
     require('../assets/icons/my_icon.svg?react').default
   );
   ```

   Or simply import at the top and add the export:

   ```typescript
   import MyIconSvg from '../assets/icons/my_icon.svg?react';
   // ... then in exports section:
   export const IconMyIcon = createIconComponent(MyIconSvg);
   ```

3. **Done!** Your icon is now available:

   ```typescript
   import { IconMyIcon } from '@chemican/components/tabler-icons';
   
   <IconMyIcon size={24} className="text-body-primary" />;
   ```

## Icon Guidelines

- **Naming**: Use `Icon` prefix for standard icons (e.g., `IconAdministrator`)
- **Size**: Icons should be designed at 24×24px
- **Color**: Use `currentColor` so icons inherit text color
- **Props**: All icons support standard SVG props:
  - `className` - For Tailwind classes
  - `style` - For inline styles
  - Other standard SVG attributes

## Current Custom Icons

- `IconAdministrator` - Admin/multi-user icon
- `IconMyFilter` - Filter with user icon
- `IconUserList` - User list icon

## Technical Details

- SVG files are processed by `vite-plugin-svgr`
- The `?react` suffix imports SVGs as React components
- Configuration in `vite.config.ts` with `icon: true` removes dimensions
- TypeScript types are provided via `vite-plugin-svgr/client`
