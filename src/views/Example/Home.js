import React from 'react';
import { withRouter } from "react-router";
import Color from "../HOC/Color";
import logo from "../../assets/images/logoChannel.png";
import { connect } from 'react-redux';
class Home extends React.Component {
    handleDeleteUser = (user) => {
        this.props.deleteUserRedux(user);
    }
    handleCreaterUser = () => {
        this.props.addUserRedux();
    }
    render() {
        let ListUsers = this.props.dataRedux;
        return (
            <>
                <div>Home now</div>
                <div>
                    <img src={logo} />
                </div>
                <div>
                    {ListUsers && ListUsers.length > 0 &&
                        ListUsers.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {index + 1}-{item.name}
                                    <span onClick={() => this.handleDeleteUser(item)}>x</span>
                                </div>
                            )
                        })
                    }
                </div>
                <button onClick={() => this.handleCreaterUser()}>+</button>
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete }),
        addUserRedux: () => dispatch({ type: 'CREATE_USER' }),
    }
}
// export default withRouter(Home);
export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));