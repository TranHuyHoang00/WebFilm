import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import { Button, Result } from 'antd';
class errPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    async componentDidMount() {
    }
    onClickPage = () => {
        this.props.history.push(`/home`);
    }
    render() {
        return (
            <div>
                <Result
                    status="404"
                    title="404"
                    subTitle="Sorry, the page you visited does not exist."
                    extra={
                        <Button onClick={() => this.onClickPage()}
                            type="default" className='bg-blue-500 text-white'>Back Home</Button>
                    }
                />
            </div>
        );
    }

}
export default withRouter(errPage);
