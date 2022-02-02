import className from 'classnames';

type IButtonProps = {
  xl?: boolean;
  children: string;
  secondary?: boolean;
  onClick?: () => void;
  outlined?: boolean;
};

const Button = (props: IButtonProps) => {
  const btnClass = className({
    btn: true,
    'btn-xl': props.xl,
    'btn-base': !props.xl,
    'btn-primary': true,
    'btn-secondary': props.secondary,
    'btn-outlined': props.outlined,
  });

  return (
    <div className={btnClass} onClick={props.onClick}>
      {props.children}
    </div>
  );
};

export { Button };
