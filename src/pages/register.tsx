import { useState, useId } from 'react'
//TODO  Walidacja formularza, checkbox i select nie dziala
function App() {
    const [formData, setFormData] = useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            repasswd: "",
            gender: "",
            country: "",
            agree: true
        }
    )
    const id = useId()

    const handleChange = (e: any) => {
        const {name, value} = e.target
        setFormData(prevData => {
            return {
                ...prevData,
                [name]: value,
            }
        })
    }
    console.log(formData)
    const handleSubmit = (e: any) => {
        e.preventDefault()
        console.log(formData)
    }    
    return (
        <form className="form--register" onSubmit={handleSubmit}>
            <label htmlFor={id + "-firstName"}>First Name</label>
            <input
                type="text"
                name="firstName"
                id={id + "-firstName"}
                onChange={handleChange}
                value={formData.firstName}
            />
            <label htmlFor={id + "-lastName"}>Last Name</label>
            <input
                type="text"
                name="lastName"
                id={id + "-lastName"}
                onChange={handleChange}
                value={formData.lastName}
            />
            <label htmlFor={id + "-email"}>Email</label>
            <input
                type="email"
                name="email"
                id={id + "-email"}
                onChange={handleChange}
                value={formData.email}
            />
            <label htmlFor={id + "-password"}>Password</label>
            <input
                type="password"
                name="password"
                id={id + "-password"}
                onChange={handleChange}
                value={formData.password}
            />
            <label htmlFor={id + "-repasswd"}>Repassword</label>
            <input
                type="password"
                name="repasswd"
                id={id + "-repasswd"}
                onChange={handleChange}
                value={formData.repasswd}
            />
            <br />
            
            <fieldset>
                <legend>Gender</legend>
                <input 
                    type="radio"
                    name="gender"
                    value="men"
                    id={id + "-men"}
                    onChange={handleChange}
                    checked={formData.gender === "men"}
                />
                <label htmlFor={id + "-men"}>Men</label>
                <br />
                
                <input 
                    type="radio"
                    name="gender"
                    value="women"
                    id={id + "-women"}
                    onChange={handleChange}
                    checked={formData.gender === "women"}
                />
                <label htmlFor={id + "-women"}>Women</label>
                <br />
            </fieldset>
            <br />
            
            <label htmlFor={id + "-country"}>Where are you from?</label>
            <br />
            <select 
                name="country"
                id={id + "-country"}
                value={formData.country}
                onChange={handleChange}
            >
                <option value="Poland">Poland</option>
            </select>
            <section>
            <input 
                type="checkbox" 
                name="agree"
                id={id + "-check"}
                onChange={handleChange}
                checked={formData.agree}
            />
            <label htmlFor='{id + "-check"}'> I agree with bla bla</label>
            </section>
            <br />
            <br />
            <button>Submit</button>
        </form>
    )
  }
  
  export default App;
  