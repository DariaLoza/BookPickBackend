import React from 'react';
import{Switch,Route,Redirect} from "react-router-dom";


const AppRouter = () => {
    const isAuth = false
    return (
        <Switch>
            {isAuth === true && authRoutes.map(({path, Component}) =>
                 <Route key={path} path={path} component={Component} exact/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
        </Switch>
    );
};

export default AppRouter;