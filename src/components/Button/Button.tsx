import { ButtonProps } from "../../interfaces/Button/Button";
import { BaseButton } from "./Style";

export enum ButtonVariant {
  primary = "primary",
  secondary = "secondary",
}

const Button = ({
  children,
  variant,
  ...rest
}: ButtonProps): JSX.Element => {
  return (
    <BaseButton type="button" variant={variant} {...rest}>
      {children}
    </BaseButton>
  );
};

export default Button;
