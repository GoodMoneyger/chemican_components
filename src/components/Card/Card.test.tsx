import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';

import { Card } from './Card';

describe('Card.List', () => {
  it('renders a list with one list item per card', () => {
    const html = renderToStaticMarkup(
      <Card.List>
        <Card.Item title="A" />
        <Card.Item title="B" />
      </Card.List>
    );

    expect(html).toMatch(/^<ul role="list" class="grid grid-cols-1 gap-xs"/);
    expect(html.match(/<li class="flex">/g)).toHaveLength(2);
  });
});

describe('Card.List', () => {
  it('lays the cards out in columns from md up, with the given gap', () => {
    const html = renderToStaticMarkup(
      <Card.List columns={3} gap="md">
        <Card.Item title="A" />
      </Card.List>
    );

    expect(html).toMatch(
      /^<ul role="list" class="grid grid-cols-1 md:grid-cols-3 gap-md"/
    );
  });
});

describe('Card.Item', () => {
  it('renders no list item outside Card.List', () => {
    const html = renderToStaticMarkup(<Card.Item title="A" />);

    expect(html).toMatch(/^<div/);
    expect(html).not.toContain('<li');
  });

  it('renders the whole card as the child with asChild', () => {
    const html = renderToStaticMarkup(
      <Card.List>
        <Card.Item asChild title="A" content="C">
          <a href="/sds/1" />
        </Card.Item>
      </Card.List>
    );

    expect(html).toMatch(
      /^<ul role="list"[^>]*><li class="flex"><a href="\/sds\/1" class="/
    );
    expect(html.match(/<a /g)).toHaveLength(1);
    expect(html).toContain('A');
    expect(html).toContain('C');
  });

  it('renders every slot it is given', () => {
    const html = renderToStaticMarkup(
      <Card.Item status="S" trailing="T" title="A" content="C" actions="X" />
    );

    for (const text of ['S', 'T', 'A', 'C', 'X']) {
      expect(html).toContain(`>${text}<`);
    }
  });
});
