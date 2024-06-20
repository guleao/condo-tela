// PageUm.js
"use client";
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import IconButton from '@mui/material/IconButton';
import { Box, Grid } from '@mui/material';

const columns = [
  { field: 'sistema', headerName: 'Sistema', width: 150, renderHeader: () => (<strong style={{ color: '#1B9F0B' }}>Sistema</strong>) },
  { field: 'subsistema', headerName: 'Subsistema', width: 150, renderHeader: () => (<strong style={{ color: '#1B9F0B' }}>Subsistema</strong>) },
  { field: 'elemento', headerName: 'Elemento', width: 150, renderHeader: () => (<strong style={{ color: '#1B9F0B' }}>Elemento</strong>) },
  { field: 'codigo', headerName: 'Código do Elemento', width: 200, renderHeader: () => (<strong style={{ color: '#1B9F0B' }}>Código do Elemento</strong>) },
  { field: 'quantidade', headerName: 'Quantidade', width: 150, renderHeader: () => (<strong style={{ color: '#1B9F0B' }}>Quantidade</strong>) },
];

// Especifica o tipo para 'rows'
const rows: Array<{ [key: string]: any }> = [
  { id: 1, sistema: '8 - Civil', subsistema: 'Prevenção à saúde', elemento: 'Academia', codigo: '08.07.08', quantidade: 10 },
  { id: 2, sistema: '2 - Hidráulico', subsistema: 'Combate a Incêndio', elemento: 'Acionador manual', codigo: '02.02.09', quantidade: 5 },
];

export default function PageUm() {
  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      bgcolor: '#ffffff', 
      height: '100vh', 
      width: '100%',
     
    }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={12} >
          <Box sx={{ height: 400, width: '80%' }}>
            <DataGrid
              rows={rows}
              columns={columns}
            />
            <IconButton color="primary" aria-label="add to shopping cart">
              <AddCircleOutlineIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
