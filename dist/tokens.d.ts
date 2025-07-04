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
    InteractivePrimaryDefault = "--token-color-background-interactive-primary-default",
    InteractivePrimaryHover = "--token-color-background-interactive-primary-hover",
    InteractiveDisabled = "--token-color-background-interactive-disabled",
    SurfacePrimary = "--token-color-background-surface-primary",
    SurfaceSecondary = "--token-color-background-surface-secondary",
    SurfaceTertiary = "--token-color-background-surface-tertiary",
    SurfaceScrimmed = "--token-color-background-surface-scrimmed",
    SurfaceAlert = "--token-color-background-surface-alert",
    SurfaceDisabled = "--token-color-background-surface-disabled",
    StatusSuccess = "--token-color-background-status-success",
    StatusAlert = "--token-color-background-status-alert",
    StatusWarning = "--token-color-background-status-warning",
    StatusNeutral = "--token-color-background-status-neutral",
    InteractiveNeutralHover = "--token-color-background-interactive-neutral-hover",
    StatusInprogress = "--token-color-background-status-inprogress",
    InteractivePrimaryActive = "--token-color-background-interactive-primary-active",
    InteractiveNeutralActive = "--token-color-background-interactive-neutral-active",
    InteractiveNeutralSelected = "--token-color-background-interactive-neutral-selected",
    InputDisabled = "--token-color-background-input-disabled",
    InputSelected = "--token-color-background-input-selected",
    InputDefault = "--token-color-background-input-default",
    SurfaceInprogress = "--token-color-background-surface-inprogress",
    SurfaceWarning = "--token-color-background-surface-warning",
    StatusQueue = "--token-color-background-status-queue",
    SurfaceSuccess = "--token-color-background-surface-success",
    InteractiveDangerDefault = "--token-color-background-interactive-danger-default",
    InteractiveDangerHover = "--token-color-background-interactive-danger-hover",
    InteractiveDangerActive = "--token-color-background-interactive-danger-active",
    InteractiveNeutralDefault = "--token-color-background-interactive-neutral-default",
    InteractiveNeutralDangerHover = "--token-color-background-interactive-neutral-danger-hover",
    InteractiveNeutralDangerActive = "--token-color-background-interactive-neutral-danger-active"
}
export declare enum ColorTextTokens {
    BodyPrimary = "--token-color-text-body-primary",
    BodySecondary = "--token-color-text-body-secondary",
    InteractiveInverse = "--token-color-text-interactive-inverse",
    InteractivePrimaryDefault = "--token-color-text-interactive-primary-default",
    InteractivePrimaryHover = "--token-color-text-interactive-primary-hover",
    BodyAlert = "--token-color-text-body-alert",
    BodyDisabled = "--token-color-text-body-disabled",
    InteractivePrimaryActive = "--token-color-text-interactive-primary-active",
    InteractiveDisabled = "--token-color-text-interactive-disabled",
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
    InteractiveDangerDefault = "--token-color-text-interactive-danger-default",
    BodyWarning = "--token-color-text-body-warning",
    BodySuccess = "--token-color-text-body-success",
    InteractiveHeavy = "--token-color-text-interactive-heavy",
    InteractiveDangerHover = "--token-color-text-interactive-danger-hover",
    InteractiveDangerActive = "--token-color-text-interactive-danger-active"
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
    SurfaceDefault = "--token-color-border-surface-default",
    InteractiveDanger = "--token-color-border-interactive-danger",
    SurfaceInfo = "--token-color-border-surface-info",
    SurfaceSuccess = "--token-color-border-surface-success",
    SurfaceWarning = "--token-color-border-surface-warning",
    SurfaceAlert = "--token-color-border-surface-alert"
}
export declare enum ColorShapeTokens {
    Primary = "--token-color-shape-primary",
    Light = "--token-color-shape-light",
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
    InteractivePrimaryDefault = "--token-color-shape-interactive-primary-default",
    InteractiveDisabled = "--token-color-shape-interactive-disabled",
    InteractiveInverse = "--token-color-shape-interactive-inverse",
    StatusInfo = "--token-color-shape-status-info",
    StatusSuccess = "--token-color-shape-status-success",
    StatusWarning = "--token-color-shape-status-warning",
    StatusAlert = "--token-color-shape-status-alert",
    AccentRedStrong = "--token-color-shape-accent-red-strong",
    AccentOrangeStrong = "--token-color-shape-accent-orange-strong",
    AccentYellowStrong = "--token-color-shape-accent-yellow-strong",
    AccentLimeStrong = "--token-color-shape-accent-lime-strong",
    AccentGreenStrong = "--token-color-shape-accent-green-strong",
    AccentCyanStrong = "--token-color-shape-accent-cyan-strong",
    AccentBlueStrong = "--token-color-shape-accent-blue-strong",
    AccentPurpleStrong = "--token-color-shape-accent-purple-strong",
    InteractiveHeavy = "--token-color-shape-interactive-heavy",
    InteractiveDangerDefault = "--token-color-shape-interactive-danger-default",
    InteractivePrimaryHover = "--token-color-shape-interactive-primary-hover",
    InteractivePrimaryActive = "--token-color-shape-interactive-primary-active",
    InteractiveDangerHover = "--token-color-shape-interactive-danger-hover",
    InteractiveDangerActive = "--token-color-shape-interactive-danger-active",
    AccentGrayStrong = "--token-color-shape-accent-gray-strong",
    InteractivePrimarySelected = "--token-color-shape-interactive-primary-selected"
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
    'Green Mode': ThemeTokens;
    'Blue Mode': ThemeTokens;
    'Primitives': PrimitiveTokens;
}
export declare const tokens: Tokens;
