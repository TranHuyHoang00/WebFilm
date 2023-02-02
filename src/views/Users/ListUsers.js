import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
class ListUsers extends React.Component {
    state = {
        ListUsers: []
    }
    async componentDidMount() {
        let res = await axios.get('https://reqres.in/api/users?page=2');
        this.setState({
            ListUsers: res && res.data && res.data.data ? res.data.data : []
        })
    }
    handleViewDetailUser = (user) => {
        this.props.history.push(`/user/${user.id}`)
    }
    render() {
        let { ListUsers } = this.state;
        return (
            <div >
                {ListUsers && ListUsers.length > 0 &&
                    ListUsers.map((item, index) => {
                        return (
                            <div className='child' key={item.id} onClick={() => this.handleViewDetailUser(item)}>
                                {index + 1}-{item.first_name}-{item.last_name}
                            </div>
                        )
                    })
                }

            </div>
        )
    }
}
export default withRouter(ListUsers);