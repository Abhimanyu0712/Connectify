import React from 'react'
import { GoogleOutlined,FacebookOutlined } from '@ant-design/icons';
import firebase from 'firebase/compat/app';  // Importing firebase
import 'firebase/compat/auth';  // Importing firebase auth
import { auth } from '../firebase';
const Login = () =>{
   return(
    <div id="login-page">
        <div id="login-card">
            <h2>Welcome to Connectify!</h2>

            <div 
             className="login-button google"
             onClick = {() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
             >
                <GoogleOutlined/> Sign in with Google
            </div>

            <br /> <br/>

            <div 
              className="login-button facebook"
              onClick = {() => auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())}
              >
                <FacebookOutlined/> Sign in with Facebook
            </div>
        </div>

    </div>
   )
}
export default Login;
