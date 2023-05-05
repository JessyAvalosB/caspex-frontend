import { InputHTMLAttributes, forwardRef } from "react";
import { InputTextBase, InputTextError, InputTextLabel } from "./Style";

export interface IInputText extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  errorMessage?: string | null;
  ref?: any;
}

const InputText = forwardRef(
  ({ label, errorMessage = null, name, ...rest }: IInputText, ref) => {
    return (
      <InputTextLabel htmlFor={name}>
        {label}
        <InputTextBase name={name} id={name} ref={ref} {...rest} />
        {errorMessage && <InputTextError>{errorMessage}</InputTextError>}
      </InputTextLabel>
    );
  }
);

export default InputText;
