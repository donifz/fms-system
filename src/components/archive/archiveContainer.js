import React, { Component } from 'react'
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'
import * as actions from '../../redux/actions/actions'
import Archive from './archive'

export class ArchiveContainer extends Component {
    componentDidMount(){
        this.props.actions.archiveData()
    }

    render() {
        return (
            <Archive bankArchive={this.props.bankArchive} unArchiveBank={this.props.actions.unArchiveBank} projectsArchive={this.props.projectsArchive} unArchiveProject={this.props.actions.unArchiveProject}/>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        bankArchive: state.archiveReducer.bankArchive,
        projectsArchive:state.archiveReducer.projectsArchive

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (ArchiveContainer)
