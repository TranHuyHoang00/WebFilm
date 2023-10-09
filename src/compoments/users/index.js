import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import Header from './layouts/header';
import Footer from './layouts/footer';
import Home from './home';
import Product from './product';
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
                    <Route exact path="/home/product"><Product /></Route>
                </Switch>
                <Footer />
            </div>
        );
    }

}
export default withRouter(index);
