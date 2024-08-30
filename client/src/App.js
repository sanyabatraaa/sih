import { AppBar, Typography } from '@mui/material';
import './App.css';
import VideoPlayer from './components/VideoPlayer';
import Options from './components/Options';
import Notifications from './components/Notifications';


function App() {
  return (
    <div className="App">
      <AppBar position="static" color="inherit">
        <Typography variant="h5" align="center">Video Chat</Typography>
      </AppBar>
      <VideoPlayer/>
      <Options>
        <Notifications/>
      </Options>
    </div>
  
  );
}

export default App;
