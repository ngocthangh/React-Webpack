import React, { Component } from 'react';
import './App.css';
import Menu from '../Menu/Menu';
import { Switch, BrowserRouter as Router, Route, HashRouter } from 'react-router-dom';
import routes from '../../routes';

class App extends Component {
    render() {
        console.log('app component')
        return (

            <HashRouter>
                <div>

                    <Menu />
                    <div className="container">

                        <div className="row">

                            {this.showContentMenus()}
                        </div>

                    </div>

                </div>
            </HashRouter>

        );
    }
    showContentMenus() {
        var result = null;
        result = routes.map((route, index) => (
            <Route key={index} path={route.path} exact={route.exact} component={route.main} />
        ))
        return <Switch>{result}</Switch>
    }
}

export default App;
