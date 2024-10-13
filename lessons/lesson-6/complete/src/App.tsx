import { useReducer } from "react";
import "./App.css";

import {
  Controller,
  useForm,
  Control,
  RegisterOptions,
  FieldValues,
} from "react-hook-form";

interface IFormInput {
  name: string;
  control: Control;
  rules: Omit<
    RegisterOptions<FieldValues, string>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
  placeholder: string;
}

const FormInput = ({ control, name, rules, placeholder }: IFormInput) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <div>
          <input {...field} placeholder={placeholder} />
          {error && <p>{error.message}</p>}
        </div>
      )}
    />
  );
};

export default function App() {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      {/* make form */}
      <FormInput
        control={control}
        name="name"
        rules={{
          required: "This is required",
          maxLength: {
            value: 20,
            message: "Max length is 20",
          },
          minLength: {
            value: 5,
            message: "Min length is 5",
          },
          pattern: /^[A-Za-z]+$/,
        }}
        placeholder="Name"
      />
      <button type="submit" onClick={handleSubmit(onSubmit)}>
        Submit
      </button>
    </div>
  );
}
