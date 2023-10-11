import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import Header from './layouts/header';
import Footer from './layouts/footer';
import Home from './pages/home';
import Product_detail from './pages/product_detail';
import Product_search from './pages/product_search';
import Login from './pages/login';
import Register from './pages/register';
import Product_category from './pages/product_category';
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
                    <Route exact path="/home/search"><Product_search /></Route>
                    <Route exact path="/home/product_detail/:id"><Product_detail /></Route>
                    <Route exact path="/home/product_category/:id"><Product_category /></Route>
                    <Route exact path="/home/login"><Login /></Route>
                    <Route exact path="/home/register"><Register /></Route>
                </Switch>
                <Footer />
            </div>
        );
    }

}
export default withRouter(index);
