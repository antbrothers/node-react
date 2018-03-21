import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Bundle from './Bunder'
import Loading from '../components/Loading/Loading'

import Home from 'bundle-loader?lazy&name=home!pages/Home/Home'
import Counter from 'bundle-loader?lazy&name=counter!pages/Counter/Counter'

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
            <Route exact path="/" component={createComponent(Home)} />
            <Route path="/counter" component={createComponent(Counter)} />
        </Switch>
    </div>
)