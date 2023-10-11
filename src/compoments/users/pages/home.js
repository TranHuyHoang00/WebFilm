import React from 'react';
import { toast } from 'react-toastify';
import { withRouter } from 'react-router-dom';
import Carousel from "react-multi-carousel";
import { Button } from 'antd';
import "react-multi-carousel/lib/styles.css";
import { getListFilm } from '../../../services/filmServices';
class home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataFilms: [],
            dataActions: [],
            dataHorrors: [],
            dataRomances: [],
            dataComedys: [],
        }
    }
    async componentDidMount() {
        await this.getListFilm();
    }
    getListFilm = async () => {
        try {
            let data = await getListFilm();
            if (data && data.data && data.data.success == 1) {
                let dataRaw = data.data.data;
                let dataActions = [];
                let dataHorrors = [];
                let dataRomances = [];
                let dataComedys = [];
                for (const i of dataRaw) {
                    if (i && i.category && i.category.code == 1) {
                        dataActions.push(i);
                    }
                    if (i && i.category && i.category.code == 2) {
                        dataHorrors.push(i);
                    }
                    if (i && i.category && i.category.code == 3) {
                        dataRomances.push(i);
                    }
                    if (i && i.category && i.category.code == 4) {
                        dataComedys.push(i);
                    }
                }
                let dataFilms = dataRaw.slice(9, 20)
                this.setState({
                    dataFilms: dataFilms,
                    dataActions: dataActions,
                    dataComedys: dataComedys,
                    dataHorrors: dataHorrors,
                    dataRomances: dataRomances,
                })
            } else {
                return this.setState({ dataFilms: [] })
            }
        } catch (e) {
            console.log('Lỗi', e);
        }
    }
    onClickPage = (id) => {
        this.props.history.push(`home/product_detail/${id}`)
    }
    onClickMore = (id) => {
        this.props.history.push(`home/product_category/${id}`)
    }
    render() {
        const responsive = {
            desktop0: { breakpoint: { max: 3000, min: 1280 }, items: 5, slidesToSlide: 5 },
            desktop1: { breakpoint: { max: 1280, min: 1024 }, items: 4, slidesToSlide: 4 },
            tablet: { breakpoint: { max: 1024, min: 640 }, items: 3, slidesToSlide: 3 },
            mobile: { breakpoint: { max: 640, min: 300 }, items: 2, slidesToSlide: 2 }
        };
        let dataFilms = this.state.dataFilms;
        let dataActions = this.state.dataActions;
        let dataComedys = this.state.dataComedys;
        let dataHorrors = this.state.dataHorrors;
        let dataRomances = this.state.dataRomances;
        return (
            <div className='px-[10px] sm:px-[60px] lg:px-[100px] py-[20px] space-y-[30px] bg-[#1a1a1a]'>
                <div className='bg-[#0c0c0c] p-[20px] rounded-[5px] space-y-[10px] text-white'>
                    <div className='flex items-center justify-between text-[16px] font-[600]'>
                        <div><label className='text-[#06ccd1] font-[500] uppercase text-[12px] sm:text-[16px] '>PHIM MỚI</label></div>
                        <Button onClick={() => this.onClickMore(0)} type='default' className='text-white'>XEM THÊM</Button>
                    </div>
                    <Carousel responsive={responsive} autoPlay={true} swipeable={true} draggable={true} showDots={true}
                        infinite={true} partialVisible={false} dotListClass="custom-dot-list-style">
                        {dataFilms && dataFilms.map((item, index) => {
                            return (
                                <div key={item.code} onClick={() => this.onClickPage(item.code)}
                                    className="slider p-[5px] space-y-[10px] cursor-pointer text-[14px]  " >
                                    <div className='relative text-white '>
                                        {item && item.image &&
                                            <img src={require(`../../../assets/images/${item.image}`).default} alt="movie"
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
                        <div><label className='text-[#06ccd1] font-[500] uppercase text-[12px] sm:text-[16px] '>PHIM HÀNh ĐỘNG</label></div>
                        <Button onClick={() => this.onClickMore(1)} type='default' className='text-white'>XEM THÊM</Button>
                    </div>
                    <Carousel responsive={responsive} autoPlay={true} swipeable={true} draggable={true} showDots={true}
                        infinite={true} partialVisible={false} dotListClass="custom-dot-list-style">
                        {dataActions && dataActions.map((item, index) => {
                            return (
                                <div key={item.code} onClick={() => this.onClickPage(item.code)}
                                    className="slider p-[5px] space-y-[10px] cursor-pointer text-[14px]  " >
                                    <div className='relative text-white '>
                                        {item && item.image &&
                                            <img src={require(`../../../assets/images/${item.image}`).default} alt="movie"
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
                <div className='bg-[#0c0c0c] p-[20px] rounded-[5px] space-y-[10px] text-white'>
                    <div className='flex items-center justify-between text-[16px] font-[600]'>
                        <div><label className='text-[#06ccd1] font-[500] uppercase text-[12px] sm:text-[16px] '>PHIM KINH DỊ</label></div>
                        <Button onClick={() => this.onClickMore(2)} type='default' className='text-white'>XEM THÊM</Button>
                    </div>
                    <Carousel responsive={responsive} autoPlay={true} swipeable={true} draggable={true} showDots={true}
                        infinite={true} partialVisible={false} dotListClass="custom-dot-list-style">
                        {dataHorrors && dataHorrors.map((item, index) => {
                            return (
                                <div key={item.code} onClick={() => this.onClickPage(item.code)}
                                    className="slider p-[5px] space-y-[10px] cursor-pointer text-[14px]  " >
                                    <div className='relative text-white '>
                                        {item && item.image &&
                                            <img src={require(`../../../assets/images/${item.image}`).default} alt="movie"
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
                        <div><label className='text-[#06ccd1] font-[500] uppercase text-[12px] sm:text-[16px] '>PHIM TÌNH CẢM</label></div>
                        <Button onClick={() => this.onClickMore(3)} type='default' className='text-white'>XEM THÊM</Button>
                    </div>
                    <Carousel responsive={responsive} autoPlay={true} swipeable={true} draggable={true} showDots={true}
                        infinite={true} partialVisible={false} dotListClass="custom-dot-list-style">
                        {dataRomances && dataRomances.map((item, index) => {
                            return (
                                <div key={item.id} onClick={() => this.onClickPage(item.code)}
                                    className="slider p-[5px] space-y-[10px] cursor-pointer text-[14px]  " >
                                    <div className='relative text-white '>
                                        {item && item.image &&
                                            <img src={require(`../../../assets/images/${item.image}`).default} alt="movie"
                                                className='h-[250px] sm:h-[300px] w-full rounded-[5px]' />
                                        }
                                        <div className='absolute top-[10px] left-0 '>
                                            <span className='bg-[#f9bb17] py-[5px] px-[10px] font-[600]'>TÌNH CẢM</span>
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
                        <div><label className='text-[#06ccd1] font-[500] uppercase text-[12px] sm:text-[16px] '>PHIM HÀI HƯỚC</label></div>
                        <Button onClick={() => this.onClickMore(4)} type='default' className='text-white'>XEM THÊM</Button>
                    </div>
                    <Carousel responsive={responsive} autoPlay={true} swipeable={true} draggable={true} showDots={true}
                        infinite={true} partialVisible={false} dotListClass="custom-dot-list-style">
                        {dataComedys && dataComedys.map((item, index) => {
                            return (
                                <div key={item.id} onClick={() => this.onClickPage(item.code)}
                                    className="slider p-[5px] space-y-[10px] cursor-pointer text-[14px]  " >
                                    <div className='relative text-white '>
                                        {item && item.image &&
                                            <img src={require(`../../../assets/images/${item.image}`).default} alt="movie"
                                                className='h-[250px] sm:h-[300px] w-full rounded-[5px]' />
                                        }
                                        <div className='absolute top-[10px] left-0 '>
                                            <span className='bg-[#f9bb17] py-[5px] px-[10px] font-[600]'>HÀI HƯỚC</span>
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