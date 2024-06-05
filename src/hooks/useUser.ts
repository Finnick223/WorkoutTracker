// import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { jwtDecode } from "jwt-decode";


export const useUser = () => {
    // const [ currentUser, setCurrentUser ] = useState(null)
    const navigate = useNavigate()

    // function mapUserProperties ({ id, username, email, isAdmin }: any) {
    //     return {
    //         id, 
    //         username,
    //         email,
    //         isAdmin,
    //     }
    // }

    const login = (token: any) => {
        localStorage.setItem('token', token)
        // const userData = jwtDecode(token)
        // setCurrentUser(userData.sub)
        navigate('/', { replace: true  })
    }

    const logout = () => {
        localStorage.removeItem('token')
        // setCurrentUser(null)
        navigate('/', { replace: true })
    }

    return {
            // currentUser, 
            login,
            logout
        }
}