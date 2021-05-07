import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'
import * as actions from '../../redux/actions/actions'
import Filter from "./filters"
import MainPage from "./main-page"




class MainPageContainer extends Component {


    componentDidMount() {
        this.props.actions.settingsData()
        this.props.actions.curentPage(this.props.curentPage)
    }
    



    render() {

       

        return (
            <>
                <Filter
                    income={this.props.income}
                    expenses={this.props.expenses}
                    banks={this.props.banks}
                    contragents={this.props.contragents}
                    projects={this.props.projects}
                    jurnal={this.props.jurnal}
                    typeFilter={this.props.actions.typeFilter}
                    category={this.props.category}
                    filterTypeThunk={this.props.actions.filterTypeThunk}
                    filterType={this.props.actions.filterType}
                    filterAccountThunk={this.props.actions.filterAccountThunk}
                    filterContragentThunk={this.props.actions.filterContragentThunk}
                    exportExcelThunk={this.props.actions.exportExcelThunk}
                    exportUrl={this.props.exportUrl}
                    selectType={this.props.actions.selectType}
                />


                <MainPage
                    income={this.props.income}
                    expenses={this.props.expenses}
                    banks={this.props.banks}
                    contragents={this.props.contragents}
                    projects={this.props.projects}
                    jurnal={this.props.jurnal}
                    paginationPages={this.props.paginationPages}
                    paginationSelectPage={this.props.actions.paginationSelectPage}
                    curentPage={this.props.curentPage}
                    transactionDelete={this.props.actions.transactionDelete}
                />
               
            </>
            

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
        jurnal: state.settingsReducer.jurnal,
        category: state.settingsReducer.category,
        isFetching: state.settingsReducer.isFetching,
        paginationPages: state.settingsReducer.paginationPages,
        curentPage: state.settingsReducer.curentPage,
        exportUrl:state.settingsReducer.exportUrl

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MainPageContainer)