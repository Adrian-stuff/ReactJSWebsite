import React from 'react'

const Progress = ({ done }) => {
    return ( 
        <div className="progress">
            <div className="progress-bar" role="progressbar" style={{width: `${done}%`}} aria-valuenow={done} aria-valuemin="0" aria-valuemax="100"></div>
        </div>
    )
}

export default Progress;