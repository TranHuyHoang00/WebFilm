import React, { Component } from 'react';
import { AiOutlineSearch, AiOutlineClose, AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { withRouter } from 'react-router-dom';
import { Button, Input, Menu, Avatar, Dropdown, Space } from 'antd';
import { UserOutlined, CaretDownOutlined, } from '@ant-design/icons';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import { toast } from 'react-toastify';
import { Get_Local_Acount_User, Remove_Local_Acount_User } from '../../../auths/local_storage';
const { Search } = Input;
class header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpenSearch: false,
            isOpenMenu: true,
            dataAcount: null,
        }
    }
    async componentDidMount() {
        let dataLogin = Get_Local_Acount_User();
        if (dataLogin && dataLogin.data && dataLogin.data.access) {
            this.setState({ dataAcount: dataLogin.data.user })
        } else { this.setState({ dataAcount: null }) }
    }
    onClickSearch = () => {
        this.setState({ isOpenSearch: !this.state.isOpenSearch })
    }
    onClickisMenu = () => {
        this.setState({ isOpenMenu: !this.state.isOpenMenu })
    }
    onClickPage = (value) => {
        if (value == 'home') { this.props.history.push(`/home`); }
        if (value == 'login') { this.props.history.push(`/home/login`); }
    }
    onClickMenu = (value) => {
        if (value.key == 'home') { this.props.history.push(`/home`); }
        if (value.key == 'category') {
            this.props.history.push(`/home/product_category/0`)
        }
    }
    handleOnchangeSearch = (value) => {
        if (!value) {
            toast.error("Vui lòng điền vào ô tìm kiếm")
        } else {
            this.props.history.push('/home/search');
            this.props.get_data_from_search_film(value);
        }
    }
    LogOut = () => {
        this.setState({ dataAcount: null })
        Remove_Local_Acount_User();
    }
    render() {
        let dataAcount = this.state.dataAcount;
        const items1 = [
            {
                label: 'Trang chủ',
                key: 'home',
            },
            {
                label: 'Thể loại',
                key: 'category',
            },
        ];
        const items = [
            {
                key: '1',
                label: (<a onClick={() => this.LogOut()}>Đăng xuất</a>),
            },
        ];
        return (
            <div className='text-white '>
                <div className='bg-[#0b0a0d] py-[10px] px-[10px] sm:px-[60px] lg:px-[100px] '>
                    <div className=' flex items-center justify-between text-white space-x-[10px]'>
                        {this.state.isOpenMenu == true ?
                            <div onClick={() => this.onClickisMenu()} className=' text-[30px] block sm:hidden'>
                                <AiOutlineMenuFold />
                            </div>
                            :
                            <div onClick={() => this.onClickisMenu()} className=' text-[30px] block sm:hidden'>
                                <AiOutlineMenuUnfold />
                            </div>
                        }
                        <img className='cursor-pointer' onClick={() => this.onClickPage('home')}
                            src='https://motchillzz.tv/_ipx/f_webp&s_200x52/logo.png' />
                        <div className='block md:hidden'>
                            {this.state.isOpenSearch == false ?
                                <Button onClick={() => this.onClickSearch()}
                                    className='bg-white' type='default'><AiOutlineSearch /></Button>
                                :
                                <Button onClick={() => this.onClickSearch()}
                                    className='bg-white' type='default'><AiOutlineClose /></Button>
                            }
                        </div>
                        <div className='md:block hidden'>
                            <Search className='border border-white rounded-[7px]'
                                placeholder="Nhập thông tin tìm kiếm"
                                enterButton
                                onSearch={(value) => this.handleOnchangeSearch(value)}
                            />
                        </div>
                        {dataAcount == null ?
                            <div className='sm:block hidden'>
                                <button onClick={() => this.onClickPage('login')}>
                                    Đăng nhập/ Đăng ký
                                </button>
                            </div>
                            :
                            <div className='sm:block hidden'>
                                <Dropdown menu={{ items, }}>
                                    <Space>
                                        <Avatar style={{ backgroundColor: '#87d068', }} icon={<UserOutlined />} />
                                        <label>{dataAcount.last_name}</label>
                                        <CaretDownOutlined />
                                    </Space>
                                </Dropdown>

                            </div>
                        }
                    </div>
                    <div className='space-y-[10px]'>
                        {dataAcount == null ?
                            <div className='sm:hidden flex items-center justify-center'>
                                <button onClick={() => this.onClickPage('login')}>
                                    Đăng nhập/ Đăng ký
                                </button>
                            </div>
                            :
                            <div className='sm:hidden flex items-center justify-center'>
                                <Dropdown menu={{ items, }}>
                                    <Space>
                                        <Avatar style={{ backgroundColor: '#87d068', }} icon={<UserOutlined />} />
                                        <label>{dataAcount.last_name}</label>
                                        <CaretDownOutlined />
                                    </Space>
                                </Dropdown>

                            </div>
                        }
                        {this.state.isOpenSearch &&
                            <div className=''>
                                <Search className='md:hidden block border border-white rounded-[7px] '
                                    placeholder="Nhập thông tin tìm kiếm"
                                    enterButton
                                    onSearch={(value) => this.handleOnchangeSearch(value)}
                                />
                            </div>
                        }
                    </div>
                </div>
                <div className='bg-[#151414] font-[600]
                flex items-center justify-center '>
                    {this.state.isOpenMenu == true &&
                        <Menu
                            mode="horizontal" theme='dark'
                            onClick={(value) => this.onClickMenu(value)}
                            defaultSelectedKeys={['home']}
                            items={items1}
                            className='bg-[#151414] text-white text-[16px]  '
                        />
                    }
                </div>
            </div>
        );
    }

}
const mapStateToProps = state => {
    return {
    };
};
const mapDispatchToProps = dispatch => {
    return {
        get_data_from_search_film: (data) => dispatch(actions.get_data_from_search_film(data)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(header));
