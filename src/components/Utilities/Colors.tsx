import React from 'react';

import { cn } from '../../utils';
import type { TokenCategory } from '../../tokens';
import { tokens } from '../../tokens';

const kebabToTitle = (str: string) =>
  str
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

// Function to calculate relative luminance of a color
const getLuminance = (color: string): number => {
  // Convert hex to RGB
  const hex = color.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16) / 255;
  const g = parseInt(hex.substr(2, 2), 16) / 255;
  const b = parseInt(hex.substr(4, 2), 16) / 255;

  // Apply gamma correction
  const sRGBtoLin = (colorChannel: number) => {
    if (colorChannel <= 0.03928) {
      return colorChannel / 12.92;
    } else {
      return Math.pow((colorChannel + 0.055) / 1.055, 2.4);
    }
  };

  const rLin = sRGBtoLin(r);
  const gLin = sRGBtoLin(g);
  const bLin = sRGBtoLin(b);

  // Calculate relative luminance
  return 0.2126 * rLin + 0.7152 * gLin + 0.0722 * bLin;
};

// Function to check if a color needs a border (low contrast against white)
const needsBorder = (color: string): boolean => {
  if (!color || !color.startsWith('#')) return true; // Default to border if invalid color

  const colorLuminance = getLuminance(color);
  const whiteLuminance = 1; // White has luminance of 1

  // Calculate contrast ratio
  const contrastRatio = (whiteLuminance + 0.05) / (colorLuminance + 0.05);

  // If contrast ratio is less than 1.5, we need a border
  return contrastRatio < 1.5;
};

// Function to generate main Tailwind utility classes for a token (simplified)
const getTailwindClasses = (tokenName: string): string[] => {
  const classes: string[] = [];

  // Remove --token- prefix to get the semantic name
  const semanticName = tokenName.replace('--token-', '');

  if (semanticName.startsWith('color-background-')) {
    const bgName = semanticName.replace('color-background-', '');
    classes.push(`bg-${bgName}`);
  } else if (semanticName.startsWith('color-text-')) {
    const textName = semanticName.replace('color-text-', '');
    classes.push(`text-${textName}`);
  } else if (semanticName.startsWith('color-border-')) {
    const borderName = semanticName.replace('color-border-', '');
    classes.push(`border-${borderName}`, `ring-${borderName}`);
  } else if (semanticName.startsWith('spacing-')) {
    const spacingName = semanticName.replace('spacing-', '');
    classes.push(`p-${spacingName}`, `gap-${spacingName}`);
  } else if (semanticName.startsWith('text-size-')) {
    const sizeName = semanticName.replace('text-size-', '');
    classes.push(`text-${sizeName}`);
  } else if (semanticName.startsWith('radius-')) {
    const radiusName = semanticName.replace('radius-', '');
    classes.push(`rounded-${radiusName}`);
  }

  return classes.filter(Boolean);
};

const Tooltip = ({
  children,
  content,
  show,
}: {
  children: React.ReactNode;
  content: string;
  show: boolean;
}) => {
  return (
    <div className="relative w-fit">
      {children}
      {show && (
        <div
          className="mb-xxs absolute bottom-full left-1/2 z-10 -translate-x-1/2
            transform"
        >
          <div
            className="sb-unstyled bg-surface-scrimmed px-xxs py-xxxs
              text-body-inverse rounded text-sm whitespace-nowrap opacity-80"
          >
            {content}
            <div
              className="h-0 w-0 absolute top-full left-1/2 -translate-x-1/2
                transform border-t-[3px] border-r-[3px] border-l-[3px]
                border-transparent"
              style={{
                borderTopColor:
                  'var(--token-color-background-surface-scrimmed)',
              }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};

const CopyableValue = ({
  text,
  tooltip,
  className = '',
}: {
  text: string;
  tooltip: string;
  className?: string;
}) => {
  const [copied, setCopied] = React.useState(false);
  const [showTooltip, setShowTooltip] = React.useState(false);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error('Failed to copy to clipboard:', err);
    }
  };

  const handleMouseEnter = () => {
    timeoutRef.current = setTimeout(() => {
      setShowTooltip(true);
    }, 500);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setShowTooltip(false);
  };

  return (
    <Tooltip
      content={copied ? 'Copied!' : `Click to copy ${tooltip}`}
      show={showTooltip}
    >
      <button
        onClick={handleCopy}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={cn(
          `px-xs py-xxxs hover:bg-surface-secondary rounded-xs cursor-pointer
          text-left transition-colors ${className}`
        )}
      >
        <code className="break-all">{text}</code>
      </button>
    </Tooltip>
  );
};

const TailwindClass = ({ className }: { className: string }) => {
  const [copied, setCopied] = React.useState(false);
  const [showTooltip, setShowTooltip] = React.useState(false);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(className); // Copy without the dot
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error('Failed to copy to clipboard:', err);
    }
  };

  const handleMouseEnter = () => {
    timeoutRef.current = setTimeout(() => {
      setShowTooltip(true);
    }, 500);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setShowTooltip(false);
  };

  return (
    <Tooltip
      content={copied ? 'Copied!' : 'Click to copy Tailwind class'}
      show={showTooltip}
    >
      <button
        onClick={handleCopy}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="px-xs py-xxxs text-body-secondary hover:bg-surface-secondary
          rounded-xs text-sm cursor-pointer text-left transition-colors"
      >
        .<code>{className}</code>
      </button>
    </Tooltip>
  );
};

