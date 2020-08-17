import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BeerServer from './BeerServer';
import About from './About';
import AdvancedCicerone from './AdvancedCicerone';
import Cicerone from './Cicerone';
import Contact from './Contact';
import MasterCicerone from './MasterCicerone';
import StudyMaterial from './StudyMaterial';

class Main extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/about-us' component={About} />
                        <Route path='/advanced-cicerone' component={AdvancedCicerone} />
                        <Route path='/beer-server' component={BeerServer} />
                        <Route path='/cicerone' component={Cicerone} />
                        <Route path='/contact-us' component={Contact} />
                        <Route path='/master-cicerone' component={MasterCicerone} />
                        <Route path='/study-material' component={StudyMaterial} />
                    </Switch>
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default Main;
