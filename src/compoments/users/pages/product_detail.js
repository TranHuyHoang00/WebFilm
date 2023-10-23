import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import Carousel from "react-multi-carousel";
import { Button, Rate, Image, Avatar, Input } from 'antd';
import { AiTwotoneCalendar, AiTwotoneLike, AiTwotoneDislike, AiFillStar } from "react-icons/ai";
import { getFilm, getListFilm, CreateComment, TrainComment } from '../../../services/filmServices';
import { Get_Local_Acount_User } from '../../../auths/local_storage';
import { toast } from 'react-toastify';
class product_detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataFilm: {},
            dataFilms: [],
            dataAcount: {},
            categoryFilm: null,
            dataFilmsRecommended: [],
            dataComment: {
                rate: 5,
                category: 1,
            },
            idFilm: '',
        }
    }
    async componentDidMount() {
        if (this.props.match && this.props.match.params) {
            let dataLogin = Get_Local_Acount_User();
            let id = this.props.match.params.id;
            this.setState({ idFilm: id })
            await this.getFilm(id);
            await this.getListFilm();
            if (dataLogin && dataLogin.data && dataLogin.data.access) {
                this.setState({ dataAcount: dataLogin.data.user })
            } else { this.setState({ dataAcount: null }) }
        }
    }
    getFilm = async (id) => {
        try {
            let data = await getFilm(id);
            if (data && data.data && data.data.success == 1) {
                let dataRaw = data.data.data;
                this.setState({
                    dataFilm: dataRaw,
                    categoryFilm: dataRaw.category_train.code
                })
            } else {
                this.setState({ dataFilm: {} })
            }
        } catch (e) {
            console.log('Lỗi', e);
        }
    }
    getListFilm = async () => {
        try {
            let data = await getListFilm();
            if (data && data.data && data.data.success == 1) {
                let dataRaw = data.data.data;
                let categoryFilm = this.state.categoryFilm;
                let dataFilterCategoty = [];
                for (const i of dataRaw) {
                    if (i && i.category && i.category.code == categoryFilm) {
                        dataFilterCategoty.push(i);
                    }
                }
                dataFilterCategoty.sort((a, b) => b.rate - a.rate);
                let dataFilmsRecommended = dataFilterCategoty.slice(0, 9)
                let dataFilms = dataFilterCategoty.slice(0, 9);
                this.setState({ dataFilms: dataFilms, dataFilmsRecommended: dataFilmsRecommended })

            } else {
                this.setState({ dataFilms: [] })
            }
        } catch (e) {
            console.log('Lỗi', e);
        }
    }
    onClickPage = async (id) => {
        await this.getFilm(id);
        this.props.history.push(`/home/product_detail/${id}`)
    }
    handleOnChangeInput = (event, id) => {
        let copyState = { ...this.state.dataComment };
        copyState[id] = event.target.value;
        this.setState({
            dataComment: {
                ...copyState,
                movie: this.state.idFilm,

            }
        });
    }
    handleOnChangeRate = (event) => {
        this.setState({
            dataComment: {
                ...this.state.dataComment,
                rate: event,
            }
        })
    }
    TrainComment = async () => {
        try {
            let data = await TrainComment();
        } catch (e) {
            console.log('Lỗi', e);
        }
    }
    handleCreateComment = async () => {
        let result = this.Validation();
        if (result.code == 0) {
            try {
                let data = await CreateComment(this.state.dataComment);
                if (data && data.data && data.data.success == 1) {
                    await this.TrainComment();
                    await this.getFilm(this.state.idFilm);
                    toast.success('Bình luận thành công');
                } else {
                    toast.error('Lỗi');
                }
            } catch (e) {
                toast.error('Lỗi');
            }
        } else {
            toast.error(result.mess);
        }
    }
    isCheckEmpty = (value) => {
        return value.trim().length
    }
    isCheckSpace = (value) => {
        return (/\s/).test(value);
    }
    Validation = () => {
        let dataComment = this.state.dataComment;
        if (!dataComment.content) {
            return { mess: "Thiếu Nội dung", code: 1 };
        }
        return { code: 0 };
    }
    render() {
        let dataFilm = this.state.dataFilm;
        let dataFilms = this.state.dataFilms;
        let dataAcount = this.state.dataAcount;
        let dataFilmsRecommended = this.state.dataFilmsRecommended;
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
                                Trang chủ / phim / {dataFilm.name}
                            </label>
                        </div>
                        <div className='block sm:grid sm:grid-cols-2 md:grid-cols-3 gap-[20px] space-y-[10px] sm:space-y-[0px]'>
                            <div className='bg-[#0c0c0c] p-[20px] space-y-[10px] rounded-[5px]'>
                                <div className='flex items-center justify-center'>
                                    <img className='rounded-[5px] w-[250px] sm:w-full h-full' src={require(`../../../assets/images/${dataFilm.image ? dataFilm.image : '1.jpg'}`).default} alt="movie" />
                                </div>
                                <div className='flex items-center justify-center '>
                                    <Button type='default' className='bg-[#15bb37] text-white font-[600]'>XEM PHIM</Button>
                                </div>
                            </div>
                            <div className='md:col-span-2 bg-[#0c0c0c] p-[20px] rounded-[5px] space-y-[10px] sm:space-y-[20px]'>
                                <div className=''>
                                    <label className='text-[#f9bb17] text-[20px] sm:text-[22px] font-[600] uppercase'>{dataFilm.name}</label>
                                </div>
                                <div className=' text-white text-[14px] md:text-[16px] space-y-[8px]'>
                                    <div className='space-x-[5px] flex items-center'>
                                        <label className=''>Tổng đánh giá :</label>
                                        <span className='text-[#06ccd1]'>{dataFilm.rate} </span>
                                        <AiFillStar className='text-yellow-300' />
                                    </div>
                                    <div className='space-x-[5px]'>
                                        <label className=''>Bình luận :</label>
                                        <span className='text-[#06ccd1]'> {dataFilm.comment && dataFilm.comment.length} lượt bình luận</span>
                                    </div>
                                    <div className='space-x-[5px]'>
                                        <label className=''>Thể loại :</label>
                                        <span className='text-white bg-[#15bb37] px-[4px] py-[2px] rounded-[2px] font-[600]'>{dataFilm.category && dataFilm.category.name}</span>
                                    </div>
                                    <div className='space-x-[5px]'>
                                        <label className=''>Thể loại - người dùng :</label>
                                        <span className='text-white bg-[#15bb37] px-[4px] py-[2px] rounded-[2px] font-[600]'>{dataFilm.category_train ? dataFilm.category_train.name : 'None'}</span>
                                    </div>
                                    <div className='space-x-[5px]'>
                                        <label className=''>Năm sản xuất :</label>
                                        <span className='text-[#06ccd1]'>{dataFilm.year_of_manufacture}</span>
                                    </div>
                                    <div className='space-x-[5px]'>
                                        <label className=''>Quốc gia :</label>
                                        <span className='text-[#06ccd1]'>{dataFilm.country}</span>
                                    </div>
                                    <div className='space-x-[5px]'>
                                        <label className=''>Thời lượng :</label>
                                        <span className='text-[#06ccd1]'>{dataFilm.duration} phút</span>
                                    </div>
                                    <div className='space-x-[5px]'>
                                        <label className=''>Lượt xem :</label>
                                        <span className='text-[#06ccd1]'>{`${902110}`.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} lượt xem</span>
                                    </div>
                                    <div className='space-x-[5px]'>
                                        <label className=''>Chất lượng :</label>
                                        <span className='text-white bg-[#15bb37] px-[4px] py-[2px] rounded-[2px] font-[600]'>FULL HD</span>
                                    </div>
                                    <div className='space-x-[5px]'>
                                        <label className=''>Ngôn ngữ :</label>
                                        <span className='text-white bg-[#e73f2f] px-[4px] py-[2px] rounded-[2px] font-[600]'>VIETSUB</span>
                                    </div>
                                    <div className='space-x-[5px]'>
                                        <label className=''>Ngày cập nhập :</label>
                                        <span className='text-[#06ccd1]'>
                                            {dataFilm.updated_at}
                                        </span>
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* Content */}
                        <div className='bg-[#0c0c0c] p-[20px] rounded-[5px] space-y-[10px]'>
                            <div><label className='text-[#f9bb17] text-[14px] sm:text-[16px] font-[600]'>NỘI DUNG PHIM</label></div>
                            <div className='text-white'>
                                <span >
                                    {dataFilm.content}
                                </span>
                            </div>
                        </div>
                        {/* Comment */}
                        <div className='bg-[#0c0c0c] p-[20px] rounded-[5px] space-y-[10px]  text-[14px] sm:text-[16px]'>
                            <div><label className='text-[#f9bb17] font-[600]'>BÌNH LUẬN PHIM</label></div>
                            <div className='bg-white p-[10px] space-y-[10px] rounded-[5px]'>
                                <div className='flex items-center space-x-[10px]'>
                                    {dataAcount == null ?
                                        <>
                                            <span className='text-red-500 font-[600]'>Vui lòng đăng nhập để bình luận</span>
                                        </>
                                        :
                                        <>
                                            <Avatar size={50} className=' bg-red-500' >{dataAcount && dataAcount.first_name}</Avatar>
                                            <div>
                                                <div className='text-[#4d6aa4] font-[700]'><label>{dataAcount && dataAcount.first_name} {dataAcount && dataAcount.last_name}</label></div>
                                                <Rate value={this.state.dataComment.rate}
                                                    onChange={(event) => this.handleOnChangeRate(event, 'rate')}
                                                    className='text-[14px]' />
                                            </div>
                                        </>
                                    }

                                </div>
                                {dataAcount == null ?
                                    <div className='flex items-center justify-center space-x-[5px] '>
                                        <Input disabled placeholder='Viết bình luận' />

                                        <Button disabled type='default' className='bg-[#15bb37] text-white font-[600]'>ĐĂNG</Button>
                                    </div> :
                                    <div className='flex items-center justify-center space-x-[5px]'>
                                        <Input onChange={(event) => this.handleOnChangeInput(event, 'content')}
                                            placeholder='Viết bình luận' />
                                        <select value={this.state.dataComment.category}
                                            onChange={(event) => this.handleOnChangeInput(event, 'category')}
                                            className='border rounded-[5px] py-[4px] px-[5px]'>
                                            <option value={1}>Hành Động</option>
                                            <option value={2}>Kinh dị</option>
                                            <option value={3}>Tình cảm</option>
                                            <option value={4}>Hài hưóc</option>
                                        </select>
                                        <Button onClick={() => this.handleCreateComment()}
                                            type='default' className='bg-[#15bb37] text-white font-[600]'>ĐĂNG</Button>
                                    </div>
                                }

                            </div>
                            <div className=' overflow-y-auto h-[500px] space-y-[10px] px-[10px] sm:px-[20px]'>
                                {dataFilm && dataFilm.comment && dataFilm.comment.map((item, index) => {
                                    return (
                                        <div key={item.code} className=' bg-white p-[10px] rounded-[5px] space-y-[5px]'>
                                            <div className='flex items-center justify-between space-x-[5px] sm:space-x-[10px]'>
                                                <div className='flex items-center space-x-[10px]'>
                                                    <Avatar size={50} className=' bg-green-500' >{item.user && item.user.first_name}</Avatar>
                                                    <div>
                                                        <div className='text-[#4d6aa4] font-[700]'><label>{item.user && item.user.first_name} {item.user && item.user.last_name}</label></div>
                                                        <Rate disabled defaultValue={item.rate} className='text-[14px]' />
                                                        <div className='flex sm:hidden items-center space-x-[10px] '>
                                                            <AiTwotoneCalendar />
                                                            <label>
                                                                {item.created_at}
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='hidden sm:flex items-center space-x-[10px] '>
                                                    <AiTwotoneCalendar />
                                                    <label>
                                                        {item.created_at}
                                                    </label>
                                                </div>
                                            </div>
                                            <div >
                                                <label>{item.content}</label>
                                            </div>
                                            <div className='flex items-center space-x-[10px]'>

                                                <Button size='small' className='bg-red-400 text-white'>{item.category && item.category.name}</Button>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        {/* Same category movie */}
                        <div className='bg-[#0c0c0c] p-[20px] rounded-[5px] space-y-[10px] text-white'>
                            <div className='flex items-center justify-between text-[16px] font-[600]'>
                                <div><label className='text-[#06ccd1] font-[500] uppercase text-[12px] sm:text-[16px] '>CÙNG THỂ LOẠI</label></div>
                                <Button type='default' className='text-white'>XEM THÊM</Button>
                            </div>
                            <Carousel responsive={responsive} autoPlay={true} swipeable={true} draggable={true} showDots={true}
                                infinite={true} partialVisible={false} dotListClass="custom-dot-list-style">
                                {dataFilms && dataFilms.map((item, index) => {
                                    return (
                                        <div key={item.id} onClick={() => this.onClickPage(item.code)}
                                            className="slider p-[5px] space-y-[10px] cursor-pointer text-[14px]  " >
                                            <div className='relative text-white '>
                                                {item && item.image &&
                                                    <img src={require(`../../../assets/images/${item.image}`).default} alt="movie"
                                                        className='h-[250px] sm:h-[300px] w-full rounded-[5px]' />
                                                }
                                                <div className='absolute top-[10px] left-0 '>
                                                    <span className='bg-[#f9bb17] py-[5px] px-[10px] font-[600]'>{item.category && item.category.name}</span>
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
                    {/* Recommended movie*/}
                    <div className='col-span-1 space-y-[10px]'>
                        <div className='bg-[#0c0c0c] p-[10px] sm:p-[20px] rounded-[5px] truncate text-center'>
                            <label className='text-[#06ccd1] font-[500] uppercase text-[12px] sm:text-[16px]'>
                                PHIM ĐỀ CỬ
                            </label>
                        </div>
                        {dataFilmsRecommended && dataFilmsRecommended.map((item, index) => {
                            return (
                                <div key={item.code} onClick={() => this.onClickPage(item.code)}
                                    className='bg-[#0c0c0c] text-white p-[20px] rounded-[5px] space-y-[10px] cursor-pointer'>
                                    <div className='flex items-center justify-start rounded-[5px] space-x-[10px]'>
                                        <div className='h-[100px] w-[70px]'>
                                            <img src={require(`../../../assets/images/${item.image}`).default} alt="movie" />
                                        </div>
                                        <div className='space-y-[4px]'>
                                            <div> <label className='text-[28px]  font-[500] italic'>Top {index + 1}</label></div>
                                            <div><span className='text-white bg-[#15bb37] px-[4px] py-[2px] rounded-[2px] font-[600]'>{item.category && item.category.name}</span></div>
                                            <div className='flex items-center space-x-[4px]'>
                                                <span className='text-[#06ccd1]'>{(item.rate).toFixed(2)} </span>
                                                <AiFillStar className='text-yellow-300' />
                                            </div>
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
export default withRouter(product_detail);
