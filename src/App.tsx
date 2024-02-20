import './index.css'
import Navbar from './components/Navbar.jsx'
import UserCard from './components/UserCard.jsx'
import WorkoutTable from './components/WorkoutTable.jsx'

function App() {
  return (
    <>
      <Navbar />
      <UserCard 
        username='filipf'
        firstname='filip'
        lastname='ff'
        email='example@gm.com'
      />
      <WorkoutTable />
    </>
  );
}

export default App;



// React.useEffect(() => {
//   const timeoutId = setTimeout(() => {
//       updateNote(tempNoteText)
//   }, 500)
//   return () => clearTimeout(timeoutId)
// }, [tempNoteText])