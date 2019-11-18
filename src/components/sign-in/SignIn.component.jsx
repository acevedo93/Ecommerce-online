import React from 'react';
import './SignIn.styles.scss';
import { FormInput} from '../../components/form-input/FormInput.component'
import { CustomButton } from '../custom-button/CustomButton.component'
import { signInWithGoogle } from '../../firebase/firebase.utils'
export class SignInComponent extends React.Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({email: '', password: ''})
  }
  handleChange = event => {
    const { value, name} = event.target;
    this.setState({[name]: value})
  }
  render(){
    return (
      <div className='sign-in'>
        <h2>I alredy have an account</h2>
        <span>Sign in with yout email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
            label = 'email'
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
            label = 'password'
          />
          <div className="buttons">
            <CustomButton
              type="submit"
              onClick={this.handleSubmit}
            >
              Sign-in
            </CustomButton>
            <CustomButton
              onClick={signInWithGoogle}
              isGoogleSignIn
            >
              SignIn with google
              </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}