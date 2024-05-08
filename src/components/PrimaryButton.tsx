interface PrimaryButtonProps {
  children: string;
  onClick?: () => void;
  className?: string;
}

export default function PrimaryButton({
  children,
  onClick,
  className,
}: PrimaryButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-4 w-fit text-center rounded-primary
      text-light bg-primary hover:bg-primary-dark ${className}`}
    >
      {children}
    </button>
  );
}
