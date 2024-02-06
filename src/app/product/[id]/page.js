import React from 'react';

const page = ({params,searchParams}) => {
    console.log(params)
    return (
        <div>
            <h1>This is dynamic Route : {params.id}</h1>
            
        </div>
    );
};

export default page;