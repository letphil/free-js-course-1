import {
  useForm,
  FormProvider,
  useFieldArray,
  useFormContext,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  hobbies: yup.array().of(
    yup.object().shape({
      name: yup.string().required("Hobby is required"),
    })
  ),
  address: yup.object().shape({
    street: yup.string().required("Street is required"),
    city: yup.string().required("City is required"),
  }),
});

const Hobbies = () => {
  const { control, register } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "hobbies",
  });

  return (
    <div>
      {fields.map((field, index) => (
        <div key={field.id}>
          <input {...register(`hobbies.${index}.name`)} placeholder="Hobby" />
          <button type="button" onClick={() => remove(index)}>
            Remove
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={() => append({ name: "playing football" })}
      >
        Add Hobby
      </button>
    </div>
  );
};

const Address = () => {
  const { register } = useFormContext();
  return (
    <div>
      <input {...register("address.street")} placeholder="Street" />
      <input {...register("address.city")} placeholder="City" />
    </div>
  );
};

const App = () => {
  const methods = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Hobbies />
        <Address />
        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
};

export default App;
