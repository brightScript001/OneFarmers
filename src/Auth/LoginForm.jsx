import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Button from "../ui/Button";
import Form from "../ui/Form";
import Input from "../ui/Input";
import FormRow from "../ui/FormRow";
import StyledSelect from "../ui/StyledSelect";

function LoginForm() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (data) => {
    if (!data.email || !data.password || !data.role) return;
    setIsLoading(true);

    console.log("Form Submitted:", data);

    setIsLoading(false);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Role" error={errors.role?.message}>
        <Controller
          name="role"
          control={control}
          defaultValue=""
          rules={{ required: "Role is required" }}
          render={({ field }) => (
            <StyledSelect {...field} id="role" disabled={isLoading}>
              <option value="">Select role</option>
              <option value="buyer">Buyer</option>
              <option value="seller">Seller</option>
            </StyledSelect>
          )}
        />
      </FormRow>

      <FormRow label="Email address" error={errors.email?.message}>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: "Invalid email address",
            },
          }}
          render={({ field }) => (
            <Input
              type="email"
              id="email"
              autoComplete="username"
              disabled={isLoading}
              {...field}
            />
          )}
        />
      </FormRow>

      <FormRow label="Password" error={errors.password?.message}>
        <Controller
          name="password"
          control={control}
          defaultValue=""
          rules={{ required: "Password is required" }}
          render={({ field }) => (
            <Input
              type="password"
              id="password"
              autoComplete="current-password"
              disabled={isLoading}
              {...field}
            />
          )}
        />
      </FormRow>

      <FormRow>
        <Button disabled={isLoading}>
          {!isLoading ? "Log in" : "Loading..."}
        </Button>
      </FormRow>
    </Form>
  );
}

export default LoginForm;
