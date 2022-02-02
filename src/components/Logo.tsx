type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '120px' : '32px';
  
  return (
    <img alt="Logo" width={size} src="/logo.png"/>
  );
};

export { Logo };
