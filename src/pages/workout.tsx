import { useEffect, useState } from 'react'
import UserCard from '../components/TrainingItem'
import { Box, Container, CssBaseline } from '@mui/material';
import axios from 'axios';
import { loginUser } from './login';
function App() {
  const [training, setTraining] = useState(null)
  
  const getTraining = async () => {
    // const req = await fetch("http://188.68.247.208:8080/training", {method: "GET"})
    // const data = await req.json()
    // setTraining(data)
  }
  // const fetchTrainingData = async (creds: any, loginUser: any) => {
  //   const authHeader = {
  //     Authorization: `Basic ${btoa(creds.username + ":" + creds.password)}`
  //   };
  
  //   try {
      // Call loginUser function to authenticate
      // await loginUser(creds);
  //    
  //     const response = await axios.get('http://188.68.247.208:8080/training', {
  //       headers: authHeader
  //     });
  //     setTraining(response.data)
  //     return response.data; // Return the fetched training data
  //   } catch (error) {
  //     console.error('An error occurred while fetching training data:', error);
  //     throw new Error('Problem with fetching training data');
  //   }
  // };

// Example usage:
// loginUser function needs to be called before calling fetchTrainingData
// const credentials = { username: 'yourUsername', password: 'yourPassword' };
// await loginUser(credentials);
// const trainingData = await fetchTrainingData(credentials);
// console.log(trainingData);
// Example usage:
// const credentials = { username: 'yourUsername', password: 'yourPassword' };
// const loginUser = require('./path/to/loginUser'); // Import loginUser function
// const trainingData = await fetchTrainingData(credentials, loginUser);
// console.log(trainingData);
  
   useEffect(() => {
     getTraining()
    //  console.log(training)
   }, []);

   return (
    <> 
      {/* <Container component="main" maxWidth="xs"> */}
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
      {/* </Container> */}
    </>
  );
}

export default App;
