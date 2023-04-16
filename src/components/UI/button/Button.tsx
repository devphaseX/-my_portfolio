import { mergeClass } from '@/lib';
import { resolveIconType } from '../icons/util';
import '@/style/button.css';
import { MessageIcon } from '../icons/Mesage';

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
  className,
  children,
  ...props
}) => (
  <button
    type="button"
    className={mergeClass('primary-button', className ?? '')}
    {...props}
    style={{
      flexDirection:
        iconLeft === undefined && iconLeft === iconRight
          ? 'initial'
          : 'row-reverse',
    }}
  >
    {icon ? <span>{resolveIconType(icon)}</span> : null}
    <span>{children}</span>
  </button>
);

const LetTalkButton = () => (
  <PrimaryButton icon={<MessageIcon />} className="sm-3-bd">
    Let's Talk
  </PrimaryButton>
);

export { PrimaryButton, LetTalkButton };
