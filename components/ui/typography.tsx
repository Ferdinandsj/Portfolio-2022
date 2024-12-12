import classNames from "classnames";

type TypographyProps = {
  text: string;
  className?: string; // Optional className prop
};

export const H1: React.FC<TypographyProps> = ({
  text,
  className,
}) => {
  return (
    <h1
      className={classNames(
        "font-sans text-gray-700 text-2xl font-semibold tracking-tight",
        className
      )}
    >
      {text}
    </h1>
  );
};

export const H2: React.FC<TypographyProps> = ({
  text,
  className,
}) => {
  return (
    <h2
      className={classNames(
        "font-sans text-gray-700 text-2xl font-semibold tracking-tight",
        className
      )}
    >
      {text}
    </h2>
  );
};

export default H1;
