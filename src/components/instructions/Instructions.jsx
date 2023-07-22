import React from 'react'
import './Instructions.scss'

const Instructions = () => {
    return (
        <div className='instructions'>
            <p>
                Press the "add card" button to add the new Card.
            </p>
            <p>
                Use the "sort cards button" to sort the Cards by the Increase.
            </p>
            <p>
                Press an X Icon on the top right to delete them.
            </p>
        </div>
    )
}

export default Instructions