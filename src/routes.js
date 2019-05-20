import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Main from './components/main';


export default(
    <Switch>
        <Route exact path="/" component={Main}/>
    </Switch>
)