import React from "react";
import Image from "next/image";
import { isMobile } from "react-device-detect";

const ImgHandler = () => {
  const imgSizes = isMobile
    ? { width: "320", height: "240" }
    : { width: "640", height: "480" };
  return (
    <>
      <div className="image-container">
        <Image
          className="img-container-mati"
          src="/nico.png"
          width={imgSizes.width}
          height={imgSizes.height}
        />
        <Image
          className="img-container-sole"
          src="/pau.png"
          width={imgSizes.width}
          height={imgSizes.height}
        />
        <Image
          className="img-container-francia"
          src="/francia.png"
          width={imgSizes.width}
          height={imgSizes.height}
        />
        <Image
          className="img-container-yoe"
          src="/yoe.png"
          width={imgSizes.width}
          height={imgSizes.height}
        />
        <Image
          className="img-container-pol"
          src="/pol.png"
          width={imgSizes.width}
          height={imgSizes.height}
        />
        <Image
          className="img-container-lulu"
          src="/lulu.png"
          width={imgSizes.width}
          height={imgSizes.height}
        />
      </div>
    </>
  );
};

export default ImgHandler;
