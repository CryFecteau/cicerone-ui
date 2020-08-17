import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    render() {
        const HomePage = () => {
            return (
                <Home />
            )
        }
        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;
