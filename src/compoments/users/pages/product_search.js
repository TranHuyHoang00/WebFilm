import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Input } from 'antd';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import { SearchFilm, getListFilm } from '../../../services/filmServices';
import { AiFillStar } from "react-icons/ai";

class product_search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataFilms: [],
            dataSearch: null,
            dataFilm: []

        }
    }
    async componentDidMount() {
        let dataSearch = this.props.dataSearch;
        if (dataSearch !== null) {
            await this.SearchFilm(dataSearch);
            this.setState({ dataSearch: dataSearch })
        }
    }
    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.dataSearch !== this.props.dataSearch) {
            await this.SearchFilm(this.props.dataSearch);
            this.setState({ dataSearch: this.props.dataSearch })
        }
    }
    SearchFilm = async (text) => {
        try {
            let data = await SearchFilm({ content: text });
            if (data && data.data && data.data.success == 1) {
                let dataRaw = data.data.data;
                if (dataRaw.length == 1) {
                    this.setState({ dataFilm: dataRaw })
                } else {
                    this.setState({
                        dataFilms: dataRaw,
                    })
                }

            } else {
                return this.setState({ dataFilms: [] })
            }
        } catch (e) {
            console.log('Lỗi', e);
        }
    }
    onClickPage = (id) => {
        this.props.history.push(`/home/product_detail/${id}`)
    }
    render() {
        let dataSearch = this.state.dataSearch;
        let dataFilms = this.state.dataFilms;
        let dataFilm = this.state.dataFilm;
        return (
            <div className='px-[10px] sm:px-[60px] lg:px-[100px] py-[20px] space-y-[10px] bg-[#1a1a1a]'>
                <div className='bg-[#0c0c0c] p-[10px] sm:p-[20px] rounded-[5px] truncate'>
                    <label className='text-[#06ccd1] font-[500] uppercase text-[12px] sm:text-[16px]'>
                        Trang chủ / Tìm kiếm
                    </label>
                </div>
                <div className='bg-[#0c0c0c] p-[20px] rounded-[5px] space-y-[10px] text-white'>
                    <div><label className='text-[#06ccd1] font-[500] uppercase text-[12px] sm:text-[16px] '>BỘ TÌM KIẾM </label></div>
                    <div className='flex items-center justify-start space-x-[10px]'>
                        <label className=''>Tìm kiếm :</label>
                        <span className='text-red-500'>{dataSearch}</span>
                    </div>
                    <div className='flex items-center justify-start space-x-[10px]'>
                        <label className=''>Kết quả nhãn :</label>
                        <span className='text-white bg-[#e73f2f] px-[4px] py-[2px] rounded-[2px] font-[600]'>Hành động</span>
                    </div>
                </div>
                <div className='bg-[#0c0c0c] p-[20px] rounded-[5px] space-y-[10px] text-white'>
                    <div className='flex items-center justify-between text-[16px] font-[600]'>
                        <div><label className='text-[#06ccd1] font-[500] uppercase text-[12px] sm:text-[16px] '>PHIM TÌM KIẾM</label></div>
                    </div>
                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-[10px] gap-y-[30px]'>
                        {dataFilm && dataFilm.map((item, index) => {
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
                                            {/* <span className=''>{(item.total_rate).toFixed(1)} </span> */}
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
                <div className='bg-[#0c0c0c] p-[20px] rounded-[5px] space-y-[10px] text-white'>
                    <div className='flex items-center justify-between text-[16px] font-[600]'>
                        <div><label className='text-[#06ccd1] font-[500] uppercase text-[12px] sm:text-[16px] '>PHIM ĐỀ CỬ</label></div>
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
                                            {/* <span className=''>{(item.total_rate).toFixed(1)} </span> */}
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
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(product_search));
