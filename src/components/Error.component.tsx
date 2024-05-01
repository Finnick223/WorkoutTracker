import { useRouteError } from "react-router-dom"

export default function Error() {
    const error: any = useRouteError()
    
    return (
        <>
        <h1>Error: {error.message}</h1>
        <pre>{error.status} - {error.statusText}</pre>
        </>
    )
}