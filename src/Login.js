import React from 'react';
import Button from "@material-ui/core/Button";
import { auth, provider } from "./firebase";
import './Login.css';


function Login() {

    const signIn = () => {
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    }
    return (
        <div className="login">
            <div className="login_logo">
                <img
                    src="https://drive.google.com/file/d/1kINHxkVP2qxwcJ5vvU9zWLh8tIv_kdOI/view?usp=sharing"
                    alt=""
                />
                <h1>iMessage</h1>
            </div>

            <Button onClick={signIn}>Sign In</Button>
        </div>
    );
}

export default Login;
