import React from 'react';
import './SignIn-SignOutPage.styles.scss';
import { SignInComponent } from '../../components/sign-in/SignIn.component'
import {SignUpComponent} from '../../components/sign-up/SignUp.component';
export const SignInSIgnoutPage = () => (
  <div className="sign-in-sign-out">
    <div>
      <SignInComponent />
    </div>
    <div>
      <SignUpComponent />
    </div>
  </div>
)