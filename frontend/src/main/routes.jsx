import React from "react";
import { Router, Route, Redirect, hashHistory } from 'react-router'

import About from "../about/about";
import Reminder from "../reminder/reminder";


export default props => {
    return (
        <Router history={hashHistory}>
            <Route path='/lembretes' component={Reminder} />
            <Route path='/about' component={About} />
            <Redirect from='*' to='/lembretes' />
        </Router>
    )
}
