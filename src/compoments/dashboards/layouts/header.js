import React, { Component } from 'react';
import { UserOutlined, CaretDownOutlined, } from '@ant-design/icons';
import { Avatar, Dropdown, Space } from 'antd';
import { withRouter } from 'react-router-dom';
import { GetLocal_AcountAdmin, RemoveLocal_AcountAdmin } from '../../../auths/localStorage';
class header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataAcount: {},
        }
    }
    async componentDidMount() {
        let dataLogin = GetLocal_AcountAdmin();
        if (dataLogin && dataLogin.data && dataLogin.data.access) {
            this.setState({ dataAcount: dataLogin.data.user })
        } else { this.setState({ dataAcount: {} }) }
    }
    LogOut = () => {
        RemoveLocal_AcountAdmin();
        this.props.history.push(`/login`);
    }
    render() {
        let dataAcount = this.state.dataAcount;
        const items = [
            {
                key: '1',
                label: (<a className='disabled'>{dataAcount && dataAcount.username ? dataAcount.username : 'None'}</a>),
                disabled: true,
            },
            {
                key: '2',
                label: (<a className='disabled'>{dataAcount && dataAcount.full_name ? dataAcount.full_name : 'None'}</a>),
                disabled: true,
            },
            {
                key: '3',
                label: (<a onClick={() => this.LogOut()}>Đăng xuất</a>),
            },
        ];
        return (
            <div>
                <Dropdown menu={{ items, }}>
                    <Space>
                        <Avatar style={{ backgroundColor: '#87d068', }} icon={<UserOutlined />} />
                        <CaretDownOutlined />
                    </Space>
                </Dropdown>
            </div>
        );
    }

}
export default withRouter(header);
