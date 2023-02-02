import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';
class MyComponent extends React.Component {
    // state = {
    //     name: 'hoang',
    //     channel: 'xax'
    // }
    // handleChange = (event) => {
    //     this.setState({
    //         name: event.target.value
    //     })
    // }
    // handleClickButton = () => {
    //     alert('click me')
    // }
    state = {
        arrJobs: [
            { id: '1', title: 'aa', salary: '500' },
            { id: '2', title: 'ab', salary: '600' },
            { id: '3', title: 'ac', salary: '700' }
        ]
    }
    addNewJob = (job) => {
        console.log('check:', job)
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }
    deleteJob = (job) => {
        let currentJob = this.state.arrJobs;
        currentJob = currentJob.filter(item => item.id !== job.id)
        this.setState({
            arrJobs: currentJob
        })
    }
    render() {
        // let x = "huy";
        return (
            <>
                {/* <div>
                    <input value={this.state.name} type="text" onChange={(event) => this.handleChange(event)}></input>
                    <h1>hello {this.state.name}</h1>
                </div>
                <div><h1>hello1 {this.state.channel}</h1></div>
                <div><h1>hello1 {x}</h1></div>
                <div className='fist'>
                    <button onClick={() => this.handleClickButton()}>click</button>
                </div> */}
                <AddComponent
                    addNewJob={this.addNewJob}
                />
                <ChildComponent
                    arrJobs={this.state.arrJobs}
                    deleteJob={this.deleteJob}
                />
            </>
        )
    }
}

export default MyComponent;