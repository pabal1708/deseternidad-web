import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import MusicNoteIcon from '@mui/icons-material/MusicNote';


const DataList = ({ data }) => {

  const handleLocationClick = (ubicacion) => {
    // Abrir la ubicación en Google Maps al hacer clic
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ubicacion)}`, '_blank');
  };

  return (
    <div>
      <h2>Fechas En Vivo</h2>
      <ol className="data-list">
        {data.map((item, index) => (
          <li key={index}>
          <div>            <strong>Fecha y Hora: </strong> {item.fechaHora}<br />
            <strong>Nombre del Lugar: </strong> {item.nombreLugar}<br />
            <strong>Ubicación: </strong> 
            <span className="location-link" onClick={() => handleLocationClick(item.ubicacion)}>
              Ver en Google Maps <i className="fas fa-map-marker-alt"></i>
            </span><br />
            <span className="music-icon">
              <i className="fas fa-music"></i> 
            </span>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default DataList;