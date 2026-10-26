import React from 'react';
import { cva } from 'class-variance-authority';
import { Slot } from 'radix-ui';

import type { Spacing } from '../../lib/utils';
import { cn } from '../../lib/utils';

const CardListContext = React.createContext(false);

export type CardListColumns = 1 | 2 | 3 | 4;

const cardListVariants = cva('grid grid-cols-1', {
  variants: {
    columns: {
      1: '',
      2: 'md:grid-cols-2',
      3: 'md:grid-cols-3',
      4: 'md:grid-cols-4',
    },
    gap: {
      xxxs: 'gap-xxxs',
      xxs: 'gap-xxs',
      xs: 'gap-xs',
      sm: 'gap-sm',
      md: 'gap-md',
      lg: 'gap-lg',
      xl: 'gap-xl',
      xxl: 'gap-xxl',
      xxxl: 'gap-xxxl',
    } satisfies Record<Spacing, string>,
  },
});

export interface CardListProps extends React.HTMLAttributes<HTMLUListElement> {
  /** Cards per row from `md` up. Below `md` there is always one column. */
  columns?: CardListColumns;
  /** Spacing token between the cards */
  gap?: Spacing;
}

/**
 * A list of `Card.Item`s. Each item then renders as a list item, and the
 * items of a row share its height.
 */
const CardList = React.forwardRef<HTMLUListElement, CardListProps>(
  ({ columns = 1, gap = 'xs', className, children, ...props }, ref) => (
    // WebKit drops the list semantics of a `ul` without list markers
    <ul
      ref={ref}
      role="list"
      className={cn(cardListVariants({ columns, gap }), className)}
      {...props}
    >
      <CardListContext.Provider value={true}>
        {children}
      </CardListContext.Provider>
    </ul>
  )
);

CardList.displayName = 'Card.List';

const cardItemVariants = cva(
  `bg-surface-primary border-surface-default text-body-primary px-md py-sm
  gap-xxs rounded-lg min-w-0 flex w-full flex-col border text-start`,
  {
    variants: {
      interactive: {
        true: `hover:bg-interactive-neutral-hover
        active:bg-interactive-neutral-active
        focus-visible:ring-interactive-focused cursor-pointer transition-colors
        focus-visible:ring-4 focus-visible:outline-none`,
      },
    },
  }
);

interface CardItemBaseProps
  extends Omit<
    React.HTMLAttributes<HTMLElement>,
    'title' | 'content' | keyof React.DOMAttributes<HTMLElement>
  > {
  /**
   * Renders the whole card as the child element, for example the app's
   * `Link`. Pass the child without content: the slots render inside it. The
   * title labels the child unless `aria-label` or `aria-labelledby` is set,
   * and the top row and `content` describe it unless `aria-describedby` is
   * set, so screen readers that announce a link by its name alone, such as
   * VoiceOver on iOS, still get them. Readers that also read a link's
   * content, such as NVDA in browse mode, then hear the top row and
   * `content` twice. No slot may hold interactive content, such as a button,
   * a `Tag` with `onRemove` or a `TextLink`: a link must not contain
   * interactive content. With a `button` child, prefer phrasing content in
   * `status` and `content`, such as text and `span`s: browsers render a
   * `div` or a heading inside a button, but the HTML is invalid and
   * assistive technology handles it unevenly.
   */
  asChild?: boolean;
  /** The element to render the card as, with `asChild` */
  children?: React.ReactElement;
  /**
   * Hover, active and focus styles and the pointer cursor, with `asChild`.
   * On by default, since the child is then a link or a button; a child that
   * is neither can opt out.
   */
  interactive?: boolean;
  /** Top left, for example a `StatusIndicator` or a `Tag` */
  status?: React.ReactNode;
  /** Top right, for example a label and a date */
  trailing?: React.ReactNode;
  /**
   * The main line. It wraps anywhere, so long file names stay inside. A
   * heading element passed here inherits the size, weight and line height,
   * and lets a list be navigated by headings.
   */
  title: React.ReactNode;
  /** Below the title, for the rows the app needs, such as tags and lines */
  content?: React.ReactNode;
  /**
   * Classes for the card. Inside `Card.List` the list item around the card
   * is the grid cell, which they do not reach.
   */
  className?: string;
}

