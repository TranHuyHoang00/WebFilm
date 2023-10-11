import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Rate, Image, Avatar, Input } from 'antd';
import { loginUser } from '../../../services/userServices';
import { toast } from 'react-toastify';
import { SetLocal_AcountUser } from '../../../auths/localStorage';
class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataUser: {}
        }
    }
    async componentDidMount() {
    }
    onClickPage = () => {
        this.props.history.push(`/home/register`)
    }
    handleOnChangeInput = (event, id) => {
        let copyState = { ...this.state.dataUser };
        copyState[id] = event.target.value;
        this.setState({
            dataUser: {
                ...copyState
            }
        });
    }
    isCheckEmpty = (value) => {
        return value.trim().length
    }
    isCheckSpace = (value) => {
        return (/\s/).test(value);
    }
    Validation = () => {
        let dataUser = this.state.dataUser;
        if (!dataUser.username) {
            return { mess: "Thiếu tài khoản", code: 1 };
        }
        if (this.isCheckSpace(dataUser.username) == true) {
            return { mess: "Tài khoản chứa khoảng trắng", code: 1 };
        }
        if (this.isCheckEmpty(dataUser.username) <= 2) {
            return { mess: "Tài khoản phải > 3 kí tự", code: 1 };
        }
        if (!dataUser.password) {
            return { mess: "Thiếu mật khẩu", code: 1 };
        }
        if (this.isCheckSpace(dataUser.password) == true) {
            return { mess: "Mật khẩu chứa khoảng trắng", code: 1 };
        }
        if (this.isCheckEmpty(dataUser.password) <= 3) {
            return { mess: "Mật khẩu phải > 3 kí tự", code: 1 };
        }
        return { code: 0 };
    }
    handleLogin = async () => {
        let result = this.Validation();
        if (result.code == 0) {
            try {
                let data = await loginUser(this.state.dataUser);
                if (data && data.data && data.data.success == 1) {
                    SetLocal_AcountUser(data.data.data);
                    toast.success('Đăng nhập thành công');
                    window.location.reload();
                } else {
                    toast.error('Lỗi');
                }
            } catch (e) {
                toast.error('Sai thông tin đăng nhập');
            }
        } else {
            toast.error(result.mess);
        }
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
                            <Input onChange={(event) => this.handleOnChangeInput(event, 'username')}
                                size='large' placeholder='admin00' />
                        </div>
                        <div className='space-y-[5px]'>
                            <label>Mật khẩu<span className='text-red-500'> *</span></label>
                            <Input.Password onChange={(event) => this.handleOnChangeInput(event, 'password')}
                                size='large' placeholder='123456789@' />
                        </div>
                        <div className='flex items-center justify-between'>
                            <Button onClick={() => this.handleLogin()}
                                className='bg-[#15bb37] text-white'>Đăng nhập</Button>
                            <Button onClick={() => this.onClickPage()} className='bg-[#e73f2f] text-white'>Đăng ký ngay</Button>
                        </div>
                    </div>
                </div>
            </div >
        );
    }

}
export default withRouter(login);
