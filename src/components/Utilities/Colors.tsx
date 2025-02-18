import React from 'react';

import tokens from '../../tokens.json';

const kebabToTitle = (str: string) =>
  str
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

type Token = {
  [themeName: string]: {
    [categoryName in
      | 'color-text'
      | 'color-background'
      | 'color-border'
      | 'spacing'
      | 'text-size'
      | 'radius'
      | 'other']?: {
      // <-- Make categories optional
      [tokenName: string]: string;
    };
  };
};

const tokenObj: Token = tokens;

export function Colors() {
  const [colorTokens, setColorTokens] = React.useState<
    { name: string; value: string; primitiveValue: string; category: string }[]
  >([]);

  React.useEffect(() => {
    const colors: {
      category: string;
      name: string;
      value: string;
      primitiveValue: string;
    }[] = [];
    Object.entries(tokenObj).forEach(([, categories]) => {
      Object.entries(categories).forEach(([category, tokens]) => {
        if (category.includes('color')) {
          Object.entries(tokens).forEach(([name, value]) => {
            // extract the value within var() if it exists
            const match = value.match(/var\(([^)]+)\)/);
            const rawValue = match ? match[1] : value;
            const primitiveValue =
              tokenObj.Primitives?.other?.[rawValue] || rawValue;

            colors.push({ category, name, value: rawValue, primitiveValue });
          });
        }
      });
    });
    setColorTokens(colors);
  }, []);

  return (
    <div className="p-4">
      <h2 className="mb-4 text-size-xxl font-bold">Color Swatches</h2>
      <p className="mb-4">
        Please note that utility classes are available only for the respective
        property. For example, tokens for border color cannot be used for a
        background.
        <br />➡ If you believe a color is missing, please notify the design
        team and <b>do not use unfitting tokens</b>.
      </p>
      <h3 className="mt-8 mb-4 text-size-xl font-bold">Tokens</h3>
      {Object.entries(
        colorTokens.reduce(
          (acc, { category, name, value, primitiveValue }) => {
            if (!acc[category]) acc[category] = [];
            acc[category].push({ name, value, primitiveValue });
            return acc;
          },
          {} as Record<
            string,
            { name: string; value: string; primitiveValue: string }[]
          >
        )
      ).map(([category, tokens]) => (
        <div key={category} className="mb-8">
          <h4 className="text-lg mb-2 font-semibold">
            {kebabToTitle(category)}
          </h4>
          <table className="min-w-full table-auto">
            <thead>
              <tr className="border-b border-divider-default">
                <th className="w-4/12 py-2 text-left">Token</th>
                <th className="w-1/12 py-2 text-left">Swatch</th>
                <th className="w-3/12 py-2 text-left">Primitive</th>
                <th className="w-3/12 py-2 text-left">Color Value</th>
              </tr>
            </thead>
            <tbody>
              {tokens.map(({ name, value, primitiveValue }) => (
                <tr key={name}>
                  <td className="py-1">
                    <pre className="inline rounded bg-surface-secondary px-2 py-1 text-size-sm whitespace-pre-wrap">
                      {name}
                    </pre>
                  </td>
                  <td className="py-1">
                    <div
                      className="h-8 w-16 rounded"
                      style={{ backgroundColor: `var(${value})` }}
                    />
                  </td>
                  <td className="py-1">
                    <pre className="inline rounded bg-surface-secondary px-2 py-1 text-size-sm whitespace-pre-wrap">
                      {value}
                    </pre>
                  </td>
                  <td className="py-1">
                    <pre className="inline rounded bg-surface-secondary px-2 py-1 text-size-sm whitespace-pre-wrap">
                      {primitiveValue}
                    </pre>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
      <h2 className="mt-8 mb-4 text-size-xl font-bold">Primitive Values</h2>
      <p className="mb-8 text-size-lg">
        The following table lists all primitive values that are used in the
        color tokens. These values are used to define the color tokens and are
        referenced in the color token definitions. Usually, you should not use
        these values in your components directly, but rather use the color
        tokens.
      </p>
      <table className="min-w-full table-auto">
        <thead>
          <tr className="border-b border-divider-default">
            <th className="w-1/3 py-2 text-left">Token</th>
            <th className="w-1/3 py-2 text-left">Swatch</th>
            <th className="w-1/3 py-2 text-left">Primitive Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(tokenObj.Primitives?.other || []).map(
            ([name, value]) => (
              <tr key={name}>
                <td className="py-1">
                  <pre className="inline rounded bg-surface-secondary px-2 py-1 text-size-sm whitespace-pre-wrap">
                    {name}
                  </pre>
                </td>
                <td className="py-1">
                  <div
                    className="h-8 w-16 rounded"
                    style={{ backgroundColor: value }}
                  />
                </td>
                <td className="py-1">
                  <pre className="inline rounded bg-surface-secondary px-2 py-1 text-size-sm whitespace-pre-wrap">
                    {value}
                  </pre>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}
