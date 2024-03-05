import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Image from "next/image";

const Gallery = () => {
    const [elevation, setElevation] = React.useState(0)

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 128,
          height: 128,
        },
      }}
    >
      <Paper elevation={elevation} onMouseEnter={()=> setElevation(10)} onMouseLeave={()=>{setElevation(0)}}>
      <Image
          src="/sole.png"
          width="128"
          height="128"
        />
        </Paper>
    </Box>
  );
};

export default Gallery;
