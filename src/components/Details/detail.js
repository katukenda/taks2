import React from 'react';


const detail = (props) => {
    return (
        <div >
            <p onClick={props.click}>{props.name}</p>
        </div>
    )
};

export default detail;