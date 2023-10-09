import React from 'react';
import { toast } from 'react-toastify';
import { withRouter } from 'react-router-dom';
import Carousel from "react-multi-carousel";
import { Button } from 'antd';
import "react-multi-carousel/lib/styles.css";
class home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataNew: [
                { id: 1, name: 'Cuộc Chiến Sinh Tồn', img: '1.jpg', },
                { id: 2, name: 'Ma Búp bê', img: '2.jpg', },
                { id: 3, name: 'GenV', img: '3.jpg', },
                { id: 4, name: 'Loki: Phân 2', img: '4.jpg', },
                { id: 5, name: 'Dinh Thự Ma Ám', img: '5.jpg', },
                { id: 6, name: 'Ba Lê tử Thần', img: '6.jpg', },
                { id: 7, name: 'Luân Phiên', img: '7.jpg', },
                { id: 8, name: 'Xã hội trung niên thầm kín, hãy là chính mình', img: '8.jpg', },
            ],
        }
    }
    async componentDidMount() {
    }
    onClickPage = (id) => {
        this.props.history.push(`home/product/${id}`)
    }
    render() {
        const responsive = {
            desktop0: { breakpoint: { max: 3000, min: 1280 }, items: 5, slidesToSlide: 5 },
            desktop1: { breakpoint: { max: 1280, min: 1024 }, items: 4, slidesToSlide: 4 },
            tablet: { breakpoint: { max: 1024, min: 640 }, items: 3, slidesToSlide: 3 },
            mobile: { breakpoint: { max: 640, min: 300 }, items: 2, slidesToSlide: 2 }
        };
        let dataNew = this.state.dataNew;
        return (
            <div className='px-[10px] sm:px-[60px] lg:px-[100px] py-[20px] space-y-[30px] bg-[#1a1a1a]'>
                <div className='bg-[#0c0c0c] p-[20px] rounded-[5px] space-y-[10px] text-white'>
                    <div className='flex items-center justify-between text-[16px] font-[600]'>
                        <div><label className='text-[#06ccd1] font-[500] uppercase text-[12px] sm:text-[16px] '>PHIM MỚI NHẤT</label></div>
                        <Button type='default' className='text-white'>XEM THÊM</Button>
                    </div>
                    <Carousel responsive={responsive} autoPlay={true} swipeable={true} draggable={true} showDots={true}
                        infinite={true} partialVisible={false} dotListClass="custom-dot-list-style">
                        {dataNew && dataNew.map((item, index) => {
                            return (
                                <div key={item.id} onClick={() => this.onClickPage(item.id)}
                                    className="slider p-[5px] space-y-[10px] cursor-pointer text-[14px] " >
                                    <div className='relative text-white '>
                                        {item && item.img &&
                                            <img src={require(`../../../assets/images/${item.img}`).default} alt="movie"
                                                className='h-[250px] sm:h-[300px] w-full rounded-[5px]' />
                                        }
                                        <div className='absolute top-[10px] left-0 '>
                                            <span className='bg-[#f9bb17] py-[5px] px-[10px] font-[600]'>MỚI</span>
                                        </div>
                                    </div>
                                    <div className='truncate'>
                                        <label className='font-[500] text-[#f9bb17]'>{item.name}</label>
                                    </div>
                                </div>
                            );
                        })}
                    </Carousel>
                </div>
                <div className='bg-[#0c0c0c] p-[20px] rounded-[5px] space-y-[10px] text-white'>
                    <div className='flex items-center justify-between text-[16px] font-[600]'>
                        <div><label className='text-[#06ccd1] font-[500] uppercase text-[12px] sm:text-[16px] '>PHIM KINH DỊ</label></div>
                        <Button type='default' className='text-white'>XEM THÊM</Button>
                    </div>
                    <Carousel responsive={responsive} autoPlay={true} swipeable={true} draggable={true} showDots={true}
                        infinite={true} partialVisible={false} dotListClass="custom-dot-list-style">
                        {dataNew && dataNew.map((item, index) => {
                            return (
                                <div key={item.id} onClick={() => this.onClickPage(item.id)}
                                    className="slider p-[5px] space-y-[10px] cursor-pointer text-[14px]  " >
                                    <div className='relative text-white '>
                                        {item && item.img &&
                                            <img src={require(`../../../assets/images/${item.img}`).default} alt="movie"
                                                className='h-[250px] sm:h-[300px] w-full rounded-[5px]' />
                                        }
                                        <div className='absolute top-[10px] left-0 '>
                                            <span className='bg-[#f9bb17] py-[5px] px-[10px] font-[600]'>KINH DỊ</span>
                                        </div>
                                    </div>
                                    <div className='truncate'>
                                        <label className='font-[500] text-[#f9bb17]'>{item.name}</label>
                                    </div>
                                </div>
                            );
                        })}
                    </Carousel>
                </div>
                <div className='bg-[#0c0c0c] p-[20px] rounded-[5px] space-y-[10px] text-white'>
                    <div className='flex items-center justify-between text-[16px] font-[600]'>
                        <div><label className='text-[#06ccd1] font-[500] uppercase text-[12px] sm:text-[16px] '>PHIM HÀNH ĐỘNG</label></div>
                        <Button type='default' className='text-white'>XEM THÊM</Button>
                    </div>
                    <Carousel responsive={responsive} autoPlay={true} swipeable={true} draggable={true} showDots={true}
                        infinite={true} partialVisible={false} dotListClass="custom-dot-list-style">
                        {dataNew && dataNew.map((item, index) => {
                            return (
                                <div key={item.id} onClick={() => this.onClickPage(item.id)}
                                    className="slider p-[5px] space-y-[10px] cursor-pointer text-[14px]  " >
                                    <div className='relative text-white '>
                                        {item && item.img &&
                                            <img src={require(`../../../assets/images/${item.img}`).default} alt="movie"
                                                className='h-[250px] sm:h-[300px] w-full rounded-[5px]' />
                                        }
                                        <div className='absolute top-[10px] left-0 '>
                                            <span className='bg-[#f9bb17] py-[5px] px-[10px] font-[600]'>HÀNH ĐỘNG</span>
                                        </div>
                                    </div>
                                    <div className='truncate'>
                                        <label className='font-[500] text-[#f9bb17]'>{item.name}</label>
                                    </div>
                                </div>
                            );
                        })}
                    </Carousel>
                </div>
            </div>
        )
    }
}

export default withRouter(home);