import React, { Component } from "react"

import { connect } from "react-redux"
import { bindActionCreators } from 'redux'
import * as actions from '../../redux/actions/actions'
import TransferModal from "./transferModal"



class TransferModalContainer extends Component {


    componentDidMount() {
        this.props.actions.settingsData()

    }



    render() {

        console.log(this.props)

        return (

            <TransferModal
                banks={this.props.banks}
                contragents={this.props.contragents}
                modalTransfer={this.props.modalTransfer}
                addTransferPost={this.props.actions.addTransferPost}

            />
        )


    }


}
const mapStateToProps = (state) => {
    return {
        expenses: state.settingsReducer.expenses,
        income: state.settingsReducer.income,
        banks: state.settingsReducer.banks,
        contragents: state.settingsReducer.contragents,
        projects: state.settingsReducer.projects,
        isFetching: state.settingsReducer.isFetching,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TransferModalContainer)