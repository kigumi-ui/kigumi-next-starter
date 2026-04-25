/**
 * TypeScript declarations for Web Awesome components
 * This file provides type safety for Web Awesome custom elements in React
 */

import type { DetailedHTMLProps, HTMLAttributes } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
    
      'wa-button': DetailedHTMLProps<
        HTMLAttributes<HTMLElement> & {
      class?: string;
      variant?: 'neutral' | 'brand' | 'success' | 'warning' | 'danger';
      appearance?: 'accent' | 'filled-outlined' | 'filled' | 'outlined' | 'plain';
      size?: 'small' | 'medium' | 'large';
      pill?: boolean;
      disabled?: boolean;
      loading?: boolean;
      'with-caret'?: boolean;
      href?: string;
      target?: '_blank' | '_self' | '_parent' | '_top';
      download?: string;
      rel?: string;
      type?: 'button' | 'submit' | 'reset';
      name?: string;
      value?: string;
      formaction?: string;
      formenctype?: string;
      formmethod?: string;
      formnovalidate?: boolean;
      formtarget?: string;
        },
        HTMLElement
      >;

      'wa-card': DetailedHTMLProps<
        HTMLAttributes<HTMLElement> & {
      class?: string;
      appearance?: 'outlined' | 'filled-outlined' | 'plain' | 'filled' | 'accent';
      orientation?: 'vertical' | 'horizontal';
      'with-header'?: boolean;
      'with-footer'?: boolean;
      'with-media'?: boolean;
        },
        HTMLElement
      >;

      'wa-icon': DetailedHTMLProps<
        HTMLAttributes<HTMLElement> & {
      class?: string;
      name?: string;
      library?: string;
      src?: string;
      label?: string;
      family?: string;
      variant?: string;
      'auto-width'?: boolean;
      'swap-opacity'?: boolean;
      rotate?: number;
      flip?: 'horizontal' | 'vertical' | 'both';
      animation?: string;
        },
        HTMLElement
      >;

      'wa-input': DetailedHTMLProps<
        HTMLAttributes<HTMLElement> & {
      class?: string;
      type?: 'text' | 'email' | 'password' | 'number' | 'date' | 'tel' | 'url' | 'search';
      label?: string;
      hint?: string;
      placeholder?: string;
      value?: string;
      appearance?: 'filled' | 'filled-outlined' | 'outlined';
      size?: 'small' | 'medium' | 'large';
      pill?: boolean;
      disabled?: boolean;
      'with-clear'?: boolean;
      'password-toggle'?: boolean;
      'password-visible'?: boolean;
      readonly?: boolean;
      required?: boolean;
      name?: string;
      pattern?: string;
      minlength?: number;
      maxlength?: number;
      min?: string;
      max?: string;
      step?: string;
      'without-spin-buttons'?: boolean;
      autocomplete?: string;
      autocapitalize?: 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters';
      autocorrect?: boolean;
      autofocus?: boolean;
      inputmode?: 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url';
      enterkeyhint?: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send';
        },
        HTMLElement
      >;
}
  }
}

export {};
