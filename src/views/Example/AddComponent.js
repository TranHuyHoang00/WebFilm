import React from 'react';
class AddComponent extends React.Component {
    state = {
        title: '',
        salary: '',
    }
    handleJobs = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault() /*ngan k load lai trang */
        console.log('data', this.state)

        this.props.addNewJob({
            id: Math.floor(Math.random() * 1001),
            title: this.state.title,
            salary: this.state.salary
        })

        this.setState({
            title: '',
            salary: ''
        })
    }
    render() {
        return (
            <form >
                <label htmlFor="fname">Jobs:</label><br />
                <input type="text" value={this.state.title} onChange={(event) => this.handleJobs(event)} /><br />
                <label htmlFor="lname">Salary:</label><br />
                <input type="text" value={this.state.salary} onChange={(event) => this.handleSalary(event)} /><br /><br />
                <input type="submit" onClick={(event) => this.handleSubmit(event)} />
            </form>
        )
    }
}
export default AddComponent;