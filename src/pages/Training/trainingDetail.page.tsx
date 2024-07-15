import { Link } from 'react-router-dom';
import Table from '../../components/WorkoutTable.component';
import { CssBaseline } from '@mui/material';

function App() {
  return (
    <>
      <CssBaseline />
      <section>
        <Link to=".." relative="path" className="back-button">
          &larr; <span>Back to all trainings</span>
        </Link>
      </section>
      <Table />
    </>
  );
}

export default App;
