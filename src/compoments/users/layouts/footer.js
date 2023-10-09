import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
class footer extends Component {
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
                footer
            </div>
        );
    }

}
export default withRouter(footer);