type EventHandlers = Omit<
  React.DOMAttributes<HTMLElement>,
  'children' | 'dangerouslySetInnerHTML'
>;

export type CardItemProps = CardItemBaseProps &
  (
    | ({ asChild: true; children: React.ReactElement } & EventHandlers)
    | ({ asChild?: false; children?: never; interactive?: never } & {
        [K in keyof EventHandlers]?: never;
      })
  );

const isPresent = (node: React.ReactNode) =>
  node !== undefined &&
  node !== null &&
  node !== false &&
  node !== true &&
  node !== '';

const hasAria = (
  attrs: React.AriaAttributes | undefined,
  ...names: (keyof React.AriaAttributes)[]
) => names.some((name) => attrs?.[name] !== undefined);

/**
 * A table row shown as a card, for phones. The slots are `status` top left,
 * `trailing` top right, then `title` and `content`. Inside `Card.List` it
 * renders as a list item. A plain card is static and takes no event handler:
 * a card that opens something takes `asChild` with a link or a button.
 */
const CardItem = React.forwardRef<HTMLElement, CardItemProps>(
  (
    {
      asChild = false,
      children,
      interactive = asChild,
      status,
      trailing,
      title,
      content,
      className,
      ...props
    },
    ref
  ) => {
    const inList = React.useContext(CardListContext);
    const id = React.useId();
    const titleId = `${id}-title`;
    const topId = `${id}-top`;
    const contentId = `${id}-content`;
    const Comp = asChild ? Slot.Slot : 'div';
    const childProps = children?.props as React.AriaAttributes | undefined;
    const hasTop = isPresent(status) || isPresent(trailing);
    const hasContent = isPresent(content);
    const labelledByTitle =
      asChild &&
      !hasAria(props, 'aria-label', 'aria-labelledby') &&
      !hasAria(childProps, 'aria-label', 'aria-labelledby');
    const describedBy =
      asChild &&
      !hasAria(props, 'aria-describedby') &&
      !hasAria(childProps, 'aria-describedby')
        ? [hasTop && topId, hasContent && contentId]
            .filter(Boolean)
            .join(' ') || undefined
        : undefined;

    const card = (
      <Comp
        ref={ref as React.Ref<HTMLDivElement>}
        className={cn(
          cardItemVariants({ interactive: asChild && interactive }),
          className
        )}
        aria-labelledby={labelledByTitle ? titleId : undefined}
        aria-describedby={describedBy}
        {...props}
      >
        {hasTop && (
          <div
            id={describedBy ? topId : undefined}
            data-slot="top"
            className="gap-xs flex items-center"
          >
            {isPresent(status) && (
              <div data-slot="status" className="max-w-full shrink-0">
                {status}
              </div>
            )}
            {isPresent(trailing) && (
              <div
                data-slot="trailing"
                className="text-body-secondary min-w-0 text-sm leading-normal
                  ms-auto text-end"
              >
                {trailing}
              </div>
            )}
          </div>
        )}
        <div className="gap-xs flex flex-col">
          <div
            id={labelledByTitle ? titleId : undefined}
            data-slot="title"
            className="text-md min-w-0 font-bold leading-[1.2] wrap-anywhere"
          >
            {title}
          </div>
          {hasContent && (
            <div
              id={describedBy ? contentId : undefined}
              data-slot="content"
              className="min-w-0"
            >
              {content}
            </div>
          )}
        </div>
        {asChild && <Slot.Slottable>{children}</Slot.Slottable>}
      </Comp>
    );

    return inList ? <li className="flex">{card}</li> : card;
  }
);

CardItem.displayName = 'Card.Item';

export const Card = {
  Item: CardItem,
  List: CardList,
};
