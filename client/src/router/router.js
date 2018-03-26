import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Bundle from './Bunder'
import Loading from '../components/Loading/Loading'

import Test from 'bundle-loader?lazy&name=home!pages/Home/Home'
import Counter from 'bundle-loader?lazy&name=counter!pages/Counter/Counter'
import Login from 'bundle-loader?lazy&name=login!pages/Login/Login'
import Red from 'bundle-loader?lazy&name=red!pages/Red/Red'

const createComponent = (component) => (props) => (
    <Bundle load={component}>
        {
          (Component) => Component ? <Component {...props} /> : <Loading />        
        }
    </Bundle>
);

export default () => (
    <div>
        <Switch>
            <Route exact path="/" component={createComponent(Login)} />
            <Route  path="/test" component={createComponent(Test)} />
            <Route path="/counter" component={createComponent(Counter)} />
            <Route path="/red" component={createComponent(Red)} />
        </Switch>
    </div>
)