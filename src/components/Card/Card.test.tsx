import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';

import { Card } from './Card';

const slot = (name: string, text: string) =>
  new RegExp(`<div [^>]*data-slot="${name}"[^>]*>${text}</div>`);

describe('Card.List', () => {
  it('renders a list with one list item per card', () => {
    const html = renderToStaticMarkup(
      <Card.List>
        <Card.Item title="A" />
        <Card.Item title="B" />
      </Card.List>
    );

    expect(html).toMatch(/^<ul [^>]*role="list"/);
    expect(html.match(/<li\b/g)).toHaveLength(2);
  });

  it('lays the cards out in columns from md up, with the given gap', () => {
    const html = renderToStaticMarkup(
      <Card.List columns={3} gap="md">
        <Card.Item title="A" />
      </Card.List>
    );

    expect(html).toContain('grid-cols-1');
    expect(html).toContain('md:grid-cols-3');
    expect(html).toContain('gap-md');
  });
});

describe('Card.Item', () => {
  it('renders no list item outside Card.List', () => {
    const html = renderToStaticMarkup(<Card.Item title="A" />);

    expect(html).toMatch(/^<div/);
    expect(html).not.toContain('<li');
  });

  it('merges className onto the root', () => {
    const html = renderToStaticMarkup(
      <Card.Item title="A" className="mt-md" />
    );

    expect(html).toMatch(/^<div [^>]*class="[^"]*\bmt-md\b/);
  });

  it('renders the whole card as the child with asChild', () => {
    const html = renderToStaticMarkup(
      <Card.List>
        <Card.Item asChild title="A" content="C">
          <a href="/sds/1" />
        </Card.Item>
      </Card.List>
    );

    expect(html).toMatch(/^<ul [^>]*><li[^>]*><a [^>]*href="\/sds\/1"/);
    expect(html.match(/<a /g)).toHaveLength(1);
    expect(html).toMatch(slot('title', 'A'));
    expect(html).toMatch(slot('content', 'C'));
  });

  it('labels a card rendered as the child by its title', () => {
    const html = renderToStaticMarkup(
      <Card.Item asChild status="S" title="A">
        <a href="/sds/1" />
      </Card.Item>
    );

    const id = html.match(/aria-labelledby="([^"]+)"/)?.[1];
    expect(id).toBeDefined();
    expect(html).toMatch(
      new RegExp(`<div [^>]*id="${id}"[^>]*data-slot="title"[^>]*>A</div>`)
    );
  });

  it('keeps a label the app gives the card or its child', () => {
    const onCard = renderToStaticMarkup(
      <Card.Item asChild title="A" aria-label="Open A">
        <a href="/sds/1" />
      </Card.Item>
    );
    const onChild = renderToStaticMarkup(
      <Card.Item asChild title="A">
        <a href="/sds/1" aria-label="Open A" />
      </Card.Item>
    );

    for (const html of [onCard, onChild]) {
      expect(html).toContain('aria-label="Open A"');
      expect(html).not.toContain('aria-labelledby');
    }
  });

  it('labels no plain card', () => {
    const html = renderToStaticMarkup(<Card.Item title="A" />);

    expect(html).not.toContain('aria-labelledby');
    expect(html).not.toContain(' id=');
  });

  it('styles a card rendered as the child as interactive unless it opts out', () => {
    const link = renderToStaticMarkup(
      <Card.Item asChild title="A">
        <a href="/sds/1" />
      </Card.Item>
    );
    const button = renderToStaticMarkup(
      <Card.Item asChild title="A">
        <button type="button" />
      </Card.Item>
    );
    const staticChild = renderToStaticMarkup(
      <Card.Item asChild title="A" interactive={false}>
        <article />
      </Card.Item>
    );

    expect(link).toContain('hover:');
    expect(button).toContain('hover:');
    expect(staticChild).not.toContain('hover:');
  });

  it('styles no plain card as interactive', () => {
    const plain = renderToStaticMarkup(<Card.Item title="A" />);
    const requested = renderToStaticMarkup(
      // @ts-expect-error interactive takes asChild
      <Card.Item title="A" interactive />
    );

    expect(plain).not.toContain('hover:');
    expect(requested).not.toContain('hover:');
  });

  it('renders every slot it is given', () => {
    const html = renderToStaticMarkup(
      <Card.Item status="S" trailing="T" title="A" content="C" />
    );

    for (const [name, text] of [
      ['status', 'S'],
      ['trailing', 'T'],
      ['title', 'A'],
      ['content', 'C'],
    ]) {
      expect(html).toMatch(slot(name, text));
    }
  });

  it('renders no top row without a status or trailing text', () => {
    const html = renderToStaticMarkup(
      <Card.Item status="" trailing={false} title="A" />
    );

    expect(html).not.toContain('data-slot="top"');
    expect(html).not.toContain('data-slot="status"');
    expect(html).not.toContain('data-slot="trailing"');
  });
});
