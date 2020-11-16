import React from 'react';
import Header from '../components/Header';
import { connect } from 'react-redux';
import { requestUsers, deleteUsers } from '../actions/actionCreators';
import { bindActionCreators } from 'redux';
import TableUsers from './../components/TableUsers'
import { Button } from 'react-bootstrap';

class Users extends React.Component{

    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.requestUsers = this.requestUsers.bind(this);
    }

    requestUsers(){
        this.props.requestUsers();
    }

    handleClick(){
        this.props.deleteUsers();
    }

    render(){
        const { users } = this.props;

        return (
            [
                <Header/>,

                <div className='main-content'>
                        <Button onClick={this.requestUsers}>Request Users</Button>
                        <Button onClick={this.handleClick}>Drop Users</Button>
                        {users.length > 0 &&
                                <TableUsers users={users} />
                        }
                </div>
            ]
        );
    }
}

const mapStateToProps = state => ({
    profile : state.profile,
    users : state.users
});

const mapDispactchToProps = dispatch => 
    bindActionCreators({requestUsers, deleteUsers} , dispatch);

export default connect(mapStateToProps , mapDispactchToProps)(Users);