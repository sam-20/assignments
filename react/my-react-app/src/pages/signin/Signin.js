import SigninCSS from './Signin.module.css'
import { useState } from 'react'
import Dashboard from '../dashboard/Dashboard'
import MyButton from '../../components/Mybutton/Mybutton'
import { useHistory } from 'react-router-dom'

function Signin() {

    let history = useHistory()

    let myobj = { name: 'samuel', age: 14 }
    console.log(myobj.age);

    let { age } = myobj
    console.log(age)

    // console.log(props);
    // props = {
    //     myname: "samuel",
    //     myage: "14",
    //     mylocation: "ayeduase"
    // }

    // let { myname, myage, mylocation } = props

    // let myname = props.myname

    // var fruits = {
    //     yellow: "orange",
    //     green: "apple",
    //     black: "black berries"
    // }

    // let { yellow } = fruits

    // var names = "grace"
    // names = "samuel"

    const [name, setName] = useState("grace")



    // console.log(fruits.yellow);

    // let { green } = fruits
    // console.log(green);

    // let { black: fruit3 } = fruits;
    // console.log(fruit3);

    function signin(e) {
        e.preventDefault()
        history.push('/dashboard')
    }

    return (
        <>

            <div className={SigninCSS.main}>

                {/* <Dashboard

                    item1="samuel"
                    item2="123445ght"

                /> */}


                <form className={SigninCSS.form}>

                    {/**logo */}
                    <div className={SigninCSS.imagediv}>
                        <p>Sign in</p>

                    </div>

                    {/**input fields */}
                    <div className={SigninCSS.inputdiv}>

                        <input placeholder="Username" className={SigninCSS.inputfields} type="text" name="Username" />
                        <input placeholder="Password" className={SigninCSS.inputfields} type="password" name="Username" />

                    </div>

                    {/**signin button */}
                    <div className={SigninCSS.buttondiv}>

                        <MyButton
                            buttonname="Sign In"
                            btnMargin="20px"
                            btnPadding="10px"
                            bgColor="yellow"
                            btnClicked={signin}
                        />

                    </div>

                    {/**signup link */}
                    <div className={SigninCSS.signupdiv}>
                        <a href='#' className={SigninCSS.link}>Dont have an account?</a>
                        <a href='#' className={SigninCSS.link}>Signup</a>
                    </div>
                </form>

            </div>

        </>
    )
}

export default Signin;