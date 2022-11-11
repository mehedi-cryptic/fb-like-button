import logo from './logo.svg';
import './App.css';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { useEffect, useState } from 'react';
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

const [users, setUsers]=useState([]);
useEffect(()=> {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res=>res.json())
  .then(data=> setUsers(data))
},[])

const[singleUser, setSingleUser]=useState({});
const [randomUser, setRandomUser]=useState({});
useEffect(()=> {
  fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(res=>res.json())
  .then(data=>setSingleUser(data));


  fetch('https://randomuser.me/api')
  .then(res=>res.json())
  .then(data=>setRandomUser(data.results[0]))
},[])

  return (
    <div className="App">
      <AccessAlarmIcon style={{border: '1px solid black' , margin:'10px', borderRadius:'10px' , padding:'10px'}} onClick={handleAlarm} color={alarmColor} ></AccessAlarmIcon>

      <ThumbUpAltIcon style={{border: '1px solid black' , margin:'10px', borderRadius:'10px' , padding:'10px'}} onClick={handleLike} color={likeColor}> </ThumbUpAltIcon>
      <h2>
        RandomUser:   {randomUser.name && randomUser.name.first}
      </h2>


     {
      users.map( user=> <li> {user.name}</li>)
     }
     <h1>{singleUser.name}</h1>
      
    </div>
  );
}

export default App;
