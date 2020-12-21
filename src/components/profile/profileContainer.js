import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Profile from './profile'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../redux/actions/actions'

export class ProfileContainer extends Component {
  
    
componentDidMount(){
    this.props.actions.profileData()
}

    render() {
        return (
            <>
            
            <Profile users={this.props.users} modalCreateUser={this.props.modalCreateUser} getMe={this.props.getMe} deleteUser={this.props.actions.deleteUser}/>
        </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        users:state.profileReducer.users,
        getMe:state.profileReducer.me
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (ProfileContainer)
