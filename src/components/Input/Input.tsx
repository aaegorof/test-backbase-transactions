import React, { useState, useEffect } from "react";
import "./input.scss";
import { useForm } from "react-hook-form";

type Props = {
  disabled?: boolean;
  onChange: (a: string) => void;
  value?: string;
  placeholder?: string;
  text?: string;
  name: string;
  type?: string;
  inForm?: boolean;
};

const Input: React.FC<Props> = ({
  value = "",
  disabled,
  onChange,
  placeholder,
  text,
  name,
  inForm,
  ...props
}) => {
  const [initPlaceholder, setInitPlaceholder] = useState(placeholder);

  const { register } = useForm();

  useEffect(() => {
    setInitPlaceholder(placeholder);
  }, [placeholder]);

  const onClear = () => {
    onChange("");
  };

  // @ts-ignore
  return (
    <div className={"input-block"}>
      {text && <label>{text}</label>}
      <div className={"input-wrap"}>
        <input
          value={value}
          disabled={disabled}
          aria-label={name}
          onChange={(event: any) => onChange(event.target.value)}
          onFocus={() => setInitPlaceholder("")}
          onBlur={() => setInitPlaceholder(placeholder)}
          placeholder={initPlaceholder}
          type={"text"}
          {...(inForm && register(name))}
          {...props}
        />
        {value && !disabled && (
          <button className="clear" onClick={onClear}>
            x
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;
