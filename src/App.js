import React from 'react';
import './App.css';
import { HomeComponent} from './pages/homepage/HomePage.component'
import { Switch, Route, Link } from 'react-router-dom'


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
      </Switch>
    </div>
  );
}

export default App;
