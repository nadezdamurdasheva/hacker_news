import React from 'react';
import { WrapperErrorLoading } from '../styles/ErrorLoadingStyle';

function LoadingPage() {
    return (
        <WrapperErrorLoading>
            <div className='loader'></div>
        </WrapperErrorLoading>
    )
}

export default LoadingPage;