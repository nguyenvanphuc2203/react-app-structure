import React from 'react';
import Header from '../components/Header';
import { connect } from 'react-redux';
import { requestProfile, requestUsers } from '../actions/actionCreators';
import { bindActionCreators } from 'redux';
import TableUsers from './../components/TableUsers'
import ProfileInfo from './../components/ProfileInfo';
import { Button } from 'react-bootstrap';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.getProfile = this.getProfile.bind(this);

    }

    getProfile() {
        this.props.requestProfile();
    }

    render() {
        const { profile, users } = this.props;

        return (
            [<Header />,
            <div className='main-content'>
                <Button onClick={this.getProfile}>Request Profile</Button>
                {profile.id &&
                    <ProfileInfo profileInfo={profile} />
                }

            </div>
            ]
        );
    }
}

const mapStateToProps = state => ({
    profile: state.profile,
    users: state.users
});

const mapDispactchToProps = dispatch =>
    bindActionCreators({ requestProfile, requestUsers }, dispatch);

export default connect(mapStateToProps, mapDispactchToProps)(Home);