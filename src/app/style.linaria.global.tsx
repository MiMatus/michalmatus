import { css } from '@linaria/core';
import { mediaMin } from '@michalspace/utils/mediaQueries';

export const theme = css`
    :global() {
        :root {
            --layout-background: #f2f0ee;
            --layout-panel-background-primary: #ffffff;
            --layout-panel-background-secondary: #6e07f3;
            --layout-panel-padding-size: 3rem;
            --layout-panel-content-padding-size: 0rem;

            --button-link-color: #6e07f3;
            --button-link-border-color: #6e07f3;
            --button-link-background: #ffffff;

            --button-active-color: #6e07f3;
            --button-inactive-color: #58595b;

            --bubble-background-primary: #6e07f3
            --bubble-background-secondary: #6E07F38A;
            --bubble-font-color: #ffffff

            --font-color-heading-light: rgba(20, 28, 58, 0.7);
            --font-color-heading-primary: #141c3a;
            --font-size-heading-primary: 4.4rem;
            --font-color-heading-secondary: #ffffff;
            --font-size-heading-secondary: 2.4rem;
            --font-size-small-note: 1.2rem;
            --font-size-note: 1.4rem;
            --font-size-text: 2.1rem;
            --font-color-text-primary: #141c3a;
            --font-color-text-secondary: #ffffff;
            --font-weight-text: 300;

            --profile-image-border-color: #141c3a;
            --default-border-color: #58595b;
        }

        [data-theme='dark'] {
            --layout-background: #141c3a;
            --layout-panel-background-primary: #000000;

            --button-link-color: #141c3a;
            --button-link-background: #6e07f3;

            --bubble-font-color: #141c3a

            --font-color-heading-light: rgba(88, 89, 91, 0.7);
            --font-color-heading-primary: #58595b;
            --font-color-text-primary: #58595b;

            --profile-image-border-color: #58595b;

        }

        ${mediaMin('medium')}{
            :root{
                --layout-panel-padding-size: 7rem;
                --layout-panel-content-padding-size: 10rem;


                --font-size-heading-primary: 4.4rem;
                --font-size-heading-secondary: 3.4rem;

                --font-size-small-note: 1.6rem;
                --font-size-note: 1.9rem;
                --font-size-text: 2.4rem;
                
            }
        }
    }
`;
export const customGlobals = css`
    :global() {
        html {
            font-size: 62.5%;
        }
        body {
            width: 100%;
        }
    }
`;

export const globals = css`
    :global() {
        /**
        RECOMANDED GLOBAL STYLES
    */

        *,
        *::before,
        *::after {
            box-sizing: border-box;
        }

        /**
        1. Correct the line height in all browsers.
        2. Prevent adjustments of font size after orientation changes in iOS.
    */

        html {
            line-height: 1.15; /* 1 */
            -webkit-text-size-adjust: 100%; /* 2 */
        }

        /*
        Sections
        ========
    */

        /**
        Remove the margin in all browsers.
    */

        body {
            margin: 0;
        }

        /*
        Grouping content
        ================
    */

        /**
        1. Add the correct height in Firefox.
        2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
    */

        hr {
            height: 0; /* 1 */
            color: inherit; /* 2 */
        }

        /*
        Text-level semantics
        ====================
    */

        /**
        Add the correct text decoration in Chrome, Edge, and Safari.
    */

        abbr[title] {
            text-decoration: underline dotted;
        }

        /**
        Add the correct font weight in Edge and Safari.
    */

        b,
        strong {
            font-weight: bolder;
        }

        /**
        1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)
        2. Correct the odd 'em' font sizing in all browsers.
    */

        code,
        kbd,
        samp,
        pre {
            font-family: ui-monospace, SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace; /* 1 */
            font-size: 1em; /* 2 */
        }

        /**
        Add the correct font size in all browsers.
    */

        small {
            font-size: 80%;
        }

        /*
        Tabular data
        ============
    */

        /**
        1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
        2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
    */

        table {
            text-indent: 0; /* 1 */
            border-color: inherit; /* 2 */
        }

        /*
        Forms
        =====
    */

        /**
        1. Change the font styles in all browsers.
        2. Remove the margin in Firefox and Safari.
    */

        button,
        input,
        optgroup,
        select,
        textarea {
            font-family: inherit; /* 1 */
            font-size: 100%; /* 1 */
            line-height: 1.15; /* 1 */
            margin: 0; /* 2 */
        }

        /**
        Remove the inheritance of text transform in Edge and Firefox.
        1. Remove the inheritance of text transform in Firefox.
    */

        button,
        select {
            /* 1 */
            text-transform: none;
        }

        /**
        Correct the inability to style clickable types in iOS and Safari.
    */

        button,
        [type='button'],
        [type='reset'],
        [type='submit'] {
            -webkit-appearance: button;
        }

        /**
        Remove the inner border and padding in Firefox.
    */

        ::-moz-focus-inner {
            border-style: none;
            padding: 0;
        }

        /**
        Remove the additional ':invalid' styles in Firefox.
        See: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737
    */

        :-moz-ui-invalid {
            box-shadow: none;
        }

        /**
        Remove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.
    */

        legend {
            padding: 0;
        }

        /**
        Add the correct vertical alignment in Chrome and Firefox.
    */

        progress {
            vertical-align: baseline;
        }

        /**
        Correct the cursor style of increment and decrement buttons in Safari.
    */

        ::-webkit-inner-spin-button,
        ::-webkit-outer-spin-button {
            height: auto;
        }

        /**
        1. Correct the odd appearance in Chrome and Safari.
        2. Correct the outline style in Safari.
    */

        [type='search'] {
            -webkit-appearance: textfield; /* 1 */
            outline-offset: -2px; /* 2 */
        }

        /**
        Remove the inner padding in Chrome and Safari on macOS.
    */

        ::-webkit-search-decoration {
            -webkit-appearance: none;
        }

        /**
        1. Correct the inability to style clickable types in iOS and Safari.
        2. Change font properties to 'inherit' in Safari.
    */

        ::-webkit-file-upload-button {
            -webkit-appearance: button; /* 1 */
            font: inherit; /* 2 */
        }

        /*
        Interactive
        ===========
    */

        /*
        Add the correct display in Chrome and Safari.
    */

        summary {
            display: list-item;
        }

        /*
        * TYPOGRAPHY
        */
        body {
            color: var(--color-text-alpha);
            font-size: var(--font-size-md);
            font-family: var(--font-family);
            line-height: 1.5;
        }

        ::selection,
        ::-moz-selection {
            background: var(--color-primary-delta);
        }

        /*
        * CUSTOM NORMALIZE STYLES
        */
        /**
        * Reset Firefox input placeholder
        */
        input::placeholder {
            opacity: 1;
        }

        /**
        * Remove x button from Chrome
        */
        input[type='search']::-webkit-search-decoration,
        input[type='search']::-webkit-search-cancel-button,
        input[type='search']::-webkit-search-results-button,
        input[type='search']::-webkit-search-results-decoration {
            -webkit-appearance: none;
        }

        /**
        * Remove input autofill background in Chrome
        */
        input:-webkit-autofill {
            -webkit-box-shadow: 0 0 0 1000px white inset;
        }

        body {
            scroll-behavior: smooth;
        }

        *,
        *:hover,
        *:focus {
            outline: none;
        }
    }
`;
