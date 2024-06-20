// Home.js
import Grid from '@mui/material/Grid';
import Sidebar from './components/sidebar/page';
import PageUm from './pages/paginaum/page';

export default function Home() {
  return (
    <Grid container sx={{bgcolor: 'white'}}>
      <Grid item xs={12} sm={5} md={4} lg={3}>
        <Sidebar/>
      </Grid>
      <Grid item xs={12} sm={7} md={8} lg={9} xl={10}>
        <PageUm/>
      </Grid>
    </Grid>
  );
}
