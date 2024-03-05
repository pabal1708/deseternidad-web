/* eslint-disable @next/next/no-img-element */
import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import itemData from "../peopleData/imgs";

import { isMobile } from "react-device-detect";

const PicGallery = () => {
  const imgSizes = isMobile
    ? { width: "320", height: "240" }
    : { width: "800", height: "700" };
  return (
    <div className="imageContainer">
      <div>
        <ImageList
          sx={{ width: imgSizes.width, height: imgSizes.height }}
          variant="masonry"
          cols={5}
          rowHeight={150}
        >
          {itemData.map((item) => (
            <ImageListItem
              key={item.img}
              cols={item.cols || 1}
              rows={item.rows || 1}
            >
              <img
                SrcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </div>
  );
};

export default PicGallery;
