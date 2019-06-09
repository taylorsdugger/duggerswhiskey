
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

//styles
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';

//areas
import PageContainer from './shared/pageContainer/pageContainer';
import Home from './areas/home/home';
import Whiskey from './areas/whiskey/whiskey';
import WhereToBuy from './areas/whereToBuy/whereToBuy';
import ContactUs from './areas/contactUs/contactUs';
import Login from './auth/login';
import Callback from './auth/callback';

ReactDOM.render(
  <PageContainer>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/whiskey' component={Whiskey} />
        <Route path='/whereToBuy' component={WhereToBuy} />
        <Route path='/contactUs' component={ContactUs} />
        <Route path='/login' component={Login} />
        <Route path="/callback" component={Callback} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  </PageContainer>

  , document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
