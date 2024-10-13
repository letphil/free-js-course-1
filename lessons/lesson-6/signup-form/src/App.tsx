import { useReducer } from "react";

import { useForm, Control, FieldValues } from "react-hook-form";
import FormInput from "./components/form-components/form-input";

export default function App() {
  const [state, dispatch] = useReducer(
    (
      state: {
        showPassword: boolean;
        showConfirmPassword: boolean;
      },
      action: {
        type: "SHOW_PASSWORD" | "SHOW_CONFIRM_PASSWORD";
      }
    ) => {
      console.log("action =", action);
      switch (action.type) {
        case "SHOW_PASSWORD":
          return {
            ...state,
            showPassword: !state.showPassword,
          };
        case "SHOW_CONFIRM_PASSWORD":
          return {
            ...state,
            showConfirmPassword: !state.showConfirmPassword,
          };
      }
    },
    {
      showPassword: false,
      showConfirmPassword: false,
    }
  );

  console.log("state =", state);

  const { control, getValues, handleSubmit } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const inputValues: {
    labelText: string;
    name: string;
    placeholder: string;
    rules: object;
    type?: "password" | "text";
  }[] = [
    {
      labelText: "Username",
      name: "username",
      placeholder: "LetMin",
      rules: {
        required: "Username is required",
        minLength: {
          value: 2,
          message: "username needs to be at least 2 characters",
        },
        maxLength: {
          value: 25,
          message: "username can not be more than 25 characters",
        },
      },
    },
    {
      labelText: "Email",
      name: "email",
      placeholder: "email@letphil.com",
      rules: {
        required: "Email is required",
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: "invalid email address",
        },
      },
    },
    {
      labelText: "Password",
      name: "password",
      placeholder: "••••••••••",
      rules: {
        required: "Password is required",
        pattern: {
          value:
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          message:
            "Minimum eight, at least one uppercase letter, one lowercase letter, one number and one special character",
        },
      },
      type: "password",
    },
    {
      labelText: "Confirm Password",
      name: "confirmPassword",
      placeholder: "••••••••••",
      rules: {
        required: "Password is required",
        validate: (value: string) =>
          value === getValues("password") || "Passwords do not match",
      },
      type: "password",
    },
  ];

  return (
    <div className="container p-4">
      {inputValues.map((inputValue, idx) => (
        <FormInput
          key={`${inputValue.name}-${idx.toString()}`}
          name={inputValue.name}
          labelText={inputValue.labelText}
          placeholder={inputValue.placeholder}
          rules={inputValue.rules}
          control={control as unknown as Control<FieldValues>}
          {...((inputValue.name === "password" ||
            inputValue.name === "confirmPassword") && {
            show: () =>
              dispatch({
                type:
                  inputValue.name === "password"
                    ? "SHOW_PASSWORD"
                    : "SHOW_CONFIRM_PASSWORD",
              }),
          })}
          {...((inputValue.name === "password" ||
            inputValue.name === "confirmPassword") && {
            type: !state[
              inputValue.name === "password"
                ? "showPassword"
                : "showConfirmPassword"
            ]
              ? "password"
              : undefined,
          })}
        />
      ))}
      <button
        className="btn"
        onClick={handleSubmit(async (data) => {
          console.log("vals =", data);
        })}
      >
        submit
      </button>
    </div>
  );
}

// const watchedUsername = watch("username");

// useEffect(() => {
//   console.log("watchedUsername =", watchedUsername);
// }, [watchedUsername]);
