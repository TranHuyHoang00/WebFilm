import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import Carousel from "react-multi-carousel";
import { Button, Rate, Image, Avatar, Input } from 'antd';
import { AiTwotoneCalendar, AiTwotoneLike, AiTwotoneDislike } from "react-icons/ai";
class filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataPropose: [
                { id: 1, name: 'Cuộc Chiến Sinh Tồn', img: '1.jpg', },
                { id: 2, name: 'Ma Búp bê', img: '2.jpg', },
                { id: 3, name: 'GenV', img: '3.jpg', },
                { id: 4, name: 'Loki: Phân 2', img: '4.jpg', },
                { id: 5, name: 'Dinh Thự Ma Ám', img: '5.jpg', },
                { id: 6, name: 'Ba Lê tử Thần', img: '6.jpg', },
                { id: 7, name: 'Luân Phiên', img: '7.jpg', },
                { id: 8, name: 'Xã hội trung niên thầm kín, hãy là chính mình', img: '8.jpg', },
                { id: 9, name: 'Luân Phiên', img: '7.jpg', },
            ],
            dataPropose1: [
                { id: 1, name: 'Cuộc Chiến Sinh Tồn', img: '1.jpg', },
            ],
        }
    }
    async componentDidMount() {
    }
    onClickPage = (id) => {
        this.props.history.push(`/home/product/${id}`)
    }
    render() {
        let dataPropose = this.state.dataPropose;
        let dataPropose1 = this.state.dataPropose1;
        return (
            <div className='px-[10px] sm:px-[60px] lg:px-[100px] py-[20px] space-y-[10px] bg-[#1a1a1a]'>
                <div className='bg-[#0c0c0c] p-[10px] sm:p-[20px] rounded-[5px] truncate'>
                    <label className='text-[#06ccd1] font-[500] uppercase text-[12px] sm:text-[16px]'>
                        Trang chủ / Bộc lọc
                    </label>
                </div>
                <div className='bg-[#0c0c0c] p-[20px] rounded-[5px] space-y-[10px] text-white'>
                    <div><label className='text-[#06ccd1] font-[500] uppercase text-[12px] sm:text-[16px] '>BỘ LỌC </label></div>
                    <div className='flex items-center justify-start space-x-[5px]'>
                        <Input placeholder='Nhập thông tin tìm kiếm' className='w-[400px]' />
                        <Button className='bg-[#15bb37] text-white'>Tìm</Button>
                    </div>
                    <div className='flex items-center justify-start space-x-[10px]'>
                        <label className=''>Thông tin tìm kiếm :</label>
                        <span className='text-red-500'>Phim hành động, có cảnh đánh nhau rất kịch tính, hồi hộp</span>
                    </div>
                    <div className='flex items-center justify-start space-x-[10px]'>
                        <label className=''>Kết quả nhãn :</label>
                        <span className='text-white bg-[#e73f2f] px-[4px] py-[2px] rounded-[2px] font-[600]'>Hành động</span>
                    </div>
                </div>

                <div className='bg-[#0c0c0c] p-[20px] rounded-[5px] space-y-[10px] text-white'>
                    <div className='flex items-center justify-between text-[16px] font-[600]'>
                        <div><label className='text-[#06ccd1] font-[500] uppercase text-[12px] sm:text-[16px] '>PHIM TÌM KIẾM</label></div>
                        <Button type='default' className='text-white'>XEM THÊM</Button>
                    </div>
                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
                        {dataPropose1 && dataPropose1.map((item, index) => {
                            return (
                                <div key={item.id} onClick={() => this.onClickPage(item.id)}
                                    className="slider p-[5px] space-y-[10px] cursor-pointer text-[14px] " >
                                    <div className='relative text-white '>
                                        {item && item.img &&
                                            <img src={require(`../../../assets/images/${item.img}`).default} alt="movie"
                                                className='h-[250px] sm:h-[300px] w-full rounded-[5px]' />
                                        }
                                        <div className='absolute top-[10px] left-0 '>
                                            <span className='bg-[#f9bb17] py-[5px] px-[10px] font-[600]'>VIETSUB</span>
                                        </div>
                                    </div>
                                    <div className='truncate'>
                                        <label className='font-[500] text-[#f9bb17]'>{item.name}</label>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className='bg-[#0c0c0c] p-[20px] rounded-[5px] space-y-[10px] text-white'>
                    <div className='flex items-center justify-between text-[16px] font-[600]'>
                        <div><label className='text-[#06ccd1] font-[500] uppercase text-[12px] sm:text-[16px] '>PHIM ĐỀ CỬ</label></div>
                        <Button type='default' className='text-white'>XEM THÊM</Button>
                    </div>
                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
                        {dataPropose && dataPropose.map((item, index) => {
                            return (
                                <div key={item.id} onClick={() => this.onClickPage(item.id)}
                                    className="slider p-[5px] space-y-[10px] cursor-pointer text-[14px] " >
                                    <div className='relative text-white '>
                                        {item && item.img &&
                                            <img src={require(`../../../assets/images/${item.img}`).default} alt="movie"
                                                className='h-[250px] sm:h-[300px] w-full rounded-[5px]' />
                                        }
                                        <div className='absolute top-[10px] left-0 '>
                                            <span className='bg-[#f9bb17] py-[5px] px-[10px] font-[600]'>TOP {index + 1}</span>
                                        </div>
                                    </div>
                                    <div className='truncate'>
                                        <label className='font-[500] text-[#f9bb17]'>{item.name}</label>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div >
        );
    }

}
export default withRouter(filter);
