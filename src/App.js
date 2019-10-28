import React from 'react';
import './App.css';
import { HomeComponent} from './pages/homepage/HomePage.component'
import { Switch, Route, Link } from 'react-router-dom'
import ShopPageComponent from './pages/shoppage/ShopPage.component';

const HatsPage = () => (
  <div>
    hola
  </div>
)
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomeComponent}  />
        <Route path="/hats" component={HatsPage} />
        <Route path="/shop" component={ShopPageComponent} />
      </Switch>
    </div>
  );
}

export default App;
