import { Components } from 'react-markdown';
import { formatAnchorElement } from './formatAnchorElement';
import { formatCodeElement } from './formatCodeElement';
import { formatHeadingElement } from './formatHeadingElement';
import { formatImgElement } from './formatImgElement';

// config images to Next Image component
export function getMarkdownComponents(): Partial<Components> {
  const headings: Components = {
    h2: (props) => formatHeadingElement(props),
    h3: (props) => formatHeadingElement(props),
    h4: (props) => formatHeadingElement(props),
    h5: (props) => formatHeadingElement(props),
    h6: (props) => formatHeadingElement(props),
  };

  const components: Components = {
    a: (props) => formatAnchorElement(props),
    code: (props) => formatCodeElement(props),
    img: (props) => formatImgElement(props),
    ...headings,
  };

  return components;
}
