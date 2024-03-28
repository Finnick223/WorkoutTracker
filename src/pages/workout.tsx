import { useEffect, useState } from 'react'
import UserCard from '../components/TrainingItem'
import { Box, Container, CssBaseline } from '@mui/material';


function App() {
  // const [training, setTraining] = useState(null)
  
  const getTraining = async () => {
    // const req = await fetch("http://188.68.247.208:8080/training", {method: "GET"})
    // const data = await req.json()
    // setTraining(data)
  }
  
   useEffect(() => {
     getTraining()
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
