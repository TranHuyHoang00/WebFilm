import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import Carousel from "react-multi-carousel";
import { Button, Rate, Image, Avatar, Input } from 'antd';
import { AiTwotoneCalendar, AiTwotoneLike, AiTwotoneDislike } from "react-icons/ai";
class product extends Component {
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
        }
    }
    async componentDidMount() {
    }
    onClickPage = (id) => {
        this.props.history.push(`/home/product/${id}`)
    }
    render() {
        let dataPropose = this.state.dataPropose;
        const responsive = {
            desktop0: { breakpoint: { max: 3000, min: 1280 }, items: 4, slidesToSlide: 4 },
            desktop1: { breakpoint: { max: 1280, min: 1024 }, items: 3, slidesToSlide: 3 },
            tablet: { breakpoint: { max: 1024, min: 640 }, items: 3, slidesToSlide: 3 },
            mobile: { breakpoint: { max: 640, min: 300 }, items: 2, slidesToSlide: 2 }
        };
        return (
            <div className='px-[10px] sm:px-[60px] lg:px-[100px] py-[20px] space-y-[30px] bg-[#1a1a1a]'>
                <div className='block lg:grid grid-cols-4 gap-[20px] sm:space-y-[0px] space-y-[10px]'>
                    <div className=' col-span-3 space-y-[10px]'>
                        <div className='bg-[#0c0c0c] p-[10px] sm:p-[20px] rounded-[5px] truncate'>
                            <label className='text-[#06ccd1] font-[500] uppercase text-[12px] sm:text-[16px]'>
                                Trang chủ / phim / Tiên sinh ẩn cư yêu dấu
                            </label>
                        </div>
                        <div className='block sm:grid sm:grid-cols-2 md:grid-cols-3 gap-[20px] space-y-[10px] sm:space-y-[0px]'>
                            <div className='bg-[#0c0c0c] p-[20px] space-y-[10px] rounded-[5px]'>
                                <div className='flex items-center justify-center'>
                                    <img className='rounded-[5px] w-[250px] sm:w-full h-auto' src={require(`../../../assets/images/1.jpg`).default} alt="movie" />
                                </div>
                                <div className='flex items-center justify-center '>
                                    <Button type='default' className='bg-[#15bb37] text-white font-[600]'>XEM PHIM</Button>
                                </div>
                            </div>
                            <div className='md:col-span-2 bg-[#0c0c0c] p-[20px] rounded-[5px] space-y-[10px] sm:space-y-[20px]'>
                                <div className=''>
                                    <label className='text-[#f9bb17] text-[20px] sm:text-[22px] font-[600] uppercase'>Tiên sinh ẩn cư yêu dấu</label>
                                </div>
                                <div className=' text-white text-[14px] md:text-[16px] space-y-[8px]'>
                                    <div className='space-x-[5px]'>
                                        <label className=''>Đánh giá :</label>
                                        <Rate disabled allowHalf defaultValue={2.5} />
                                        <span className='text-[#06ccd1]'>( 2.5 sao )</span>
                                    </div>
                                    <div className='space-x-[5px]'>
                                        <label className=''>Bình luận :</label>
                                        <span className='text-[#06ccd1]'> 234 lượt</span>
                                    </div>
                                    <div className='space-x-[5px]'>
                                        <label className=''>Thể loại :</label>
                                        <span className='text-white bg-[#15bb37] px-[4px] py-[2px] rounded-[2px] font-[600]'>Hành động</span>
                                        <span className='text-white bg-[#15bb37] px-[4px] py-[2px] rounded-[2px] font-[600]'>Kinh dị</span>
                                        <span className='text-white bg-[#15bb37] px-[4px] py-[2px] rounded-[2px] font-[600]'>Viễn tưởng</span>
                                    </div>
                                    <div className='space-x-[5px]'>
                                        <label className=''>Năm sản xuất :</label>
                                        <span className='text-[#06ccd1]'>22/12/2021</span>
                                    </div>
                                    <div className='space-x-[5px]'>
                                        <label className=''>Quốc gia :</label>
                                        <span className='text-[#06ccd1]'>Trung Quốc</span>
                                    </div>
                                    <div className='space-x-[5px]'>
                                        <label className=''>Thời lượng :</label>
                                        <span className='text-[#06ccd1]'>90 phút</span>
                                    </div>
                                    <div className='space-x-[5px]'>
                                        <label className=''>Lượt xem :</label>
                                        <span className='text-[#06ccd1]'>111.202 lượt</span>
                                    </div>
                                    <div className='space-x-[5px]'>
                                        <label className=''>Chất lượng :</label>
                                        <span className='text-white bg-[#15bb37] px-[4px] py-[2px] rounded-[2px] font-[600]'>FULL HD</span>
                                        <span className='text-white bg-[#15bb37] px-[4px] py-[2px] rounded-[2px] font-[600]'>4K</span>
                                    </div>
                                    <div className='space-x-[5px]'>
                                        <label className=''>Ngôn ngữ :</label>
                                        <span className='text-white bg-[#e73f2f] px-[4px] py-[2px] rounded-[2px] font-[600]'>VIETSUB</span>
                                        <span className='text-white bg-[#e73f2f] px-[4px] py-[2px] rounded-[2px] font-[600]'>ENGSUB</span>
                                    </div>
                                    <div className='space-x-[5px]'>
                                        <label className=''>Ngày cập nhập :</label>
                                        <span className='text-[#06ccd1]'>22/12/2022</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* Content */}
                        <div className='bg-[#0c0c0c] p-[20px] rounded-[5px] space-y-[10px]'>
                            <div><label className='text-[#f9bb17] text-[14px] sm:text-[16px] font-[600]'>NỘI DUNG PHIM</label></div>
                            <div className='text-white'>
                                <span >
                                    Một loại virus chết người được lây lan khắp nơi trong Thành Phố, dần tấn công vào tất cả mọi người ở bất cứ đâu biến họ thành những Zombie tấn công những người còn sống sót. Những người sống sót phải tìm cách lẫn trốn và chống trả lại bọn zombie đang khát máu để sinh tồn…
                                </span>
                            </div>
                        </div>
                        {/* Comment */}
                        <div className='bg-[#0c0c0c] p-[20px] rounded-[5px] space-y-[10px]  text-[14px] sm:text-[16px]'>
                            <div><label className='text-[#f9bb17] font-[600]'>BÌNH LUẬN PHIM</label></div>
                            <div className='bg-white p-[10px] space-y-[10px] rounded-[5px]'>
                                <div className='flex items-center space-x-[10px]'>
                                    <Avatar size={50} className=' bg-red-500' >H</Avatar>
                                    <div>
                                        <div className='text-[#4d6aa4] font-[700]'><label>Trần Huy Hoàng</label></div>
                                        <Rate defaultValue={4} className='text-[14px]' />
                                    </div>
                                </div>
                                <div className='flex items-center justify-center space-x-[5px]'>
                                    <Input placeholder='Viết bình luận' />
                                    <Button type='default' className='bg-[#15bb37] text-white font-[600]'>ĐĂNG</Button>
                                </div>
                            </div>
                            <div className=' overflow-y-auto h-[500px] space-y-[10px] px-[10px] sm:px-[20px]'>
                                {dataPropose && dataPropose.map((item, index) => {
                                    return (
                                        <div key={item.id} className=' bg-white p-[10px] rounded-[5px] space-y-[5px]'>
                                            <div className='flex items-center justify-between space-x-[5px] sm:space-x-[10px]'>
                                                <div className='flex items-center space-x-[10px]'>
                                                    <Avatar size={50} className=' bg-green-500' >H</Avatar>
                                                    <div>
                                                        <div className='text-[#4d6aa4] font-[700]'><label>Lê Quang Hiếu</label></div>
                                                        <Rate disabled defaultValue={5} className='text-[14px]' />
                                                        <div className='flex sm:hidden items-center space-x-[10px] '>
                                                            <AiTwotoneCalendar />
                                                            <label>23/22/2021</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='hidden sm:flex items-center space-x-[10px] '>
                                                    <AiTwotoneCalendar />
                                                    <label>23/22/2021</label>
                                                </div>
                                            </div>
                                            <div >
                                                <label>Phim hay quá, lịch chiếu mỗi mỗi tập vào thứ mấy nhỉ ad ơi?</label>
                                            </div>
                                            <div className='flex items-center space-x-[10px]'>
                                                <Button size='small' danger className='flex items-center space-x-[5px]'>
                                                    20
                                                    <AiTwotoneLike />
                                                </Button>
                                                <Button size='small' danger className='flex items-center space-x-[5px]'>
                                                    12
                                                    <AiTwotoneDislike />
                                                </Button>
                                                <Button size='small' danger className=''>Phản hồi</Button>

                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        {/* Carousel */}
                        <div className='bg-[#0c0c0c] p-[20px] rounded-[5px] space-y-[10px] text-white'>
                            <div className='flex items-center justify-between text-[16px] font-[600]'>
                                <div><label className='text-[#06ccd1] font-[500] uppercase text-[12px] sm:text-[16px] '>CÓ THỂ BẠN QUAN TÂM</label></div>
                                <Button type='default' className='text-white'>XEM THÊM</Button>
                            </div>
                            <Carousel responsive={responsive} autoPlay={true} swipeable={true} draggable={true} showDots={true}
                                infinite={true} partialVisible={false} dotListClass="custom-dot-list-style">
                                {dataPropose && dataPropose.map((item, index) => {
                                    return (
                                        <div key={item.id} onClick={() => this.onClickPage(item.id)}
                                            className="slider p-[5px] space-y-[10px] cursor-pointer text-[14px]  " >
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
                            </Carousel>
                        </div>
                    </div>
                    <div className='col-span-1 space-y-[10px]'>
                        <div className='bg-[#0c0c0c] p-[10px] sm:p-[20px] rounded-[5px] truncate text-center'>
                            <label className='text-[#06ccd1] font-[500] uppercase text-[12px] sm:text-[16px]'>
                                PHIM ĐỀ CỬ
                            </label>
                        </div>
                        {dataPropose && dataPropose.map((item, index) => {
                            return (
                                <div key={item.id} onClick={() => this.onClickPage(item.id)}
                                    className='bg-[#0c0c0c] text-white p-[20px] rounded-[5px] space-y-[10px] cursor-pointer'>
                                    <div className='flex items-center justify-start rounded-[5px] space-x-[10px]'>
                                        <div className='h-[100px] w-[70px]'>
                                            <img src={require(`../../../assets/images/${item.img}`).default} alt="movie" />
                                        </div>
                                        <div className='text-[28px]  font-[500] italic'>
                                            <label>Top {index + 1}</label>
                                        </div>
                                    </div>
                                    <div className='truncate text-[14px] text-[#f9bb17]'><span>{item.name}</span></div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
        );
    }

}
export default withRouter(product);
