import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Input } from 'antd';
import { toast } from 'react-toastify';
import { registerUser } from '../../../services/userServices';

class register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataUser: {},
        }
    }
    async componentDidMount() {
    }
    onClickPage = () => {
        this.props.history.push(`/home/login`)
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
    Validation = (data) => {
        if (!data.username) {
            return { mess: "Thiếu tài khoản", code: 1 };
        }
        if (this.isCheckEmpty(data.username) == 0) {
            return { mess: "Thiếu tài khoản", code: 1 };
        }
        if (this.isCheckEmpty(data.username) < 5) {
            return { mess: "Tài khoản >4 kí tự", code: 1 };
        }
        if (this.isCheckSpace(data.username) == true) {
            return { mess: "Tài khoản chứa khoảng trắng", code: 1 };
        }
        if (!data.password) {
            return { mess: "Thiếu mật khẩu", code: 1 };
        }
        if (this.isCheckEmpty(data.password) == 0) {
            return { mess: "Thiếu mật khẩu", code: 1 };
        }
        if (this.isCheckEmpty(data.password) < 9) {
            return { mess: "Mật khẩu phải lớn hơn 8 kí tự", code: 1 };
        }
        if (this.isCheckSpace(data.password) == true) {
            return { mess: "Mật khấu chứa khoảng trắng", code: 1 };
        }
        if (!data.password2) {
            return { mess: "Thiếu mật khẩu nhập lại", code: 1 };
        }
        if (this.isCheckEmpty(data.password2) == 0) {
            return { mess: "Thiếu mật khẩu 2", code: 1 };
        }
        if (this.isCheckEmpty(data.password2) < 9) {
            return { mess: "Mật khẩu phải lớn hơn 8 kí tự", code: 1 };
        }
        if (data.password !== data.password2) {
            return { mess: "Mật khẩu nhập lại sai", code: 1 };
        }
        if (this.isCheckSpace(data.password2) == true) {
            return { mess: "Mật khấu 2 chứa khoảng trắng", code: 1 };
        }
        if (!data.first_name) {
            return { mess: "Thiếu họ", code: 1 };
        }
        if (this.isCheckEmpty(data.first_name) == 0) {
            return { mess: "Thiếu họ", code: 1 };
        }
        if (!data.last_name) {
            return { mess: "Thiếu tên", code: 1 };
        }
        if (this.isCheckEmpty(data.last_name) == 0) {
            return { mess: "Thiếu tên", code: 1 };
        }
        return { code: 0 };
    }
    handleRegister = async () => {
        let result = this.Validation(this.state.dataUser);
        if (result.code == 0) {
            try {
                let data = await registerUser(this.state.dataUser);
                console.log(this.state.dataUser);
                console.log(data);
                if (data && data.data && data.data.success == 1) {
                    toast.success('Thành công');
                } else {
                    toast.error('Thông tin điền bị lỗi')
                }
            } catch (e) {
                toast.error('Lỗi hệ thống');
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
                        Trang chủ / Đăng ký
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
                        <div className='space-y-[5px]'>
                            <label>Mật khẩu nhập lại<span className='text-red-500'> *</span></label>
                            <Input.Password onChange={(event) => this.handleOnChangeInput(event, 'password2')}
                                size='large' placeholder='123456789@' />
                        </div>
                        <div className='space-y-[5px]'>
                            <label>Họ <span className='text-red-500'> *</span></label>
                            <Input onChange={(event) => this.handleOnChangeInput(event, 'first_name')}
                                size='large' placeholder='Trần' />
                        </div>
                        <div className='space-y-[5px]'>
                            <label>Tên <span className='text-red-500'> *</span></label>
                            <Input onChange={(event) => this.handleOnChangeInput(event, 'last_name')}
                                size='large' placeholder='Huy Hoàng' />
                        </div>
                        <div className='flex items-center justify-between'>
                            <Button onClick={() => this.handleRegister()} className='bg-[#e73f2f] text-white'>Đăng ký </Button>
                            <Button onClick={() => this.onClickPage()} className='bg-[#15bb37] text-white'>Đăng nhập ngay</Button>
                        </div>
                    </div>
                </div>
            </div >
        );
    }

}
export default withRouter(register);
