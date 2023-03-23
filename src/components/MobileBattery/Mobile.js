import React, { useState } from 'react';
import './Mobile.css'

const Mobile = () => {
    const [count, setCount] = useState(100);
    const chargeRemaining = () => count > 0 ? setCount(count-10) : count;
    return (
        <div className='mobile-div'>
            <h4>Remaining Charge: {count}%</h4>
            <button className='btn-battery' onClick={chargeRemaining}>Battery down</button>
        </div>
    );
};

export default Mobile;