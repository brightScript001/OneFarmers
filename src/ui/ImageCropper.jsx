import { useRef, useState } from "react";
import getCroppedImg from "../utils/cropImageUtils";
import styled from "styled-components";
import Cropper from "react-easy-crop";
import { Button } from "@mui/material";

const ImageCropperWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
`;

const StyledButton = styled(Button)`
  position: absolute;
  bottom: 0;
  left: 0;
`;

const ImageCropper = ({ image, onCrop }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const crooperRef = useRef(null);

  const handleCropComplete = async (crop) => {
    try {
      const croppedImage = await getCroppedImg(image, crop);
      onCrop(croppedImage);
    } catch (error) {
      console.log("cropped failed", error);
    }
  };
  return (
    <ImageCropperWrapper>
      <Cropper
        image={image}
        crop={crop}
        zoom={zoom}
        aspect={4 / 3}
        onCropChange={setCrop}
        onZoomChange={setZoom}
        onCropComplete={handleCropComplete}
      />

      <StyledButton
        variant="contained"
        color="primary"
        onClick={() => handleCropComplete(crop)}
      >
        Crop Image
      </StyledButton>
    </ImageCropperWrapper>
  );
};

export default ImageCropper;
