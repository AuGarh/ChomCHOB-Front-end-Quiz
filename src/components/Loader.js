import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loader = () => {
    return (
        <Spinner
            animation='grow'
            role='status'
            style={{
                position: 'fixed',
                left: 'calc(50% - 50px)',
                top: 'calc(50% - 50px)',
                width: '5rem',
                height: '5rem',
                color: '#FF6F61'
            }}
        />
    )
}

export default Loader
