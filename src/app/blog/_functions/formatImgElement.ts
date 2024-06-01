import 'highlight.js/styles/base16/dracula.css';
import Image from 'next/image';
import {
  ClassAttributes,
  ImgHTMLAttributes,
  ReactElement,
  createElement,
} from 'react';
import { ExtraProps } from 'react-markdown';

type ImgElementProps = ClassAttributes<HTMLImageElement> &
  ImgHTMLAttributes<HTMLImageElement> &
  ExtraProps;

export function formatImgElement(props: ImgElementProps): ReactElement {
  const { src, alt } = props;

  return createElement(Image, {
    src: src!,
    alt: alt!,
    quality: 100,
    width: 700,
    height: 700,
    loading: 'lazy',
  });
}