const TokenRow = ({
  name,
  value,
  primitiveValue,
  showPrimitive = true,
}: {
  name: string;
  value: string;
  primitiveValue: string;
  showPrimitive?: boolean;
}) => {
  const showBorder = needsBorder(primitiveValue);
  const tailwindClasses = getTailwindClasses(name);

  return (
    <div
      className="gap-md border-divider-default py-sm grid
        grid-cols-[auto_2fr_1fr_1fr] items-center border-b last:border-b-0"
    >
      <div
        className={`h-8 w-8 rounded-sm flex-shrink-0
          ${showBorder ? 'border-divider-default border' : ''}`}
        style={{ backgroundColor: `var(${value})` }}
      />

      <div className="min-w-0">
        <div className="mb-xxs">
          <CopyableValue
            text={name}
            tooltip="token name"
            className="text-body-primary text-sm font-medium w-fit"
          />
        </div>
        {tailwindClasses.length > 0 && (
          <div className="gap-xs flex flex-wrap">
            {tailwindClasses.map((className, index) => (
              <TailwindClass key={index} className={className} />
            ))}
          </div>
        )}
      </div>

      {showPrimitive ? (
        <div className="min-w-0">
          <CopyableValue
            text={value}
            tooltip="CSS variable"
            className="text-body-secondary text-sm w-fit"
          />
        </div>
      ) : (
        <div></div>
      )}

      <div className="min-w-0">
        <CopyableValue
          text={primitiveValue}
          tooltip="hex value"
          className="text-body-secondary text-sm w-fit"
        />
      </div>
    </div>
  );
};

export function Colors() {
  const [themeTokens, setThemeTokens] = React.useState<
    Record<
      string,
      Record<string, { name: string; value: string; primitiveValue: string }[]>
    >
  >({});

  React.useEffect(() => {
    const themes: Record<
      string,
      Record<string, { name: string; value: string; primitiveValue: string }[]>
    > = {};

    Object.entries(tokens).forEach(([theme, categories]) => {
      if (theme === 'Primitives') return; // Skip primitives, handle separately

      themes[theme] = {};

      Object.entries(categories as Record<string, TokenCategory>).forEach(
        ([category, toks]: [string, TokenCategory]) => {
          if (category.includes('color') && themes[theme]) {
            themes[theme][category] = [];

            Object.entries(toks as Record<string, string>).forEach(
              ([name, value]: [string, string]) => {
                if (themes[theme] && themes[theme][category]) {
                  // extract the value within var() if it exists
                  const match = value.match(/var\(([^)]+)\)/);
                  const rawValue = (match ? match[1] : value) as string;
                  const primitiveValue =
                    tokens.Primitives?.other?.[rawValue] || rawValue;

                  themes[theme][category].push({
                    name,
                    value: rawValue,
                    primitiveValue,
                  });
                }
              }
            );
          }
        }
      );
    });

    setThemeTokens(themes);
  }, []);

  return (
    <div className="p-md max-w-7xl mx-auto">
      {Object.entries(themeTokens).map(([theme, categories]) => (
        <div key={theme} className="mb-xxxl">
          <h2
            className="sb-unstyled mb-lg border-divider-default pb-sm text-xxl
              mt-10 font-bold border-b"
          >
            {kebabToTitle(theme)} Theme
          </h2>

          {Object.entries(categories).map(([category, tokens]) => (
            <div key={category} className="mb-xl">
              <h3
                className="sb-unstyled mb-md text-body-primary mt-10 text-xl
                  font-semibold"
              >
                {kebabToTitle(category)}
              </h3>

              <div
                className="border-divider-default bg-surface-primary rounded-md
                  overflow-hidden border"
              >
                {/* Header */}
                <div
                  className="sb-unstyled gap-md border-divider-default
                    bg-surface-secondary px-md py-sm grid
                    grid-cols-[auto_2fr_1fr_1fr] items-center border-b"
                >
                  <div className="text-body-secondary text-sm font-medium">
                    Swatch
                  </div>
                  <div className="text-body-secondary text-sm font-medium">
                    Token Name and Tailwind Classes
                  </div>
                  <div className="text-body-secondary text-sm font-medium">
                    CSS Variable
                  </div>
                  <div className="text-body-secondary text-sm font-medium">
                    Hex Value
                  </div>
                </div>

                {/* Rows */}
                <div className="px-md">
                  {tokens.map(({ name, value, primitiveValue }) => (
                    <TokenRow
                      key={name}
                      name={name}
                      value={value}
                      primitiveValue={primitiveValue}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}

      <div className="mt-xxxl">
        <h2 className="mb-md text-xl font-bold">Primitive Values</h2>
        <p className="mb-lg text-body-secondary">
          The following list shows all primitive values that are used in the
          color tokens. These values are used to define the color tokens and are
          referenced in the color token definitions. Usually, you should not use
          these values in your components directly, but rather use the color
          tokens.
        </p>

        <div
          className="border-divider-default bg-surface-primary rounded-md
            overflow-hidden border"
        >
          {/* Header */}
          <div
            className="gap-md border-divider-default bg-surface-secondary px-md
              py-sm grid grid-cols-[auto_2fr_1fr_1fr] items-center border-b"
          >
            <div className="text-body-secondary text-xs font-medium">
              Swatch
            </div>
            <div className="text-body-secondary text-xs font-medium">
              Token Name
            </div>
            <div className="text-body-secondary text-xs font-medium"></div>
            <div className="text-body-secondary text-xs font-medium">
              Hex Value
            </div>
          </div>

          {/* Rows */}
          <div className="px-md">
            {Object.entries(tokens.Primitives?.other || []).map(
              ([name, value]) => (
                <TokenRow
                  key={name}
                  name={name}
                  value={name}
                  primitiveValue={value}
                  showPrimitive={false}
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
