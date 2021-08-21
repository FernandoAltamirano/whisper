import { useState } from "react";

function useSelectedImage() {
  const [imgURL, setImgURL] = useState(null);

  const chargeImage = function (file) {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (e) => {
      setImgURL(e.target.result);
    };
  };

  return [imgURL, chargeImage, setImgURL];
}

export default useSelectedImage;
