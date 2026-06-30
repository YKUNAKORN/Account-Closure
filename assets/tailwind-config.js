// /assets/tailwind-config.js
// Closed Account — SINGLE SOURCE OF TRUTH for the Tailwind (Play CDN) theme.
// Loaded by every page immediately after the Tailwind CDN <script>.
// Reconciled from 8 drifted per-page configs (2026-06-30).
// Change a token here once and all pages update together.
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            "colors": {
        "outline-variant": "#c7c4d7",
        "on-tertiary": "#ffffff",
        "surface-container-highest": "#e4e1ec",
        "on-surface": "#1b1b23",
        "tertiary-container": "#53701c",
        "surface-container": "#efecf8",
        "secondary-fixed": "#aaedff",
        "primary-fixed": "#e1dfff",
        "on-primary-fixed": "#09006b",
        "surface-dim": "#dbd8e4",
        "primary-container": "#5555db",
        "on-primary": "#ffffff",
        "error-container": "#ffdad6",
        "surface": "#fcf8ff",
        "outline": "#777586",
        "primary-fixed-dim": "#c1c1ff",
        "on-secondary-fixed": "#001f26",
        "on-error-container": "#93000a",
        "on-primary-fixed-variant": "#322fb9",
        "on-primary-container": "#e6e4ff",
        "tertiary-fixed": "#ccef8c",
        "surface-container-lowest": "#ffffff",
        "background": "#fcf8ff",
        "surface-container-low": "#f5f2fe",
        "on-secondary": "#ffffff",
        "secondary": "#006879",
        "on-tertiary-container": "#cff38f",
        "on-secondary-fixed-variant": "#004e5c",
        "on-surface-variant": "#464554",
        "inverse-primary": "#c1c1ff",
        "primary": "#3b39c2",
        "on-tertiary-fixed-variant": "#354e00",
        "surface-container-high": "#eae6f2",
        "surface-tint": "#4c4bd2",
        "on-error": "#ffffff",
        "on-background": "#1b1b23",
        "tertiary": "#3c5701",
        "on-tertiary-fixed": "#131f00",
        "surface-variant": "#e4e1ec",
        "error": "#ba1a1a",
        "inverse-surface": "#303038",
        "on-secondary-container": "#006576",
        "inverse-on-surface": "#f2effb",
        "secondary-fixed-dim": "#64d5ef",
        "tertiary-fixed-dim": "#b0d272",
        "secondary-container": "#74e3fe",
        "surface-bright": "#fcf8ff",
        "status-pending-text": "#006879",
        "status-pending-bg": "#aaedff",
        "status-completed-text": "#3c5701",
        "status-completed-bg": "#ccef8c",
        "status-rejected-text": "#ba1a1a",
        "status-rejected-bg": "#ffdad6"
            },
            "borderRadius": {
                "DEFAULT": "0.125rem",
                "lg": "0.25rem",
                "xl": "0.5rem",
                "full": "9999px"
            },
            "spacing": {
                "gutter": "24px",
                "stack_lg": "24px",
                "stack_md": "16px",
                "stack_sm": "8px",
                "sidebar_width": "260px",
                "container_padding": "32px"
            },
            "fontFamily": {
                "title-sm": ["Hanken Grotesk"],
                "headline-md": ["Hanken Grotesk"],
                "body-lg": ["Hanken Grotesk"],
                "label-caps": ["Hanken Grotesk"],
                "body-md": ["Hanken Grotesk"],
                "display-lg": ["Hanken Grotesk"]
            },
            "fontSize": {
                "title-sm": ["18px", { "lineHeight": "1.4", "fontWeight": "600" }],
                "headline-md": ["24px", { "lineHeight": "1.3", "fontWeight": "600" }],
                "body-lg": ["16px", { "lineHeight": "1.6", "fontWeight": "400" }],
                "label-caps": ["12px", { "lineHeight": "1.2", "letterSpacing": "0.05em", "fontWeight": "700" }],
                "body-md": ["14px", { "lineHeight": "1.5", "fontWeight": "400" }],
                "display-lg": ["32px", { "lineHeight": "1.2", "fontWeight": "700" }]
            }
        }
    }
}
