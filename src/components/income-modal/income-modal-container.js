import React, { Component } from "react"

import { connect } from "react-redux"
import { bindActionCreators } from 'redux'
import * as actions from '../../redux/actions/actions'
import IncomeModal from "./income-modal"



class IncomeModalContainer extends Component {


    componentDidMount() {
        this.props.actions.settingsData()

    }



    render() {

        console.log(this.props)

        return (

            <IncomeModal
                income={this.props.income}
                expenses={this.props.expenses}
                banks={this.props.banks}
                contragents={this.props.contragents}
                modalIncome={this.props.modalIncome}
                projects={this.props.projects}
                addIncomeTransPost={this.props.actions.addIncomeTransPost}

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
export default connect(mapStateToProps, mapDispatchToProps)(IncomeModalContainer)