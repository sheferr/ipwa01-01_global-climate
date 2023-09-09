import React from 'react';
import { useRouteError } from 'react-router-dom';


export default function Error() {
    const error = useRouteError();
    console.error(error);


    return (
        <React.Fragment>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </React.Fragment>
    )
}