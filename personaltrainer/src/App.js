import './App.css';
import Customers from './components/Customerslist';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Training from './components/Training';
import Button from "@mui/material/Button";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {


  return (
        <div className="App">
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
           
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          PersonalTrainer 
          </Typography>
         
        </Toolbar>
      </AppBar>
    </Box>

    <BrowserRouter>
   
      <Link to="/"> <Button variant="contained" >Trainings</Button></Link>{' '}
      
      <Link to="/customers"><Button variant="contained" >Customers</Button></Link>{' '}
      

      <Routes>
        <Route path="/" element={<Training/>} />
        <Route path="/customers" element={<Customers/>} />
      </Routes>
      </BrowserRouter> 
   </div>
);
}

export default App;
