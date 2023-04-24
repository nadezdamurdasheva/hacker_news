import React from 'react';
import { WrapperErrorLoading } from '../styles/ErrorLoadingStyle';

interface ErrorPageProps {
    errorMsg: number | string | undefined;
}

function ErrorPage({ errorMsg }: ErrorPageProps) {
    return (
        <WrapperErrorLoading>
            <h1>{errorMsg}</h1>
            <p>Sorry, an unexpected error has occurred</p>
        </WrapperErrorLoading>
    )
}

export default ErrorPage;