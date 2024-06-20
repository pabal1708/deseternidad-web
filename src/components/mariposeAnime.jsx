import React from 'react';
import Image from "next/image";
import { isMobile } from "react-device-detect";

const FuturisticButterflyAnimation = () => {

    const imgSizes = isMobile
    ? { width: "320", height: "320" }
    : { width: "640", height: "640" };

  return (
    <div className="image-container">
           <Image
          className="butterfly-image"
          src="/Mariposa.png"
          width={imgSizes.width}
          height={imgSizes.height}
          />
    </div>
  );
}

export default FuturisticButterflyAnimation;