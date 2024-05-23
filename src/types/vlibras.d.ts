type CustomDivProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  vw?: string;
  'vw-access-button'?: string;
  'vw-plugin-wrapper'?: string;
};

export type VLibrasCustomWindow = Window & {
  VLibras: {
    Widget: new (url: string) => void;
  };
};

export type VLibrasProps = {
  div: CustomDivProps;
  accessButton: CustomDivProps;
  pluginWrapper: CustomDivProps;
};
