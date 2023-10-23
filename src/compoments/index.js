import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import { Get_Local_Acount_DB } from '../auths/local_storage';

import Err_Page_NotFound from './pages_Err/err_Page_NotFound';
import User from './users/index';

import DashBoard from './dashboards/index';
import LoginDB from './dashboards/pages/login';
import Page_Err_Login from './dashboards/pages_Err/page_Err_Login';
class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataAcount: {},
            isLogin: false,
        }
    }
    async componentDidMount() {
        let dataLogin = Get_Local_Acount_DB();
        if (dataLogin && dataLogin.data && dataLogin.data.access) {
            this.setState({ dataAcount: dataLogin.data.user, isLogin: true })
        } else { this.setState({ dataAcount: {} }) }
    }
    render() {
        let isLogin = this.state.isLogin;
        return (
            <div>
                <Switch>
                    <Route path="/home"><User /></Route>
                    <Redirect from="/" exact to="/home" />

                    {isLogin == true ?
                        <Route path="/dashboard"><DashBoard /></Route>
                        :
                        <Route path="/dashboard"><Page_Err_Login /></Route>
                    }
                    <Route path="/login"><LoginDB /></Route>
                    <Route ><Err_Page_NotFound /></Route>
                </Switch>
            </div>
        );
    }

}
export default withRouter(index);
