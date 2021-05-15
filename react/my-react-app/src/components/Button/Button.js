import React from 'react'

function Button(props) {
    return (
        <div>
            <button
               onClick={props.kojo}
                style={{ backgroundColor: props.buttoncolor, 
                    padding:props.btnPadding, margin:props.btnMargin }}
            >
                {props.buttonname}
            </button>
        </div>
    )
}

export default Button
