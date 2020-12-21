import React, { Component } from "react"

import { connect } from "react-redux"
import { bindActionCreators } from 'redux'
import * as actions from '../../redux/actions/actions'

import ContractorModal from "./contractorModal"
import CategoryExpensesModal from "./categoryExpensesModal"
import CategoryIncomeModal from "./categoryIncomeModal"
import Settings from "./settings"
import SureModal from "./sureModal"
import ProjectModal from "./projectModal"



class SettingsContainer extends Component {
    constructor() {
        super()
        this.state ={
            accountModal:false,
            categoryModalState:false,
            categoryExpensesState:false,
            contractorState:false,
            projectState:false,
            modalId:null,
            categoryId:null,
            categoryExpensesId:null,
            projectId:null
        }

    }

    componentDidMount() {
        this.props.actions.settingsData()

    }
   

    modalToggle = (id)=>{
        
        this.setState({accountModal:!this.state.accountModal})
        this.setState({modalId:id})
        
    }
    categoryIncomeToggle = (id)=>{
        // this.setState({accountModal:!this.state.accountModal})
        this.setState({categoryModalState:!this.state.categoryModalState})
        this.setState({categoryId:id})
        
    }

    categoryExpensesToggle = (id)=>{
        // this.setState({accountModal:!this.state.accountModal})
        this.setState({categoryExpensesState:!this.state.categoryExpensesState})
        this.setState({categoryExpensesId:id})
        
    }
    contractorToggle = (id)=>{
        // this.setState({accountModal:!this.state.accountModal})
        this.setState({contractorState:!this.state.contractorState})
        this.setState({contractorId:id})
        
    }

    categoryExpensesToggle = (id)=>{
        // this.setState({accountModal:!this.state.accountModal})
        this.setState({categoryExpensesState:!this.state.categoryExpensesState})
        this.setState({categoryExpensesId:id})
        
    }
    projectToggle = (id)=>{
        // this.setState({accountModal:!this.state.accountModal})
        this.setState({projectState:!this.state.projectState})
        this.setState({projectId:id})
        
    }


    render() {

        console.log(this.props)


        return (
            <>
            {this.state.accountModal && <SureModal banks={this.props.banks} modalToggle={this.modalToggle} archiveBankThunk ={this.props.actions.archiveBankThunk} id ={this.state.modalId}/>}
            {this.state.categoryModalState && <CategoryIncomeModal categoryIncomeToggle={this.categoryIncomeToggle} deleteIncomeActionPost={this.props.actions.deleteIncomeActionPost} id ={this.state.categoryId}/>}
            {this.state.categoryExpensesState && <CategoryExpensesModal categoryExpensesToggle={this.categoryExpensesToggle} deleteExpensesActionPost={this.props.actions.deleteExpensesActionPost} id ={this.state.categoryExpensesId}/>}
            {this.state.contractorState && <ContractorModal contractorToggle={this.contractorToggle}  deleteContractorActionPost={this.props.actions.deleteContractorActionPost} id ={this.state.contractorId}/>}
            {this.state.projectState && <ProjectModal projectToggle={this.projectToggle}  deletedProjectActionPost={this.props.actions.deletedProjectActionPost} id ={this.state.projectId}/>}
            <Settings
                income={this.props.income}
                expenses={this.props.expenses}
                banks={this.props.banks}
                contragents={this.props.contragents}
                projects={this.props.projects}
                text={this.props.text}
                addIncomeActionPost={this.props.actions.addIncomeActionPost}
                
                getInputText={this.props.actions.getInputText}
                addBankActionPost={this.props.actions.addBankActionPost}
                
                addExpensesActionPost={this.props.actions.addExpensesActionPost}
                deleteExpensesActionPost={this.props.actions.deleteExpensesActionPost}

                addContractorActionPost={this.props.actions.addContractorActionPost}
                deleteContractorActionPost={this.props.actions.deleteContractorActionPost}

                addProjectActionPost={this.props.actions.addProjectActionPost}
                deletedProjectActionPost={this.props.actions.deletedProjectActionPost}

                archiveBankThunk ={this.props.actions.archiveBankThunk}

                modalToggle={this.modalToggle}
                categoryIncomeToggle={this.categoryIncomeToggle}
                categoryExpensesToggle={this.categoryExpensesToggle}
                contractorToggle={this.contractorToggle}
                projectToggle = {this.projectToggle}

                projectToArhive ={this.props.actions.projectToArhive }
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
        isFetching: state.settingsReducer.isFetching,
        jurnal: state.settingsReducer.jurnal,
        text: state.settingsReducer.text,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer)