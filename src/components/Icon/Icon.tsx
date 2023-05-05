import { IconBase } from "./Style";

interface IconProps {
  icon: string;
  width: string;
  height: string;
  alt: string;
  onClick?: () => void;
}

const Icon = (props: IconProps): JSX.Element => {
  const { icon, width = "24px", height = "24px", ...rest } = props;
  return <IconBase src={icon} width={width} height={height} {...rest} />;
};

export default Icon;
