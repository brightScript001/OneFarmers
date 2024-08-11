import { useState } from "react";
import Form from "../ui/Form";
import Input from "../ui/Input";
import Button from "../ui/Button";
import FormRowVertical from "../ui/FormRowVertical";
import { Title, Subtitle } from "../ui/Title";

function ForgotPasswordForm({ onSendEmail }) {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Password reset link sent to:", email);
    onSendEmail();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>Forgot Password</Title>
      <Subtitle>
        We will help you access your account again in a few steps.
      </Subtitle>
      <FormRowVertical>
        <Input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button type="submit">Send Password Reset Link</Button>
      </FormRowVertical>
    </Form>
  );
}

export default ForgotPasswordForm;
