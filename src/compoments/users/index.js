import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import Header from './layouts/header';
import Footer from './layouts/footer';
import Home from './pages/home';
import Product from './pages/product';
import Filter from './pages/filter';
import Login from './pages/login';
import Register from './pages/register';
class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    async componentDidMount() {
    }
    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/home"><Home /></Route>
                    <Route exact path="/home/filter"><Filter /></Route>
                    <Route exact path="/home/product/:id"><Product /></Route>

                    <Route exact path="/home/login"><Login /></Route>
                    <Route exact path="/home/register"><Register /></Route>
                </Switch>
                <Footer />
            </div>
        );
    }

}
export default withRouter(index);
