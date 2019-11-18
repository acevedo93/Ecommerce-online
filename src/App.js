import React, { Component } from 'react';
import './App.css';
import { HomeComponent} from './pages/homepage/HomePage.component'
import { Switch, Route, Link } from 'react-router-dom'
import ShopPageComponent from './pages/shoppage/ShopPage.component';
import { Header} from './components/header/Header.component'
import { SignInSIgnoutPage } from './pages/signIn-signOut/SignIn-SignOutPage.component';
import { auth } from './firebase/firebase.utils'


const HatsPage = () => (
  <div>
    hola
  </div>
)
class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    }
  }

  unsubscribeFromAuth = null
  componentDidMount () {
    // this connectios is forever open
    this.unsubscribeFromAuth = auth.onAuthStateChanged( user => {
      console.log(user)
      this.setState({currentUser: user})
    })
  }
  componentWillUnmount() {
    // close subscription
    this.unsubscribeFromAuth();
  }
  render () {
    return (
      <div>
        <Header
          currentUser = {this.state.currentUser}
        />
        <Switch>
          <Route exact path="/" component={HomeComponent}  />
          <Route path="/hats" component={HatsPage} />
          <Route path="/shop" component={ShopPageComponent} />
          <Route path="/login" component= {SignInSIgnoutPage} />
        </Switch>
      </div>
    );

  }
}

export default App;
