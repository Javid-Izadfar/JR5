import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { setLocale } from "yup";

const App = () => {
  setLocale({
    mixed: {
      default: "چی شد",
      required: "حتما باید پر بشه",
    },
    string: {
      min: "حداقل ${min} باشه",
    },
  });

  const schema = yup.object({
    first_name: yup.string().required().min(4),
    age: yup.number().min(18),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      first_name: "",
      age: 0,
    },
  });

  console.log(watch("first_name"));

  const onSubmit = (data: Record<string, number | string>) => {
    console.log(+data.age);
    console.log(data.first_name);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("first_name")} />
        <input {...register("age")} type="number" />
        <button type="submit">Submit</button>
        {errors.first_name && <div>{errors.first_name.message}</div>}
        {errors.age && <div>{errors.age.message}</div>}
      </form>
    </div>
  );
};

export default App;
