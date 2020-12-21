import React, { Component } from "react"

import { connect } from "react-redux"
import { bindActionCreators } from 'redux'
import * as actions from '../../redux/actions/actions'
import CreateUser from "./createUser"




class CreateUserContainer extends Component {


    componentDidMount() {
        

    }



    render() {

        console.log(this.props)

        return (

            <CreateUser 
            modalCreateUser={this.props.modalCreateUser}
            addUser ={this.props.actions.addUser}

            />
        )


    }


}
const mapStateToProps = (state) => {
    return {
        expenses: state.settingsReducer.expenses,
        

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateUserContainer)