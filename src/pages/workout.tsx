import { useEffect, useState } from 'react'
import UserCard from '../components/TrainingItem'


function App() {
  const [training, setTraining] = useState(null)
  
  const getTraining = async () => {
    // const req = await fetch("http://188.68.247.208:8080/training", {method: "GET"})
    // const data = await req.json()
    // console.log(data)
    // setTraining(data)
    console.log(training)
  }
  
   useEffect(() => {
     getTraining()
   }, []);

   return (
    <div className='trainingView'>
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
    </div>
  );
}

export default App;
