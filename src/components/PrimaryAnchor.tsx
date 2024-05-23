interface PrimaryAnchorProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export const PrimaryAnchor: React.FC<PrimaryAnchorProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <a
      {...rest}
      target='_blank'
      className={`px-6 py-4 w-fit text-center text-base font-medium text-white
      rounded-primary bg-primary hover:bg-primary-dark ${className}`}
    >
      {children}
    </a>
  );
};
