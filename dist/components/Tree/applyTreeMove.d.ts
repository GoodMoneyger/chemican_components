import { TreeMoveEvent, TreeNodeKey } from './types';
export interface TreeMoveAccessors<N> {
    getKey: (node: N) => TreeNodeKey;
    /** Return undefined for leaf nodes so Groups and Items sharing a key stay apart. */
    getChildren: (node: N) => N[] | undefined;
    withChildren: (node: N, children: N[]) => N;
}
/**
 * Applies a `TreeMoveEvent` to nested data and returns the new nodes.
 * Untouched branches keep their identity.
 */
export declare const applyTreeMove: <N>(nodes: N[], event: TreeMoveEvent, accessors: TreeMoveAccessors<N>) => N[];
