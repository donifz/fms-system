import React, { Component } from "react"

import { connect } from "react-redux"
import { bindActionCreators } from 'redux'
import * as actions from '../../redux/actions/actions'
import Charts from "./charts"




class ChartsContainer extends Component {


    componentDidMount() {
        this.props.actions.chartsData()

    }



    render() {



        return (

            <Charts
            typeChart={this.props.typeChart}
            categoryIncomeChart={this.props.categoryIncomeChart}

            categoryExpensesChart={this.props.categoryExpensesChart}

            projectsChart={this.props.projectsChart}
            chartPeriod={this.props.actions.chartPeriod}
            />
        )


    }


}
const mapStateToProps = (state) => {
    return {
        typeChart:state.chartsReducer.type,
        categoryIncomeChart:state.chartsReducer.categoryIncomeChart,
        categoryExpensesChart:state.chartsReducer.categoryExpensesChart,
        projectsChart:state.chartsReducer.projectsChart,
        
    
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ChartsContainer)