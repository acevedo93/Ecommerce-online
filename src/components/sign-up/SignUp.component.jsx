import React, {Component} from 'react';
import {FormInput} from '../form-input/FormInput.component';
import {CustomButton} from '../custom-button/CustomButton.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'
import './SignUp.styles.scss';


export class SignUpComponent extends Component {
  constructor() {
    super();
    this.state= {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    }
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if( password !== confirmPassword) {
      return window.alert("Hey the passwords wrong");
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password)
      createUserProfileDocument(user, {displayName})
    } catch( err ) {
      console.log(err);
    }
  }

  handleChange = (event) => {
    const {name, value } = event.target;
    this.setState({[name]: value})
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title"> I do not have a account</h2>
        <span>Sign up your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name="displayName"
            value= {displayName}
            onChange={this.handleChange}
            label = 'display Name'
            required
          />
          <FormInput
            type='text'
            name="email"
            value= {email}
            onChange={this.handleChange}
            label = 'display Email'
            required
          />
          <FormInput
            type='password'
            name="password"
            value= {password}
            onChange={this.handleChange}
            label = 'display Password'
            required
          />
           <FormInput
            type='password'
            name="confirmPassword"
            value= {confirmPassword}
            onChange={this.handleChange}
            label = 'Confirm password'
            required
          />
          <CustomButton
            type="submit"
          >
            Sign Up

            </CustomButton>

        </form>
      </div>
    )
  }
}

