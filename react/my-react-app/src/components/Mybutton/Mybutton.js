import React from 'react'
import MyButtonCSS from './Mybutton.module.css'

function Mybutton(props) {
    return (
        <div>
            <button
                onClick={props.btnClicked}
                className={MyButtonCSS.defaultStyles}
                style={{
                    backgroundColor: props.bgColor,
                    margin: props.btnMargin,
                    padding: props.btnPadding
                }}
            >
                {props.buttonname}
            </button>



        </div>
    )
}

export default Mybutton
