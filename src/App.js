import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './components/Home';
import about from './components/about';
import contact from './components/Contact';
import Layout from './components/Layout';
import HeaderComponent from './components/HeaderCompoent';

class App extends Component {
  render() {
    return (
     <React.Fragment>
       <HeaderComponent />
       <Layout>
       <Router>
         <Switch>
           <Route exact path = "/" component = {Home} />
           <Route path = "/about" component = {about} />
           <Route path = "/contact" component = {contact}/>
         </Switch>
       </Router>
       </Layout>

     </React.Fragment>
    )
  }
}


export default  App;