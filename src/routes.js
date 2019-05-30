import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Main from './components/main';
import Login from './components/login';
import Search from './components/search';
import AboutUs from './components/aboutus';



export default(
    <Switch>
        <Route exact path="/" component={Main}/>
        <Route path= '/login' component={Login}/>
        <Route path= '/search' component={Search}/>
        <Route path= '/about' component={AboutUs}/>
    </Switch>
)