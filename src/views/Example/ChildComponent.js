import { toHaveFocus } from '@testing-library/jest-dom/dist/matchers';
import React from 'react';
import './Demo.scss';
class ChildComponent extends React.Component {
    state = {
        ShowJobs: false
    }
    handleShowHide = () => {
        this.setState({
            ShowJobs: !this.state.ShowJobs
        })
    }
    handleOnClickDelete = (job) => {
        console.log('here:', job)
        this.props.deleteJob(job)
    }
    render() {
        // let name = this.props.name;
        // let age = this.props.age;
        let { arrJobs } = this.props;
        let { ShowJobs } = this.state;
        return (
            <>
                {ShowJobs === false ?
                    <div><button className='btn-show' onClick={() => this.handleShowHide()}>Show</button></div>
                    :
                    <>
                        <div><button onClick={() => this.handleShowHide()}>Hide</button></div>
                        <div>
                            {
                                arrJobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>{/*key tranh bi erro*/}
                                            {item.title}-{item.salary}$
                                            <></> <span onClick={() => this.handleOnClickDelete(item)}>x</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </>
                }
            </>
        )
    }
}

export default ChildComponent;