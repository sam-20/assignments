import DashboardCss from './Dashboard.module.css'
import { useState } from 'react'
import Signup from '../signup/Signup'
import Mybutton from '../../components/Mybutton/Mybutton'

function Dashboard(props) {

    console.log(props)

    var name = "state management"
    const [name2, setName2] = useState("state management")


    function change() {
        // name = "kofi"
        // console.log(name);

        if (name2 === "state management") {
            setName2("kofi")
        } else {
            setName2("state management")
        }

    }

    return (
        <div>
            <p>
                {name}
            </p>
            <button onClick={change}>click me</button>


            <p>{name2}</p>

            <p>retrieved item from signin: {props.item1} </p>
            <p>retrieved item from signin: props.item1 </p>


            <Mybutton
                buttonname = "hello welcome"
             />




        </div>
    )
}

export default Dashboard
