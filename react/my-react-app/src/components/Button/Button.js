import React from 'react'

function Button(props) {
    return (
        <div>
            <button
                style={{ backgroundColor: props.buttoncolor }}
            >
                {props.buttonname}
            </button>
        </div>
    )
}

export default Button
