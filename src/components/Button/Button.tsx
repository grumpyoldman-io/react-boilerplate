import classNames from 'classnames';
import { ButtonHTMLAttributes } from 'react';

enum Size {
  small = 'small',
  medium = 'medium',
  large = 'large',
}

type Props = {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * How large should the button be?
   */
  size?: Size;
} & ButtonHTMLAttributes<HTMLButtonElement>;

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  type = 'button',
  primary = false,
  size = Size.medium,
  children,
  className,
  ...props
}: Props) => {
  return (
    <button
      type={type}
      className={classNames(
        'inline-flex items-center border border-transparent font-medium rounded focus:outline-none focus:ring-2 focus:ring-offset-2 ',
        primary
          ? 'text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500'
          : 'text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:ring-indigo-500',
        {
          'px-2.5 py-1.5 text-xs': size === Size.small,
          'px-3 py-2 text-sm leading-4': size === Size.medium,
          'px-4 py-2 text-base': size === Size.large,
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

Button.size = Size;
