import React from 'react';

import type { TokenCategory } from '../../tokens';
import { tokens } from '../../tokens';

const kebabToTitle = (str: string) =>
  str
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

export function Spacing() {
  const [spacingTokens, setSpacingTokens] = React.useState<
    { name: string; value: string; category: string }[]
  >([]);

  React.useEffect(() => {
    const spacings: {
      category: string;
      name: string;
      value: string;
    }[] = [];
    Object.entries(tokens).forEach(([, categories]) => {
      Object.entries(categories as Record<string, TokenCategory>).forEach(
        ([category, toks]: [string, TokenCategory]) => {
          if (category.includes('spacing')) {
            Object.entries(toks as Record<string, string>).forEach(
              ([name, value]: [string, string]) => {
                spacings.push({
                  category,
                  name,
                  value,
                });
              }
            );
          }
        }
      );
    });
    // Sort spacings by value size
    spacings.sort((a, b) => {
      const sizeA = parseFloat(a.value);
      const sizeB = parseFloat(b.value);
      return sizeA - sizeB;
    });
    setSpacingTokens(spacings);
  }, []);

  return (
    <div className="p-4">
      {Object.entries(
        spacingTokens.reduce(
          (acc, { category, name, value }) => {
            if (!acc[category]) acc[category] = [];
            acc[category].push({ name, value });
            return acc;
          },
          {} as Record<string, { name: string; value: string }[]>
        )
      ).map(([category, tokens]) => (
        <div key={category} className="mb-8">
          <h4 className="mb-2 text-lg font-semibold">
            {kebabToTitle(category)}
          </h4>
          <table className="min-w-full table-auto">
            <thead>
              <tr className="border-divider-default border-b">
                <th className="w-4/12 py-2 text-left">Token</th>
                <th className="w-3/12 py-2 text-left">Spacing Value</th>
                <th className="w-2/12 py-2 text-left">Visual</th>
                <th className="w-2/12 py-2 text-left">Pixels</th>
              </tr>
            </thead>
            <tbody>
              {tokens.map(({ name, value }) => (
                <tr key={name}>
                  <td className="py-1">
                    <pre
                      className="bg-surface-secondary inline rounded px-2 py-1
                        text-sm whitespace-pre-wrap"
                    >
                      {name}
                    </pre>
                  </td>
                  <td className="py-1">
                    <pre
                      className="bg-surface-secondary inline rounded px-2 py-1
                        text-sm whitespace-pre-wrap"
                    >
                      {value}
                    </pre>
                  </td>
                  <td className="py-1">
                    <pre
                      className="bg-surface-secondary inline rounded px-2 py-1
                        text-sm whitespace-pre-wrap"
                    >
                      {parseFloat(value) * 16}px
                    </pre>
                  </td>
                  <td className="py-1">
                    <div
                      className="bg-surface-secondary inline-block"
                      style={{ width: value, height: '1rem' }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}
