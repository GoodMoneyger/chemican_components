export interface TokenCategory {
    [token: string]: string;
}
export interface ThemeTokens {
    'color-background': TokenCategory;
    'color-text': TokenCategory;
    'color-border': TokenCategory;
    'color-shape': TokenCategory;
    'spacing': TokenCategory;
    'text-size': TokenCategory;
    'radius': TokenCategory;
}
export interface PrimitiveTokens {
    'other': TokenCategory;
}
export declare enum ColorBackgroundTokens {
    SurfaceSecondary = "--token-color-background-surface-secondary",
    SurfaceSuccess = "--token-color-background-surface-success",
    StatusSuccess = "--token-color-background-status-success",
    StatusAlert = "--token-color-background-status-alert",
    StatusWarning = "--token-color-background-status-warning",
    StatusNeutral = "--token-color-background-status-neutral",
    StatusInProgress = "--token-color-background-status-inProgress",
    SurfaceInProgress = "--token-color-background-surface-inProgress",
    SurfaceWarning = "--token-color-background-surface-warning",
    StatusQueue = "--token-color-background-status-queue",
    InteractiveTertiaryDisabled = "--token-color-background-interactive-tertiary-disabled",
    InteractivePlainSelected = "--token-color-background-interactive-plain-selected",
    InputDisabled = "--token-color-background-input-disabled",
    InputSelected = "--token-color-background-input-selected",
    InputDefault = "--token-color-background-input-default",
    InteractivePlainDisabled = "--token-color-background-interactive-plain-disabled",
    InteractivePrimaryDefault = "--token-color-background-interactive-primary-default",
    InteractivePrimaryHover = "--token-color-background-interactive-primary-hover",
    InteractivePrimaryDisabled = "--token-color-background-interactive-primary-disabled",
    SurfacePrimary = "--token-color-background-surface-primary",
    SurfaceTertiary = "--token-color-background-surface-tertiary",
    SurfaceScrimmed = "--token-color-background-surface-scrimmed",
    SurfaceAlert = "--token-color-background-surface-alert",
    SurfaceDisabled = "--token-color-background-surface-disabled",
    InteractiveSecondaryDefault = "--token-color-background-interactive-secondary-default",
    InteractiveSecondaryHover = "--token-color-background-interactive-secondary-hover",
    InteractiveTertiaryHover = "--token-color-background-interactive-tertiary-hover",
    InteractivePlainHover = "--token-color-background-interactive-plain-hover",
    InteractiveTertiaryDefault = "--token-color-background-interactive-tertiary-default",
    InteractiveSecondaryDisabled = "--token-color-background-interactive-secondary-disabled",
    InteractivePrimaryActive = "--token-color-background-interactive-primary-active",
    InteractiveSecondaryActive = "--token-color-background-interactive-secondary-active",
    InteractiveTertiaryActive = "--token-color-background-interactive-tertiary-active",
    InteractivePlainActive = "--token-color-background-interactive-plain-active"
}
export declare enum ColorTextTokens {
    AccentRedSoft = "--token-color-text-accent-red-soft",
    AccentRedStrong = "--token-color-text-accent-red-strong",
    AccentOrangeSoft = "--token-color-text-accent-orange-soft",
    AccentOrangeStrong = "--token-color-text-accent-orange-strong",
    AccentYellowSoft = "--token-color-text-accent-yellow-soft",
    AccentYellowStrong = "--token-color-text-accent-yellow-strong",
    AccentLimeSoft = "--token-color-text-accent-lime-soft",
    AccentLimeStrong = "--token-color-text-accent-lime-strong",
    AccentGreenSoft = "--token-color-text-accent-green-soft",
    AccentGreenStrong = "--token-color-text-accent-green-strong",
    AccentGraySoft = "--token-color-text-accent-gray-soft",
    AccentGrayStrong = "--token-color-text-accent-gray-strong",
    AccentCyanSoft = "--token-color-text-accent-cyan-soft",
    AccentCyanStrong = "--token-color-text-accent-cyan-strong",
    AccentBlueSoft = "--token-color-text-accent-blue-soft",
    AccentBlueStrong = "--token-color-text-accent-blue-strong",
    AccentPurpleSoft = "--token-color-text-accent-purple-soft",
    AccentPurpleStrong = "--token-color-text-accent-purple-strong",
    BodyInverse = "--token-color-text-body-inverse",
    BodyPrimary = "--token-color-text-body-primary",
    BodySecondary = "--token-color-text-body-secondary",
    InteractiveInverse = "--token-color-text-interactive-inverse",
    InteractiveDefault = "--token-color-text-interactive-default",
    InteractiveHover = "--token-color-text-interactive-hover",
    InteractiveVisited = "--token-color-text-interactive-visited",
    BodyAlert = "--token-color-text-body-alert",
    BodyDisabled = "--token-color-text-body-disabled",
    InteractivePrimaryDefault = "--token-color-text-interactive-primary-default",
    InteractiveSecondaryHover = "--token-color-text-interactive-secondary-hover",
    InteractiveSecondaryDisabled = "--token-color-text-interactive-secondary-disabled",
    InteractiveSecondaryDefault = "--token-color-text-interactive-secondary-default",
    InteractivePrimaryDisabled = "--token-color-text-interactive-primary-disabled",
    InteractiveTertiaryDefault = "--token-color-text-interactive-tertiary-default",
    InteractiveTertiaryDisabled = "--token-color-text-interactive-tertiary-disabled",
    InteractiveActive = "--token-color-text-interactive-active",
    InteractiveSecondaryActive = "--token-color-text-interactive-secondary-active",
    InteractiveDisabled = "--token-color-text-interactive-disabled"
}
export declare enum ColorBorderTokens {
    InputDefault = "--token-color-border-input-default",
    InputFocused = "--token-color-border-input-focused",
    InputSelected = "--token-color-border-input-selected",
    InputAlert = "--token-color-border-input-alert",
    InputDisabled = "--token-color-border-input-disabled",
    DividerDefault = "--token-color-border-divider-default",
    InteractiveMuted = "--token-color-border-interactive-muted",
    InteractiveLight = "--token-color-border-interactive-light",
    SurfaceDefault = "--token-color-border-surface-default"
}
export declare enum ColorShapeTokens {
    StatusInfo = "--token-color-shape-status-info",
    StatusSuccess = "--token-color-shape-status-success",
    StatusWarning = "--token-color-shape-status-warning",
    StatusAlert = "--token-color-shape-status-alert",
    Primary = "--token-color-shape-primary",
    Subtle = "--token-color-shape-subtle",
    Secondary = "--token-color-shape-secondary",
    Inverse = "--token-color-shape-inverse",
    AccentRedPale = "--token-color-shape-accent-red-pale",
    AccentRedSoft = "--token-color-shape-accent-red-soft",
    AccentOrangePale = "--token-color-shape-accent-orange-pale",
    AccentOrangeSoft = "--token-color-shape-accent-orange-soft",
    AccentYellowPale = "--token-color-shape-accent-yellow-pale",
    AccentYellowSoft = "--token-color-shape-accent-yellow-soft",
    AccentLimePale = "--token-color-shape-accent-lime-pale",
    AccentLimeSoft = "--token-color-shape-accent-lime-soft",
    AccentGreenPale = "--token-color-shape-accent-green-pale",
    AccentGreenSoft = "--token-color-shape-accent-green-soft",
    AccentCyanPale = "--token-color-shape-accent-cyan-pale",
    AccentCyanSoft = "--token-color-shape-accent-cyan-soft",
    AccentBluePale = "--token-color-shape-accent-blue-pale",
    AccentBlueSoft = "--token-color-shape-accent-blue-soft",
    AccentPurplePale = "--token-color-shape-accent-purple-pale",
    AccentPurpleSoft = "--token-color-shape-accent-purple-soft",
    AccentGrayPale = "--token-color-shape-accent-gray-pale",
    AccentGraySoft = "--token-color-shape-accent-gray-soft",
    Tertiary = "--token-color-shape-tertiary",
    InteractiveDefault = "--token-color-shape-interactive-default",
    InteractiveDisabled = "--token-color-shape-interactive-disabled",
    InteractiveInverse = "--token-color-shape-interactive-inverse"
}
export declare enum SpacingTokens {
    Xxs = "--token-spacing-xxs",
    Xs = "--token-spacing-xs",
    Sm = "--token-spacing-sm",
    Md = "--token-spacing-md",
    Lg = "--token-spacing-lg",
    Xl = "--token-spacing-xl",
    Xxl = "--token-spacing-xxl",
    Xxxl = "--token-spacing-xxxl",
    Xxxs = "--token-spacing-xxxs"
}
export declare enum TextSizeTokens {
    Xxxl = "--token-text-size-xxxl",
    Xxl = "--token-text-size-xxl",
    Xl = "--token-text-size-xl",
    Lg = "--token-text-size-lg",
    Md = "--token-text-size-md",
    Sm = "--token-text-size-sm",
    Xs = "--token-text-size-xs"
}
export declare enum RadiusTokens {
    Sm = "--token-radius-sm",
    Md = "--token-radius-md",
    Lg = "--token-radius-lg",
    Max = "--token-radius-max",
    Xs = "--token-radius-xs"
}
export interface Tokens {
    'Light': ThemeTokens;
    'Primitives': PrimitiveTokens;
}
export declare const tokens: Tokens;
