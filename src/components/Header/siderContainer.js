import React, { Component } from "react"

import { connect } from "react-redux"
import { bindActionCreators } from 'redux'
import * as actions from '../../redux/actions/actions'
import Header from "./header"




class SiderContainer extends Component {


    componentDidMount() {
        this.props.actions.getBanksThunk()
    }
    render() {
        return (
            <>{this.props.isFetching ? <Header modalIncome={this.props.modalIncome} modalExpenses={this.props.modalExpenses} modalTransfer={this.props.modalTransfer} bankList={this.props.settingBankState } logout={this.props.actions.logout}  getMe={this.props.getMe}/> : null}
                <Header modalIncome={this.props.modalIncome} modalExpenses={this.props.modalExpenses} modalTransfer={this.props.modalTransfer} bankList={this.props.settingBankState} logout={this.props.actions.logout} getMe={this.props.getMe}/></>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        banks: state.bankList.banks,
        settingBankState: state.settingsReducer.banks,
        isFetching: state.bankList.isFetching,
        getMe:state.profileReducer.me
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SiderContainer)