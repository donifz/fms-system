import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'
import * as actions from '../../redux/actions/actions'
import Login from "./login"




class LoginContainer extends Component {


    componentDidMount() {
        this.props.actions.settingsData()

    }



    render() {

        

        return (

            <Login loginActionThunk={this.props.actions.login} />
        )


    }


}
const mapStateToProps = (state) => {
    return {
        

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)