import React from 'react';

import { tokens, TokenCategory } from '../../tokens';

const kebabToTitle = (str: string) =>
  str
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

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
    Object.entries(tokens).forEach(([, categories]) => {
      Object.entries(categories as Record<string, TokenCategory>).forEach(
        ([category, toks]: [string, TokenCategory]) => {
          if (category.includes('color')) {
            Object.entries(toks as Record<string, string>).forEach(
              ([name, value]: [string, string]) => {
                // extract the value within var() if it exists
                const match = value.match(/var\(([^)]+)\)/);
                const rawValue = (match ? match[1] : value) as string;
                const primitiveValue =
                  tokens.Primitives?.other?.[rawValue] || rawValue;

                colors.push({
                  category,
                  name,
                  value: rawValue,
                  primitiveValue,
                });
              }
            );
          }
        }
      );
    });
    setColorTokens(colors);
  }, []);

  return (
    <div className="p-4">
      <h2 className="mb-4 text-xxl font-bold">Color Swatches</h2>
      <h3 className="mt-8 mb-4 text-xl font-bold">Tokens</h3>
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
          <h4 className="mb-2 text-lg font-semibold">
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
                    <pre className="inline rounded bg-surface-secondary px-2 py-1 text-sm whitespace-pre-wrap">
                      {name}
                    </pre>
                  </td>
                  <td className="py-1">
                    <div
                      className="h-8 w-16 rounded"
                      style={{ backgroundColor: `var(${name})` }}
                    />
                  </td>
                  <td className="py-1">
                    <pre className="inline rounded bg-surface-secondary px-2 py-1 text-sm whitespace-pre-wrap">
                      {value}
                    </pre>
                  </td>
                  <td className="py-1">
                    <pre className="inline rounded bg-surface-secondary px-2 py-1 text-sm whitespace-pre-wrap">
                      {primitiveValue}
                    </pre>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
      <h2 className="mt-8 mb-4 text-xl font-bold">Primitive Values</h2>
      <p className="mb-8 text-lg">
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
          {Object.entries(tokens.Primitives?.other || []).map(
            ([name, value]) => (
              <tr key={name}>
                <td className="py-1">
                  <pre className="inline rounded bg-surface-secondary px-2 py-1 text-sm whitespace-pre-wrap">
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
                  <pre className="inline rounded bg-surface-secondary px-2 py-1 text-sm whitespace-pre-wrap">
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
