import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';



// Component lazy-load
const Login = lazy(() => import('../views/login'));
const Register = lazy(() => import('../views/register'));
const Home = lazy(() => import('../views/home'));

// a fallback component while component takes time to load.
export function SuspenseComponent({ component: Component, ...rest }) {
    return (
        <Suspense fallback={<h1>Loading</h1>}>
            <Component {...rest} />
        </Suspense>
    )
}

const IndexRouter = (props) => (
    <Switch>
        <Route exact path='/' render={(props) => (<SuspenseComponent component={Home} {...props} />)} />
        <Route path='/login' render={(props) => (<SuspenseComponent component={Login} {...props} />)} />
        <Route path='/register' render={(props) => (<SuspenseComponent component={Register} {...props} />)} />
    </Switch>
)


export default IndexRouter;