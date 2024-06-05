import { CircularProgress, Typography } from '@mui/material';
import { useUser } from '../hooks/useUser';

const LogoutUser = () => {
    const { logout } = useUser()
    logout()
    return (
        <>
            <Typography>logging out....</Typography>
            <CircularProgress />
        </>
    )
}

export default LogoutUser;