import { useNavigate } from "react-router-dom";
import CreateProduct from "./CreateProduct";

const CreateProductWrapper: React.FC = () => {
  const navigation = useNavigate();

  const handleClose = () => {
    navigation("/farmer-dashboard/marketplace");
  };
  return <CreateProduct title="Your Product" onClose={handleClose} />;
};

export default CreateProductWrapper;
