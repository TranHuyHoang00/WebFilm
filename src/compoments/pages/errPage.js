import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import { withRouter } from 'react-router-dom';
class errPage extends Component {
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
                Page Err
            </div>
        );
    }

}
export default withRouter(errPage);
