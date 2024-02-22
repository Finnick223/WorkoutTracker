// import { useState } from 'react'
function App() {
    return (
      <>
        <form className="form--register">
            <label>Email</label>
            <input 
            type="email"
            name="email"
            />
            <label>Password</label>
            <input 
            type="password"
            name="password"
            />
            <br/>
            <button>Submit</button>
        </form>
      </>
    );
  }
  
  export default App;
  