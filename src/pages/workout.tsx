import { useEffect, useState } from 'react'
import UserCard from '../components/TrainingItem'
import { Box, Container, CssBaseline } from '@mui/material';
import axios from 'axios';
import { loginUser } from './login';
import { Password } from '@mui/icons-material';
function App() {
  const [training, setTraining] = useState(null)
  
  // const getTraining = async () => {
    // const req = await fetch("http://188.68.247.208:8080/training", {method: "GET"})
    // const data = await req.json()
    // setTraining(data)
  // }
  const fetchTrainingData = async (creds: any) => {
    const authHeader = {
      Authorization: `Basic ${btoa(creds.username + ":" + creds.password)}`
    };
  
    try {
      await loginUser(creds);

      const response = await axios.get('http://188.68.247.208:8080/training', {
        headers: authHeader
      });
      setTraining(response.data)
      return response.data; // Return the fetched training data
    } catch (error) {
      console.error('An error occurred while fetching training data:', error);
      throw new Error('Problem with fetching training data');
    }
  };
  
   useEffect(() => {
    //  getTraining()
    fetchTrainingData({username: 'admin', password: 'admin'})
     console.log(training)
   }, []);

   return (
    <> 
        <CssBaseline />
        <Box sx={{display: "inline-flex", textAlign: "center"}}>
          <UserCard 
            id="1"
            trainingName="trening1"
            category="silowka"
            date="11.11.2011"
            />
          <UserCard 
            id="2"
            trainingName="dupa"
            category="cardio"
            date="13.11.2011"
            />
          <UserCard 
            id="3"
            trainingName="trening3"
            category="hipertrofia"
            date="15.11.2011"
            />
        </Box>
    </>
  );
}

export default App;
