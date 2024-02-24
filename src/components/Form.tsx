import { useState, useId, useEffect } from 'react'
import { FormErrors } from './FormErrors';
import { FormDataInterface } from './Interfaces';


export default function Form() {
    const [formData, setFormData] = useState<FormDataInterface>(
        {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            repasswd: "",
            gender: "",
            country: "",
            agree: true,
            formErrors: { firstName: '', lastName: '', email: '', password: '', repasswd: '' },
            emailValid: false,
            passwordValid: false,
            repasswdValid: false,
            formValid: false
        }
    )
    const id = useId()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type, checked } = e.target as any;
        const val = type === 'checkbox' ? checked : value;
        setFormData(prevData => ({
            ...prevData,
            [name]: val
        }));
    };
    
    useEffect(() => {
        const emailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email);
        const passwordValid = formData.password.length>= 6 ? true : false;
        const repasswdValid = formData.repasswd === formData.password;

            setFormData(prevData => ({
                ...prevData,
                formErrors: {
                    ...prevData.formErrors,
                    email: emailValid ? '' : 'is invalid',
                    password: passwordValid ? '' : 'is too short',
                    repasswd: repasswdValid ? '' : 'does not match'
                },
                emailValid,
                passwordValid,
                repasswdValid,
                formValid: emailValid && passwordValid && repasswdValid
            }));
        }, [formData.email, formData.password, formData.repasswd])
        
        const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
                <option value="USA">USA</option>
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
            <FormErrors formErrors={formData.formErrors} />
            <br />
            <button type="submit" disabled={!formData.formValid}>Submit</button>
        </form>
    )
}