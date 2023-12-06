import React from 'react';

const LoadingSpinner = ({ loading }: {loading: boolean}) => (loading ? (
    <div className='loading-spinner-container'>
        <div className='loading-spinner' />
    </div>
) : null);

export default LoadingSpinner;
