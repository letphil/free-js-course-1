import {
  Control,
  Controller,
  FieldValues,
  RegisterOptions,
} from "react-hook-form";

interface IFormInput {
  name: string;
  // The Control type is a generic type that takes two arguments: FieldValues and string.
  control: Control<FieldValues>;
  // The RegisterOptions type is a generic type that takes two arguments: FieldValues and string.
  rules: Omit<
    RegisterOptions<FieldValues, string>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
  placeholder: string;
  className?: string;
  type?: string;
}
export default function FormInput({
  control,
  name,
  rules,
  placeholder,
  className,
  ...rest
}: IFormInput) {
  return (
    // The Controller component is a wrapper around the input element.
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <>
          <div>
            <input
              className={className}
              {...field}
              placeholder={placeholder}
              {...rest}
            />
          </div>
          {error && (
            <p
              style={{
                color: "red",
                fontSize: "14px",
              }}
            >
              {error.message}
            </p>
          )}
        </>
      )}
    />
  );
}
