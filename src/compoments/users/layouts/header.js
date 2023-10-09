import React, { Component } from 'react';
import { AiOutlineSearch, AiOutlineClose, AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { withRouter } from 'react-router-dom';
import { Button, Input, Menu } from 'antd';
const { Search } = Input;
class header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpenSearch: false,
            isOpenMenu: true,
        }
    }
    async componentDidMount() {
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
        if (value == 'filter') { this.props.history.push(`/home//filter`); }
    }
    onClickMenu = (value) => {
        if (value.key == 'home') { this.props.history.push(`/home`); }
        if (value.key == 'filter') { this.props.history.push(`/home/filter`); }
    }
    render() {
        const items = [
            {
                label: 'Trang chủ',
                key: 'home',
            },
            {
                label: 'Bộ lọc',
                key: 'filter',
            },
            {
                label: 'Thể loại',
                key: 'category',
                children: [
                    {
                        label: 'Hành động',
                        key: 'action',
                    },
                    {
                        label: 'Kinh dị',
                        key: 'horror',
                    },
                ],
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
                        <img className='cursor-pointer' onClick={() => this.onClickPage('home')} src='https://motchillzz.tv/_ipx/f_webp&s_200x52/logo.png' />
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
                            //onSearch={onSearch}
                            />
                        </div>
                        <div className='sm:block hidden'>
                            <button onClick={() => this.onClickPage('login')}>
                                Đăng nhập/ Đăng ký
                            </button>
                        </div>
                    </div>
                    <div className='space-y-[10px]'>
                        <div className='flex items-center justify-center'>
                            <div className='sm:hidden block'>
                                <button onClick={() => this.onClickPage('login')}>
                                    Đăng nhập/ Đăng ký
                                </button>
                            </div>
                        </div>
                        {this.state.isOpenSearch &&
                            <div className=''>
                                <Search
                                    className='border border-white rounded-[7px] '
                                    placeholder="Nhập thông tin tìm kiếm"
                                    enterButton
                                //onSearch={onSearch}
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
                            items={items}
                            className='bg-[#151414] text-white text-[16px]  '
                        />
                    }
                </div>
            </div>
        );
    }

}
export default withRouter(header);
