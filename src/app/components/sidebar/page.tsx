"use client";

import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Drawer from '@mui/material/Drawer';

export default function Sidebar() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event: React.MouseEvent<HTMLElement>, index: number) => {
    setSelectedIndex(index);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
            bgcolor: '#E6E6E6',
          },
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
          {/* Insira sua logo aqui */}
          <img src="/images/logo.png" alt="Logo" />
        </Box>
        <List>
          {['Inicio', 'Documentos', 'Elementos'].map((text, index) => (
            <ListItem 
              button 
              key={text}
              selected={selectedIndex === index}
              onClick={(event) => handleListItemClick(event, index)}
              sx={{ bgcolor: selectedIndex === index ? '#1B9F0B !important' : 'inherit', borderRadius: "0px 5px 5px 0px",  pr: selectedIndex === index ? '30px' : '0px' }}
            >
              <ListItemText primary={text} sx={{ color: selectedIndex === index ? '#ffffff' : 'inherit' }} />
            </ListItem>
          ))}
        </List>
        <Box sx={{ mt: 'auto' }}>
  <List>
    <ListItem 
      button 
      onClick={() => {
        // Adicione a lógica para sair aqui
      }}
    >
      <ListItemText primary="Sair" sx={{ color: '#ff0000', fontWeight: 'bold' }} /> {/* Deixa o texto em negrito e vermelho */}
    </ListItem>
  </List>
</Box>
      </Drawer>
    </Box>
  );
}
