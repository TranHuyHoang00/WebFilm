import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
class footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    async componentDidMount() {
    }
    onClickPage = (name) => {
        if (name == 'home') { this.props.history.push(`/home`); }
    }
    render() {
        return (
            <div className='bg-[#0b0a0d] text-white py-[10px] sm:py-[20px] space-y-[20px]'>
                <div className='flex items-center justify-center'>
                    <img className='cursor-pointer' onClick={() => this.onClickPage('home')} src='https://motchillzz.tv/_ipx/f_webp&s_200x52/logo.png' />
                </div>
                <div className='text-center border-t-[1px] w-full pt-[10px]'>
                    <label>© 2023 Motchill. All rights reserved.</label>
                </div>
            </div>
        );
    }

}
export default withRouter(footer);
