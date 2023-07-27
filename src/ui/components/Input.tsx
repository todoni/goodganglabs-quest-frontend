import colors from "./colors";
import useId from "../../lib/usdId";
import {
  Children,
  cloneElement,
  ForwardedRef,
  forwardRef,
  HTMLAttributes,
  InputHTMLAttributes,
  ReactElement,
  ReactNode,
} from "react";

interface InputProps extends HTMLAttributes<HTMLDivElement> {
  label?: ReactNode;
  children: ReactElement;
  bottomText?: string;
}

const Input = ({ label, children, bottomText, ...props }: InputProps) => {
  const child = Children.only(children);
  const generatedId = useId("input");
  const id = child.props.id ?? generatedId;
  const isError: boolean = child.props.error ?? false;

  return (
    <div css={{ width: "100%", outline: "none" }} {...props}>
      <label
        htmlFor={id}
        css={{
          display: "inline-block",
          padding: "5px 0",
          fontSize: "15px",
          fontWeight: "500",
          lineHeight: 1.6,
          color: colors.grey700,
        }}
      >
        {label}
      </label>
      {cloneElement(child, {
        id,
        ...child.props,
      })}
      {bottomText != null ? (
        <p
          css={{
            color: isError ? colors.red600 : colors.grey600,
            marginTop: "4px",
            display: "inline-block",
            fontWeight: 400,
            fontSize: "15px",
          }}
        >
          {bottomText}
        </p>
      ) : null}
    </div>
  );
};

interface TextFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  error?: boolean;
}

Input.TextField = forwardRef(
  (
    { error, ...props }: TextFieldProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return <input ref={ref} {...props} />;
  }
);

export default Input;
