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
    InputDefault = "--token-color-background-input-default",
    InputDisabled = "--token-color-background-input-disabled",
    InputSelected = "--token-color-background-input-selected",
    InteractiveDangerActive = "--token-color-background-interactive-danger-active",
    InteractiveDangerDefault = "--token-color-background-interactive-danger-default",
    InteractiveDangerHover = "--token-color-background-interactive-danger-hover",
    InteractiveDisabled = "--token-color-background-interactive-disabled",
    InteractiveNeutralActive = "--token-color-background-interactive-neutral-active",
    InteractiveNeutralDangerActive = "--token-color-background-interactive-neutral-danger-active",
    InteractiveNeutralDangerHover = "--token-color-background-interactive-neutral-danger-hover",
    InteractiveNeutralDefault = "--token-color-background-interactive-neutral-default",
    InteractiveNeutralHover = "--token-color-background-interactive-neutral-hover",
    InteractiveNeutralSelected = "--token-color-background-interactive-neutral-selected",
    InteractivePrimaryActive = "--token-color-background-interactive-primary-active",
    InteractivePrimaryDefault = "--token-color-background-interactive-primary-default",
    InteractivePrimaryHover = "--token-color-background-interactive-primary-hover",
    StatusAlert = "--token-color-background-status-alert",
    StatusInprogress = "--token-color-background-status-inprogress",
    StatusNeutral = "--token-color-background-status-neutral",
    StatusQueue = "--token-color-background-status-queue",
    StatusSuccess = "--token-color-background-status-success",
    StatusWarning = "--token-color-background-status-warning",
    SurfaceAlert = "--token-color-background-surface-alert",
    SurfaceDisabled = "--token-color-background-surface-disabled",
    SurfaceInprogress = "--token-color-background-surface-inprogress",
    SurfacePrimary = "--token-color-background-surface-primary",
    SurfaceScrimmed = "--token-color-background-surface-scrimmed",
    SurfaceSecondary = "--token-color-background-surface-secondary",
    SurfaceSuccess = "--token-color-background-surface-success",
    SurfaceTertiary = "--token-color-background-surface-tertiary",
    SurfaceTooltipNeutral = "--token-color-background-surface-tooltip-neutral",
    SurfaceTooltipPrimary = "--token-color-background-surface-tooltip-primary",
    SurfaceWarning = "--token-color-background-surface-warning"
}
export declare enum ColorTextTokens {
    AccentBlueSoft = "--token-color-text-accent-blue-soft",
    AccentBlueStrong = "--token-color-text-accent-blue-strong",
    AccentCyanSoft = "--token-color-text-accent-cyan-soft",
    AccentCyanStrong = "--token-color-text-accent-cyan-strong",
    AccentGraySoft = "--token-color-text-accent-gray-soft",
    AccentGrayStrong = "--token-color-text-accent-gray-strong",
    AccentGreenSoft = "--token-color-text-accent-green-soft",
    AccentGreenStrong = "--token-color-text-accent-green-strong",
    AccentLimeSoft = "--token-color-text-accent-lime-soft",
    AccentLimeStrong = "--token-color-text-accent-lime-strong",
    AccentOrangeSoft = "--token-color-text-accent-orange-soft",
    AccentOrangeStrong = "--token-color-text-accent-orange-strong",
    AccentPurpleSoft = "--token-color-text-accent-purple-soft",
    AccentPurpleStrong = "--token-color-text-accent-purple-strong",
    AccentRedSoft = "--token-color-text-accent-red-soft",
    AccentRedStrong = "--token-color-text-accent-red-strong",
    AccentYellowSoft = "--token-color-text-accent-yellow-soft",
    AccentYellowStrong = "--token-color-text-accent-yellow-strong",
    BodyAlert = "--token-color-text-body-alert",
    BodyDisabled = "--token-color-text-body-disabled",
    BodyInverse = "--token-color-text-body-inverse",
    BodyPrimary = "--token-color-text-body-primary",
    BodySecondary = "--token-color-text-body-secondary",
    BodySuccess = "--token-color-text-body-success",
    BodyWarning = "--token-color-text-body-warning",
    InteractiveDangerActive = "--token-color-text-interactive-danger-active",
    InteractiveDangerDefault = "--token-color-text-interactive-danger-default",
    InteractiveDangerHover = "--token-color-text-interactive-danger-hover",
    InteractiveDisabled = "--token-color-text-interactive-disabled",
    InteractiveHeavy = "--token-color-text-interactive-heavy",
    InteractiveInverse = "--token-color-text-interactive-inverse",
    InteractivePrimaryActive = "--token-color-text-interactive-primary-active",
    InteractivePrimaryDefault = "--token-color-text-interactive-primary-default",
    InteractivePrimaryHover = "--token-color-text-interactive-primary-hover"
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
    InteractiveAlertDefault = "--token-color-border-interactive-alert-default",
    InteractiveAlertFocused = "--token-color-border-interactive-alert-focused",
    InteractiveDefault = "--token-color-border-interactive-default",
    InteractiveDisabled = "--token-color-border-interactive-disabled",
    InteractiveFocused = "--token-color-border-interactive-focused",
    InteractiveHover = "--token-color-border-interactive-hover",
    InteractiveSelected = "--token-color-border-interactive-selected",
    SurfaceAlert = "--token-color-border-surface-alert",
    SurfaceInfo = "--token-color-border-surface-info",
    SurfaceSuccess = "--token-color-border-surface-success",
    SurfaceWarning = "--token-color-border-surface-warning"
}
export declare enum ColorShapeTokens {
    AccentBluePale = "--token-color-shape-accent-blue-pale",
    AccentBlueSoft = "--token-color-shape-accent-blue-soft",
    AccentBlueStrong = "--token-color-shape-accent-blue-strong",
    AccentCyanPale = "--token-color-shape-accent-cyan-pale",
    AccentCyanSoft = "--token-color-shape-accent-cyan-soft",
    AccentCyanStrong = "--token-color-shape-accent-cyan-strong",
    AccentGrayPale = "--token-color-shape-accent-gray-pale",
    AccentGraySoft = "--token-color-shape-accent-gray-soft",
    AccentGrayStrong = "--token-color-shape-accent-gray-strong",
    AccentGreenPale = "--token-color-shape-accent-green-pale",
    AccentGreenSoft = "--token-color-shape-accent-green-soft",
    AccentGreenStrong = "--token-color-shape-accent-green-strong",
    AccentLimePale = "--token-color-shape-accent-lime-pale",
    AccentLimeSoft = "--token-color-shape-accent-lime-soft",
    AccentLimeStrong = "--token-color-shape-accent-lime-strong",
    AccentOrangePale = "--token-color-shape-accent-orange-pale",
    AccentOrangeSoft = "--token-color-shape-accent-orange-soft",
    AccentOrangeStrong = "--token-color-shape-accent-orange-strong",
    AccentPurplePale = "--token-color-shape-accent-purple-pale",
    AccentPurpleSoft = "--token-color-shape-accent-purple-soft",
    AccentPurpleStrong = "--token-color-shape-accent-purple-strong",
    AccentRedPale = "--token-color-shape-accent-red-pale",
    AccentRedSoft = "--token-color-shape-accent-red-soft",
    AccentRedStrong = "--token-color-shape-accent-red-strong",
    AccentYellowPale = "--token-color-shape-accent-yellow-pale",
    AccentYellowSoft = "--token-color-shape-accent-yellow-soft",
    AccentYellowStrong = "--token-color-shape-accent-yellow-strong",
    InteractiveDangerActive = "--token-color-shape-interactive-danger-active",
    InteractiveDangerDefault = "--token-color-shape-interactive-danger-default",
    InteractiveDangerHover = "--token-color-shape-interactive-danger-hover",
    InteractiveDisabled = "--token-color-shape-interactive-disabled",
    InteractiveHeavy = "--token-color-shape-interactive-heavy",
    InteractiveInverse = "--token-color-shape-interactive-inverse",
    InteractivePrimaryActive = "--token-color-shape-interactive-primary-active",
    InteractivePrimaryDefault = "--token-color-shape-interactive-primary-default",
    InteractivePrimaryHover = "--token-color-shape-interactive-primary-hover",
    InteractivePrimarySelected = "--token-color-shape-interactive-primary-selected",
    Light = "--token-color-shape-light",
    Primary = "--token-color-shape-primary",
    StatusAlert = "--token-color-shape-status-alert",
    StatusInfo = "--token-color-shape-status-info",
    StatusSuccess = "--token-color-shape-status-success",
    StatusWarning = "--token-color-shape-status-warning"
}
export declare enum SpacingTokens {
    Lg = "--token-spacing-lg",
    Md = "--token-spacing-md",
    Sm = "--token-spacing-sm",
    Xl = "--token-spacing-xl",
    Xs = "--token-spacing-xs",
    Xxl = "--token-spacing-xxl",
    Xxs = "--token-spacing-xxs",
    Xxxl = "--token-spacing-xxxl",
    Xxxs = "--token-spacing-xxxs"
}
export declare enum TextSizeTokens {
    Lg = "--token-text-size-lg",
    Md = "--token-text-size-md",
    Sm = "--token-text-size-sm",
    Xl = "--token-text-size-xl",
    Xs = "--token-text-size-xs",
    Xxl = "--token-text-size-xxl",
    Xxxl = "--token-text-size-xxxl"
}
export declare enum RadiusTokens {
    Lg = "--token-radius-lg",
    Max = "--token-radius-max",
    Md = "--token-radius-md",
    Sm = "--token-radius-sm",
    Xs = "--token-radius-xs"
}
export interface Tokens {
    'Green Mode': ThemeTokens;
    'Blue Mode': ThemeTokens;
    'Primitives': PrimitiveTokens;
}
export declare const tokens: Tokens;
