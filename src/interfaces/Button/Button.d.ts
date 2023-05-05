import { ButtonVariant } from "../../components/Button/Button";

export interface BaseButtonTypes {
  variant: ButtonVariant;
}

export interface ButtonProps extends BaseButtonTypes {
  disabled?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: (event: any) => void;
}
