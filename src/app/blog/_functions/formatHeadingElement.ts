import { slug } from 'github-slugger';
import {
  ClassAttributes,
  HTMLAttributes,
  ReactElement,
  createElement,
} from 'react';
import { ExtraProps } from 'react-markdown';

type HeadingElementProps = ClassAttributes<HTMLHeadingElement> &
  HTMLAttributes<HTMLHeadingElement> &
  ExtraProps;

export function formatHeadingElement(props: HeadingElementProps): ReactElement {
  const { node, ...rest } = props;
  const id = slug(rest.children as string);

  return createElement(node!.tagName, { id, ...props });
}
