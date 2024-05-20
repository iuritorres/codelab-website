interface PrimaryAnchorProps {
  children: string;
  href: string;
  className?: string;
}

export function PrimaryAnchor({
  children,
  href,
  className,
}: PrimaryAnchorProps) {
  return (
    <a
      href={href}
      target='_blank'
      className={`px-6 py-4 w-fit text-center text-lg text-light
      rounded-primary bg-primary hover:bg-primary-dark ${className}`}
    >
      {children}
    </a>
  );
}
