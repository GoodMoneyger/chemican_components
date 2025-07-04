import { addons, types } from '@storybook/manager-api';
import React from 'react';
import { useParameter } from '@storybook/manager-api';

const ADDON_ID = 'radix-docs';
const PANEL_ID = `${ADDON_ID}/panel`;

const RadixDocsPanel = () => {
  const radixDocs = useParameter('radixDocs', null);

  return (
    <div style={{ padding: '16px' }}>
      {!radixDocs ? (
        <div style={{ color: '#666', fontSize: '14px' }}>
          No Radix UI documentation available for this component.
        </div>
      ) : (
        <>
          <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 'bold' }}>
            Radix UI Documentation
          </h3>
          <div style={{ marginBottom: '12px', fontSize: '14px' }}>
            <strong>Primitive:</strong> {radixDocs.primitive}
          </div>
          <a
            href={radixDocs.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              padding: '8px 16px',
              backgroundColor: '#0066cc',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '4px',
              fontSize: '14px',
            }}
          >
            View Radix UI {radixDocs.primitive} Docs →
          </a>
        </>
      )}
    </div>
  );
};

addons.register(ADDON_ID, () => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: 'Radix UI',
    render: RadixDocsPanel,
  });
});

