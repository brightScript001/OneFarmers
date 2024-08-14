import { useState } from "react";
import Row from "../ui/Row";
import ResetForm from "./ResetPasswordForm";
import ResetSuccess from "./ResetPasswordSuccess";

function ResetPasswordIndex() {
  const [isResetSuccessful, setIsResetSuccessful] = useState(false);

  const handleSuccess = () => {
    setIsResetSuccessful(true);
  };

  return (
    <Row>
      {isResetSuccessful ? (
        <ResetSuccess />
      ) : (
        <ResetForm onSuccess={handleSuccess} />
      )}
    </Row>
  );
}

export default ResetPasswordIndex;
