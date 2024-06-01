import 'highlight.js/styles/base16/dracula.css';
import {
  AnchorHTMLAttributes,
  ClassAttributes,
  ReactElement,
  createElement,
} from 'react';
import { ExtraProps } from 'react-markdown';

type AnchorElementProps = ClassAttributes<HTMLAnchorElement> &
  AnchorHTMLAttributes<HTMLAnchorElement> &
  ExtraProps;

export function formatAnchorElement(props: AnchorElementProps): ReactElement {
  return createElement(props.node!.tagName, {
    className: 'text-[#2A9DF4] hover:text-secondary transition-colors',
    ...props,
  });
}
