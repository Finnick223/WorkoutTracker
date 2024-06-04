// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// export const useUser = () => {
//     const [ currentUser, setCurrentUser ] = useState(null)
//     const navigate = useNavigate()

//     function mapUserProperties ({ id, username, email, isAdmin }: any) {
//         return {
//             id, 
//             username,
//             email,
//             isAdmin,
//         }
//     }

//     const login = (token: any) => {
//         localStorage.setItem('token', token)

//         const userData = mapUserProperties(jwtDecode(token))
//         // setCurrentUser(userData)
//         navigate('/', { replace: true  })
//     }

//     const logout = () => {
//         localStorage.removeItem('token')
//         setCurrentUser(null)
//         navigate('/', { replace: true })
//     }

//     return {
//             currentUser, 
//             setCurrentUser, 
//             login,
//             logout
//         }
// }