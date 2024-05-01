export default function errorText(error: any) {

    if (error) {   
        return(
            <> 
                <h1>Error: {error.message}</h1>
                <pre>{error.status} - {error.statusText}</pre>
            </>
)}}
