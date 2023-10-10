import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import { SetLocal_AcountAdmin } from '../../../auths/localStorage';
class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    async componentDidMount() {
        let data = {
            access: 'None',
            refresh: 'None',
            user: {
                username: 'admin',
                full_name: 'Trần Huy Hoàng',
            }
        }
        SetLocal_AcountAdmin(data);
    }
    render() {
        return (
            <div>
                Login
            </div>
        );
    }

}
export default withRouter(login);
