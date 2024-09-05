import { useForm } from "react-hook-form";
import { useState } from "react";
import Button from "../ui/Button";
import Form from "../ui/Form";
import FormRow from "../ui/FormRow";
import Input from "../ui/Input";
import { useNavigate } from "react-router-dom";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

function SignupForm() {
  const {
    register,
    formState: { errors },
    getValues,
  } = useForm<FormValues>();
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  return (
    <Form>
      <FormRow label="First Name" error={errors.firstName?.message}>
        <Input
          type="text"
          id="firstName"
          value={formValues.firstName}
          {...register("firstName", { required: "This field is required" })}
          onChange={(e) =>
            setFormValues({ ...formValues, firstName: e.target.value })
          }
        />
      </FormRow>

      <FormRow label="Last Name" error={errors.lastName?.message}>
        <Input
          type="text"
          id="lastName"
          value={formValues.lastName}
          {...register("lastName", { required: "This field is required" })}
          onChange={(e) =>
            setFormValues({ ...formValues, lastName: e.target.value })
          }
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
        error={errors.passwordConfirm?.message}
      >
        <Input
          type="password"
          id="passwordConfirm"
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              value === getValues().password || "Passwords need to match",
          })}
        />
      </FormRow>

      <Button type="submit">Create Account</Button>
    </Form>
  );
}

export default SignupForm;
