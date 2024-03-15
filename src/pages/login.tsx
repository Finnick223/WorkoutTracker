// import { useState } from 'react'
import {
  // useLoaderData,
  useNavigation,
  Form,
  redirect,
  useActionData
} from "react-router-dom"

const loginUser = async (creds: any) => {
  const headers = new Headers();
  headers.set('Authorization', 'Basic ' + btoa(creds.username + ":" + creds.password));

  const req = await fetch('http://188.68.247.208:8080/user', {
    method: 'GET', 
    headers: headers
  })
  try{
    const response = await req.json(); 
    console.log(response)
  }
  catch(err){
    console.error('Wystąpił błąd:', err);
    throw new Error('Problem z komunikacją z API');
  }
}

export async function action({ request }: any) {
  const formData = await request.formData()
  const username = formData.get("username")
  const password = formData.get("password")
  const pathname = new URL(request.url)
      .searchParams.get("redirectTo") || "/workout"
  
  try {
      await loginUser({ username, password })
      return redirect(pathname)
  } catch(err: any) {
      return err.message
  }
}

function App() {
  const navigation = useNavigation()
  const errorMessage = useActionData()


    return (
      <>
        {errorMessage && <h3>errorMessage</h3>}
        <Form 
          className="form--register"
          method="post" 
          replace
        >
            <label>Username</label>
            <input
                type="text"
                name="username"
            />
            <label>Password</label>
            <input 
            type="password"
            name="password"
            />
            <br/>
            <button
                disabled={navigation.state === "submitting"}
            >
                {navigation.state === "submitting"
                    ? "Logging in..."
                    : "Log in"
                }
            </button>
        </Form>
      </>
    );
  }
  
  export default App;
  