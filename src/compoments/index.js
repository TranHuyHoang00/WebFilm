import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import ErrPage from './page/errPage';
import User from './users/index';
import DashBoard from './dashboards/index';
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
                <Switch>
                    <Route path="/home"><User /></Route>
                    <Redirect from="/" exact to="/home" />

                    <Route path="/dashboard"><DashBoard /></Route>

                    <Route ><ErrPage /></Route>
                </Switch>
            </div>
        );
    }

}
export default withRouter(index);
