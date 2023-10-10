import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Empty, Button } from 'antd';
class page_Err_Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    async componentDidMount() {

    }
    onCLickPage = () => {
        this.props.history.push(`/login`);
    }
    render() {
        return (
            <div className='h-screen w-screen flex items-center justify-center '>
                <div className='text-center space-y-[10px]'>
                    <Empty
                        image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                        imageStyle={{ height: 60, }}
                        description={
                            <span>
                                Chưa đăng nhập
                            </span>
                        }
                    />
                    <Button onClick={() => this.onCLickPage()} type="default">Đăng nhập</Button>
                </div>
            </div>
        );
    }

}
export default withRouter(page_Err_Login);
