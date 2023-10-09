import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
class header extends Component {
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
                Header
            </div>
        );
    }

}
export default withRouter(header);
