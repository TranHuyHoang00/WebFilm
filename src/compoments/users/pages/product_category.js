import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Input } from 'antd';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import { getListFilm } from '../../../services/filmServices';
import { AiFillStar } from "react-icons/ai";

class product_category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code_category: 0,
            dataFilms: [],
            code_filter: 1,
        }
    }
    async componentDidMount() {
        if (this.props.match && this.props.match.params) {
            let id = this.props.match.params.id;
            this.setState({ code_category: id })
            await this.getListFilm(id);
        }
    }
    getListFilm = async (id) => {
        try {
            let data = await getListFilm();
            if (data && data.data && data.data.success == 1) {
                let dataRaw = data.data.data;
                let dataFilterCategoty = [];
                let dataFilterRate = [];
                if (id == 0) {
                    dataFilterCategoty = dataRaw;
                } else {
                    for (const i of dataRaw) {
                        if (i && i.category && i.category.code == id) {
                            dataFilterCategoty.push(i);
                        }
                    }
                }
                for (const i of dataFilterCategoty) {
                    let film = i;
                    let rate = this.rate_Calculation(i.comment);
                    film.total_rate = rate;
                    dataFilterRate.push(film);
                }
                dataFilterRate.sort((a, b) => b.total_rate - a.total_rate);
                this.setState({ dataFilms: dataFilterRate })
            } else {
                this.setState({ dataFilms: [] })
            }
        } catch (e) {
            console.log('Lỗi', e);
        }
    }
    rate_Calculation = (comments) => {
        let averageRating = 0;
        if (comments && comments.length !== 0) {
            const totalRating = comments.reduce((acc, comment) => acc + comment.rate, 0);
            averageRating = totalRating / comments.length;

        }
        return averageRating;
    }
    onChangeCategory = async (event) => {
        let id = event.target.value;
        this.setState({ code_category: id, code_filter: 1 })
        this.props.history.push(`/home/product_category/${id}`);
        await this.getListFilm(id);
    }
    onChangeFilter = async (event) => {
        let id = event.target.value;
        let dataRaw = this.state.dataFilms;
        if (id == 1) {
            dataRaw.sort((a, b) => b.total_rate - a.total_rate);
        }
        if (id == 2) {
            dataRaw.sort((a, b) => a.total_rate - b.total_rate);
        }
        if (id == 3) {
            dataRaw.sort((a, b) => a.name.localeCompare(b.name));
        }
        if (id == 4) {
            dataRaw.sort((a, b) => b.name.localeCompare(a.name));
        }
        this.setState({ dataFilms: dataRaw, code_filter: id })
    }
    onClickPage = (id) => {
        this.props.history.push(`/home/product_detail/${id}`)
    }
    render() {
        let dataFilms = this.state.dataFilms;
        return (
            <div className='px-[10px] sm:px-[60px] lg:px-[100px] py-[20px] space-y-[10px] bg-[#1a1a1a]'>
                <div className='bg-[#0c0c0c] p-[10px] sm:p-[20px] rounded-[5px] truncate'>
                    <label className='text-[#06ccd1] font-[500] uppercase text-[12px] sm:text-[16px]'>
                        Trang chủ / Thể loại
                    </label>
                </div>
                <div className='bg-[#0c0c0c] p-[20px] rounded-[5px] space-y-[10px] text-white'>
                    <div className='flex items-center justify-between text-[16px] font-[600]'>
                        <select className='text-black rounded-[5px] px-[10px] py-[5px]'
                            value={this.state.code_filter} onChange={(event) => this.onChangeFilter(event)}>
                            <option value={1}>Rate cao nhất</option>
                            <option value={2}>Rate thấp nhất</option>
                            <option value={3}>Tên A-Z</option>
                            <option value={4}>Tên Z-A</option>
                        </select>                        <select className='text-black rounded-[5px] px-[10px] py-[5px]'
                            value={this.state.code_category} onChange={(event) => this.onChangeCategory(event)}>
                            <option value={0}>Tất cả</option>
                            <option value={1}>Hành động</option>
                            <option value={2}>Kinh dị</option>
                            <option value={3}>Tình cảm</option>
                            <option value={4}>Hài hước</option>
                        </select>
                    </div>
                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-[10px] gap-y-[30px]'>
                        {dataFilms && dataFilms.map((item, index) => {
                            return (
                                <div key={item.id} onClick={() => this.onClickPage(item.id)}
                                    className="slider p-[5px] space-y-[10px] cursor-pointer text-[14px] border border-[#272727] rounded-[5px]" >
                                    <div className='relative text-white '>
                                        {item && item.image &&
                                            <img src={require(`../../../assets/images/${item.image}`).default} alt="movie"
                                                className='h-[250px] sm:h-[300px] w-full rounded-[5px]' />
                                        }
                                        <div className='absolute top-[10px] left-0 '>
                                            <span className='bg-[#f9bb17] py-[5px] px-[10px] font-[600]'>TOP {index + 1}</span>
                                        </div>

                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <div className='flex items-center space-x-[4px]    font-[600]'>
                                            <span className=''>{(item.total_rate).toFixed(1)} </span>
                                            <AiFillStar className='text-yellow-300' />
                                        </div>
                                        {item && item.category && item.category.code == 1 &&
                                            <div>
                                                <span className='text-white bg-[#15bb37] px-[4px] py-[2px] rounded-[2px] font-[600]'>{item && item.category && item.category.name}</span>
                                            </div>
                                        }
                                        {item && item.category && item.category.code == 2 &&
                                            <div>
                                                <span className='text-white bg-[#e73f2f] px-[4px] py-[2px] rounded-[2px] font-[600]'>{item && item.category && item.category.name}</span>
                                            </div>
                                        }
                                        {item && item.category && item.category.code == 3 &&
                                            <div>
                                                <span className='text-white bg-[#3e41ee] px-[4px] py-[2px] rounded-[2px] font-[600]'>{item && item.category && item.category.name}</span>
                                            </div>
                                        }
                                        {item && item.category && item.category.code == 4 &&
                                            <div>
                                                <span className='text-white bg-[#d838bd] px-[4px] py-[2px] rounded-[2px] font-[600]'>{item && item.category && item.category.name}</span>
                                            </div>
                                        }

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
const mapStateToProps = state => {
    return {
        dataSearch: state.film.dataSearch,
    };
};
const mapDispatchToProps = dispatch => {
    return {
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(product_category));
