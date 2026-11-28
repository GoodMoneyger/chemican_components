import { default as React } from 'react';
import { Spacing } from '../../lib/utils';
export type CardListColumns = 1 | 2 | 3 | 4;
export interface CardListProps extends React.HTMLAttributes<HTMLUListElement> {
    /** Cards per row from `md` up. Below `md` there is always one column. */
    columns?: CardListColumns;
    /** Spacing token between the cards */
    gap?: Spacing;
}
interface CardItemBaseProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title' | 'content' | keyof React.DOMAttributes<HTMLElement>> {
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
type EventHandlers = Omit<React.DOMAttributes<HTMLElement>, 'children' | 'dangerouslySetInnerHTML'>;
export type CardItemProps = CardItemBaseProps & (({
    asChild: true;
    children: React.ReactElement;
} & EventHandlers) | ({
    asChild?: false;
    children?: never;
    interactive?: never;
} & {
    [K in keyof EventHandlers]?: never;
}));
export declare const Card: {
    Item: React.ForwardRefExoticComponent<CardItemProps & React.RefAttributes<HTMLElement>>;
    List: React.ForwardRefExoticComponent<CardListProps & React.RefAttributes<HTMLUListElement>>;
};
export {};
