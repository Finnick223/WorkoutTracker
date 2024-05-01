// import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import Table from '../../components/WorkoutTable.component';


function App() {

    return (
        <>
            <section>
                <Link
                    to=".."
                    relative="path"
                    className="back-button"
                >&larr; <span>Back to all trainings</span></Link>
            </section>
            <Table />
        </>
    )
}

export default App;
