import { useForm } from "react-hook-form";
import Button from "../ui/Button";
import Form from "../ui/Form";
import FormRow from "../ui/FormRow";
import Input from "../ui/Input";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../store";
import { createUser } from "../slices/userSlice";
import { useDispatch } from "react-redux";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

function SignupForm() {
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
    getValues,
  } = useForm<FormValues>();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const { firstName, lastName, email, password, confirmPassword } = watch();

  function onSubmit() {
    if (!firstName || !lastName || !email || !password) return;
    dispatch(createUser(firstName, lastName, email, password));
    navigate("/verify-email");
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="First Name" error={errors.firstName?.message}>
        <Input
          type="text"
          id="firstName"
          {...register("firstName", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Last Name" error={errors.lastName?.message}>
        <Input
          type="text"
          id="lastName"
          {...register("lastName", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Email Address" error={errors.email?.message}>
        <Input
          type="email"
          id="email"
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid email address",
            },
          })}
        />
      </FormRow>

      <FormRow label="Password" error={errors.password?.message}>
        <Input
          type="password"
          id="password"
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characters",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Re-enter password"
        error={errors.confirmPassword?.message}
      >
        <Input
          type="password"
          id="passwordConfirm"
          {...register("confirmPassword", {
            required: "This field is required",
            validate: (value) =>
              value === getValues("password") || "Passwords need to match",
          })}
        />
      </FormRow>

      <Button type="submit">Create Account</Button>
    </Form>
  );
}

export default SignupForm;
