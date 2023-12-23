import React, {useState, useEffect} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {  CardActionArea } from '@mui/material';

export default function CardCharacters({ charValue }) {
 const [animationClass, setAnimationClass]= useState("char-card");

 useEffect(() => {
  setAnimationClass("char-card")
  setTimeout(()=>{setAnimationClass("char-card-animation")}, 0);
  
 }, [charValue])

 console.log(animationClass)
 
  return (
    <Card sx={{ maxWidth: 345 }} className={animationClass} variant="outlined">
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={charValue?.picture}
          alt="char image"
        />
        <CardContent>
          <Typography variant="body3" color="text.secondary">Nacimiento</Typography>
          <Typography variant="h6" color="text.secondary">
             {charValue?.birth}
          </Typography>
          <Typography variant="body3" color="text.secondary">Habilidad especial</Typography>
          <Typography variant="h6" color="text.secondary">
             {charValue?.skill}
          </Typography>
          <Typography variant="body3" color="text.secondary">Instrumento</Typography>
          <Typography variant="h6" color="text.secondary">
             {charValue?.role}
          </Typography>
          <Typography variant="body3" color="text.secondary">Apodo</Typography>
          <Typography variant="h6" color="text.secondary">
             {charValue?.aka}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
