import SigninCSS from './Signin.module.css'

function Signin() {
    return (
        <div className={SigninCSS.main}>

            <form className={SigninCSS.form}>

                {/**logo */}
                <div className={SigninCSS.imagediv}>

                </div>

                {/**input fields */}
                <div className={SigninCSS.inputdiv}>

                    <input placeholder="Username" className={SigninCSS.inputfields} type="text" name="Username" />
                    <input placeholder="Password" className={SigninCSS.inputfields} type="password" name="Username" />

                </div>


                {/**signin button */}
                <div className={SigninCSS.buttondiv}>
                    <button className={SigninCSS.button}>Signin</button>
                </div>

                {/**signup link */}
                <div className={SigninCSS.signupdiv}>
                    <a href='#' className={SigninCSS.link}>Dont have an account?</a>
                    <a href='#' className={SigninCSS.link}>Signup</a>
                </div>
            </form>

        </div>
    )
}

export default Signin;