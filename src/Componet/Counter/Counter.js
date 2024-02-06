'use client'
import React, { useState } from 'react';

const Counter = () => {
    const [counter,setconter]=useState(0)
    
    return (
        <div>
            <h1>This counter:{counter}</h1>
            <button className='btn lg:border-t-pink-600' onClick={()=>setconter(counter+1)}>incress</button>
            <button className='btn ml-9' onClick={()=>setconter(counter-1)}>decreace</button>
           
        </div>
    );
};

export default Counter;