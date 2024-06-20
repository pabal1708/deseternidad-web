import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import lives from '../peopleData/lives'

export default function FolderList() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, }}>
        {lives.map(({ name, date, zone })=>(
      <ListItem key={name}>
        <ListItemAvatar>
          <Avatar>
            <MusicNoteIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={name} secondary={date} />
      </ListItem>
      ))}
    </List>
  );
}