import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import Carousel from "react-multi-carousel";
import { Button, Rate, Image, Avatar, Input } from 'antd';
import { AiTwotoneCalendar, AiTwotoneLike, AiTwotoneDislike } from "react-icons/ai";
class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    async componentDidMount() {
    }
    onClickPage = () => {
        this.props.history.push(`/home/register`)
    }
    render() {
        return (
            <div className='px-[10px] sm:px-[60px] lg:px-[100px] py-[20px] space-y-[10px] bg-[#1a1a1a]'>
                <div className='bg-[#0c0c0c] p-[10px] sm:p-[20px] rounded-[5px] truncate'>
                    <label className='text-[#06ccd1] font-[500] uppercase text-[12px] sm:text-[16px]'>
                        Trang chủ / Đăng nhập
                    </label>
                </div>
                <div className='bg-[#0c0c0c] p-[20px] rounded-[5px] space-y-[10px] text-white
                flex items-center justify-center'>
                    <div className='space-y-[20px]'>
                        <div className='space-y-[5px]'>
                            <label>Tài khoản<span className='text-red-500'> *</span></label>
                            <Input size='large' placeholder='admin00' />
                        </div>
                        <div className='space-y-[5px]'>
                            <label>Mật khẩu<span className='text-red-500'> *</span></label>
                            <Input.Password size='large' placeholder='123456789@' />
                        </div>
                        <div className='flex items-center justify-between'>
                            <Button className='bg-[#15bb37] text-white'>Đăng nhập</Button>
                            <Button onClick={() => this.onClickPage()} className='bg-[#e73f2f] text-white'>Đăng ký ngay</Button>
                        </div>
                    </div>
                </div>
            </div >
        );
    }

}
export default withRouter(login);
