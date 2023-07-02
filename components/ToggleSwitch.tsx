type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  text: string;
  className: string;
};

export default function ToggleSwitch({
  handleClick,
  text,
  className,
}: ButtonProps) {
  return (
    <button className={className} onClick={handleClick}>
      {text}
    </button>
  );
}

const style = {
  linkContainer: {},
} as const;
