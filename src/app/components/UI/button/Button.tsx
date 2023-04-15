import { resolveIconType } from '../icons/util';

type PrimaryButtonProps = {
  icon?: string | React.ReactNode;
  children: React.ReactNode;
} & (
  | { iconLeft?: true; iconRight?: never }
  | {
      iconLeft?: never;
      iconRight?: true;
    }
) &
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  type: _,
  icon,
  iconLeft,
  iconRight,
  children,
  ...props
}) => (
  <button type="button" {...props}>
    {icon ? <span>{resolveIconType(icon)}</span> : null}
    <span>{children}</span>
  </button>
);

export { PrimaryButton };
