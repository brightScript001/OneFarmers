import { useForm } from "react-hook-form";
import Button from "../ui/Button";
import Form from "../ui/Form";
import Input from "../ui/Input";
import FormRow from "../ui/FormRow";
import { Title, Subtitle } from "../ui/Title";

function ResetForm({ onSuccess }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const password = watch("password");

  const onSubmit = async (data) => {
    // Call API to reset password
    console.log("Password reset successfully", data);
    onSuccess();
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormRow>
          <Title>Reset password</Title>
          <Subtitle>
            Create a strong password to keep your account secure.
          </Subtitle>
        </FormRow>
        <FormRow label="New Password" error={errors?.password?.message}>
          <Input
            type="password"
            id="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
              maxLength: {
                value: 20,
                message: "Password cannot exceed 20 characters",
              },
              pattern: {
                value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/,
                message:
                  "Password must include upper and lower case letters, a number, and a special character",
              },
            })}
          />
        </FormRow>

        <FormRow
          label="Confirm Password"
          error={errors?.confirmPassword?.message}
        >
          <Input
            type="password"
            id="confirmPassword"
            {...register("confirmPassword", {
              required: "Confirm Password is required",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
          />
        </FormRow>

        <FormRow>
          <Button type="submit">Reset Password</Button>
        </FormRow>
      </Form>
    </div>
  );
}

export default ResetForm;
