import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import characters from '../peopleData/characters'
import CardCharacters from './card'


export default function TabPeople() {
  const [value, setValue] = React.useState("Ema");
  const [charValue, setCharValue] = React.useState()

  const handleChange = (e, newValue) => {
    setValue(newValue);
    setCharValue(characters.find(e => e.name === value))
  };
 

  React.useEffect(() => {
  setCharValue(characters.find(e => e.name === value))
},[value])

  return (
    <>
    <Box
      sx={{
        flexGrow: 1,
        maxWidth: { xs: 400, sm: 880 },
        bgcolor: 'rgb(126, 77, 102)',
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons={true}
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
        sx={{
            [`& .${tabsClasses.scrollButtons}`]: {
              '&.Mui-disabled': { opacity: 0.3 },
            },
        }}
      >
        {characters.map(({ name }) => (
        <Tab value={name} key={name} label={name}/>
        ))}
      </Tabs>
    </Box>
    <>{charValue && (        
    <CardCharacters charValue={charValue}/>
    )}
    </>
    </>
  );
}