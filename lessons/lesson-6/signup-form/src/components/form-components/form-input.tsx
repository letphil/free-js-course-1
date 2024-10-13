import {
  Control,
  Controller,
  FieldValues,
  RegisterOptions,
} from "react-hook-form";

interface IFormInput {
  name: string;
  control: Control<FieldValues>;
  rules: Omit<
    RegisterOptions<FieldValues, string>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
  type?: "text" | "password";
  placeholder?: string;
  className?: string;
  labelText: string;
  show?: () => void;
}

export default function FormInput({
  name,
  control,
  rules,
  type,
  placeholder,
  className,
  labelText,
  show,
}: IFormInput): JSX.Element {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => {
        return (
          <label className="input input-bordered flex items-center gap-2 my-2">
            {labelText}
            <div>
              <span>
                <input
                  {...field}
                  className={"grow " + (className || "")}
                  placeholder={placeholder}
                  type={type || "text"}
                />
                {(name === "password" || name === "confirmPassword") && (
                  <button onClick={show}>show</button>
                )}
              </span>
            </div>
            {error && (
              <p
                style={{
                  fontSize: 13,
                  color: "#F00",
                }}
              >
                {error.message}
              </p>
            )}
          </label>
        );
      }}
    />
  );
}
