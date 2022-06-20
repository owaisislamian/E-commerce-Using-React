import React from "react";
import Signin from '../../sign-in/sign-in.component';
import SignUp from "../../component/sign-up/sign-up.component";
import './sign-in-and-sign-up.styles.scss';


const SignInAndSignUpPage = () =>(

<div className ='sign-in-and-sign-up'>

   <Signin/>
   <SignUp/>
</div>


);
export default SignInAndSignUpPage;