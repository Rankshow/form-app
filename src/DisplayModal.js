import React, {useEffect} from 'react';

const DisplayModal = ({modalContent, closeGaps}) =>{
    useEffect(() => {
        setTimeout(() =>{
            closeGaps();
        }, 2000)
    })
    return (
        <div className='modal'>
            <p>{modalContent}</p>
        </div>
    )
}

export default DisplayModal;