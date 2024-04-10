import { useEffect, useState } from 'react'
import TrainingCard from '../components/TrainingItem'
import { Box, CssBaseline } from '@mui/material';
import axios from 'axios';
import { loginUser } from './login';
function App() {
  const [training, setTraining] = useState([])
  
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
      console.log(response.data)
      setTraining(response.data)
      return response.data; // Return the fetched training data
    } catch (error) {
      console.error('An error occurred while fetching training data:', error);
      throw new Error('Problem with fetching training data');
    }
  };
  
   useEffect(() => {
    //  getTraining()
    // fetchTrainingData({username: 'admin', password: 'admin'})
     console.log(training)
   }, []);

   const trainingList = training && training.map(train => {
    return (
      <TrainingCard 
        id={train.id}
        trainingName={train.name}
        category={train.description}
        date="09.09.2007"
      />
    )
  })
   return (
    <> 
        <CssBaseline />
        <Box sx={{display: "inline-flex", textAlign: "center"}}>
          {trainingList}
          <TrainingCard 
            id="1"
            trainingName="trening1"
            category="silowka"
            date="11.11.2011"
            />
          <TrainingCard 
            id="2"
            trainingName="dupa"
            category="cardio"
            date="13.11.2011"
            />
          <TrainingCard 
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
