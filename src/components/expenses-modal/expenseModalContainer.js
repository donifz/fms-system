import React, { Component } from "react"

import { connect } from "react-redux"
import { bindActionCreators } from 'redux'
import * as actions from '../../redux/actions/actions'
import ExpensesModal from "./expenses-modal"



class ExpensesModalContainer extends Component {


    componentDidMount() {
        this.props.actions.settingsData()

    }



    render() {

        console.log(this.props)

        return (

            <ExpensesModal
                income={this.props.income}
                expenses={this.props.expenses}
                banks={this.props.banks}
                contragents={this.props.contragents}
                modalExpenses={this.props.modalExpenses}
                projects={this.props.projects}
                addExpensesTransPost={this.props.actions.addExpensesTransPost}

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
export default connect(mapStateToProps, mapDispatchToProps)(ExpensesModalContainer)