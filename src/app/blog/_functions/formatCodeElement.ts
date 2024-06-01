import hljs from 'highlight.js';
import 'highlight.js/styles/base16/dracula.css';
import {
  ClassAttributes,
  HTMLAttributes,
  ReactElement,
  createElement,
} from 'react';
import { ExtraProps } from 'react-markdown';

type CodeElementProps = ClassAttributes<HTMLElement> &
  HTMLAttributes<HTMLElement> &
  ExtraProps;

export function formatCodeElement(props: CodeElementProps): ReactElement {
  const { className, children, node, ...rest } = props;

  const language = className!.replace('language-', '');
  const highlightedCode = hljs.highlight(language, children!.toString()).value;

  return createElement(node!.tagName, {
    dangerouslySetInnerHTML: {
      __html: highlightedCode,
    },
    ...rest,
  });
}
