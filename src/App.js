import logo from './logo.svg';
import './App.css';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { useState } from 'react';
//import ThreeDRotation from '@mui/icons-material/ThreeDRotation';


function App() {

  const [likeColor, setlikeColor]=useState('');
  const handleLike=()=>{
    const color=likeColor ? '' : 'primary';
    setlikeColor(color);

  }

  const [alarmColor, setAlarmColor]=useState('');
  const handleAlarm=()=>{
    const coloor=alarmColor? '' : 'secondary';
    setAlarmColor(coloor);

  }


  return (
    <div className="App">
      <AccessAlarmIcon style={{border: '1px solid black' , margin:'10px', borderRadius:'10px' , padding:'10px'}} onClick={handleAlarm} color={alarmColor} ></AccessAlarmIcon>

      <ThumbUpAltIcon style={{border: '1px solid black' , margin:'10px', borderRadius:'10px' , padding:'10px'}} onClick={handleLike} color={likeColor}> </ThumbUpAltIcon>
      
    </div>
  );
}

export default App;
