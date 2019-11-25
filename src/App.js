import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import { HomeComponent} from './pages/homepage/HomePage.component'
import { Switch, Route, Link } from 'react-router-dom'
import ShopPageComponent from './pages/shoppage/ShopPage.component';
import Header from './components/header/Header.component'
import { SignInSIgnoutPage } from './pages/signIn-signOut/SignIn-SignOutPage.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { setCurrentUser } from './redux/user/user.action'
import { userReducer } from './redux/user/user.reducer';
const HatsPage = () => (
  <div>
    hola
  </div>
)
class App extends Component {

  unsubscribeFromAuth = null
  componentDidMount () {
    // this connectios is forever open
    this.unsubscribeFromAuth = auth.onAuthStateChanged(  async user => {
      if(user) {
        const userRef = await createUserProfileDocument(user);
        userRef.onSnapshot( snapShot => {
          this.props.setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
        },() => {
          console.log(this.state)
        })        })
      } else {
        this.setState({currentUser: user})
      }
      console.log(this.state);
    })
  }
  componentWillUnmount() {
    // close subscription
    this.unsubscribeFromAuth();
  }
  render () {
    return (
      <div>
        <Header/>
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
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch (setCurrentUser(user))
})
export default connect(null, mapDispatchToProps)(App);
