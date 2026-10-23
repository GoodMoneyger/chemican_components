import React from 'react';
import { cva } from 'class-variance-authority';
import { Slot } from 'radix-ui';

import { cn } from '../../lib/utils';

const CardListContext = React.createContext(false);

export type CardListColumns = 1 | 2 | 3 | 4;

export type CardListGap =
  | 'xxxs'
  | 'xxs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xxl'
  | 'xxxl';

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
    },
  },
});

export interface CardListProps extends React.HTMLAttributes<HTMLUListElement> {
  /** Cards per row from `md` up. Below `md` there is always one column. */
  columns?: CardListColumns;
  /** Spacing token between the cards */
  gap?: CardListGap;
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
  gap-sm rounded-lg min-w-0 flex w-full border text-start`,
  {
    variants: {
      interactive: {
        true: `hover:bg-interactive-neutral-hover
        active:bg-interactive-neutral-active
        focus-visible:ring-interactive-focused cursor-pointer transition-colors
        focus:outline-none focus-visible:ring-2`,
      },
    },
  }
);

export interface CardItemProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title' | 'content'> {
  /**
   * Renders the whole card as the child element, for example the app's
   * `Link`, so it gets the hover, active and focus styles. Pass the child
   * without content; the slots render inside it.
   */
  asChild?: boolean;
  /** Top left, for example a `StatusIndicator` or a `Tag` */
  status?: React.ReactNode;
  /** Top right, for example a label and a date */
  trailing?: React.ReactNode;
  /** The main line. It wraps anywhere, so long file names stay inside. */
  title: React.ReactNode;
  /** Below the title, for the rows the app needs, such as tags and lines */
  content?: React.ReactNode;
  /**
   * Controls at the end of the card. They render inside it, so a card with
   * `asChild` cannot hold interactive actions: a link must not contain
   * buttons.
   */
  actions?: React.ReactNode;
}

const isPresent = (node: React.ReactNode) =>
  node !== undefined && node !== null && node !== false;

/**
 * A table row shown as a card, for phones. Inside `Card.List` it renders as
 * a list item.
 */
const CardItem = React.forwardRef<HTMLDivElement, CardItemProps>(
  (
    {
      asChild = false,
      status,
      trailing,
      title,
      content,
      actions,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const inList = React.useContext(CardListContext);
    const Comp = asChild ? Slot.Root : 'div';

    const card = (
      <Comp
        ref={ref}
        className={cn(cardItemVariants({ interactive: asChild }), className)}
        {...props}
      >
        <div className="gap-xxs min-w-0 flex flex-1 flex-col">
          {(isPresent(status) || isPresent(trailing)) && (
            <div className="gap-xs flex items-center">
              {isPresent(status) && (
                <div className="max-w-full shrink-0">{status}</div>
              )}
              {isPresent(trailing) && (
                <div
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
              className="text-md min-w-0 font-bold leading-[1.2] wrap-anywhere"
            >
              {title}
            </div>
            {isPresent(content) && <div className="min-w-0">{content}</div>}
          </div>
        </div>
        {isPresent(actions) && (
          <div className="gap-xxs flex shrink-0 items-center self-start">
            {actions}
          </div>
        )}
        {asChild ? <Slot.Slottable>{children}</Slot.Slottable> : children}
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
