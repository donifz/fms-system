import React from 'react';
import "./settings.css"
import deleteIcone from '../assets/icons/delete.png'
import archiveIcon from '../assets/icons/folder.png'
import AddCircleIcon from '@material-ui/icons/AddCircle';



const Settings = (props) => {
    let [expensesInput, setexpensesInput] = React.useState("")
    let [incomeInput, setIncomeInput] = React.useState("")
    let [contr, setContr] = React.useState("")
    let [project, setProject] = React.useState("")
    let [sureModal, setSureModal] = React.useState(false)
    // let [info,setInfo] =  React.useState()


    const incomeHandle = (e) => {
        setIncomeInput(e.target.value)

    }
    const expensesHandle = (e) => {
        setexpensesInput(e.target.value)

    }
    const addIncome = () => {
        props.addIncomeActionPost(incomeInput)
        setIncomeInput("")
    }
    const addExpenses = () => {
        props.addExpensesActionPost(expensesInput)
        setexpensesInput("")
    }

    const contrHandle = (e) => {
        setContr(e.target.value)

    }


    const addContr = () => {
        props.addContractorActionPost(contr)
        setContr("")
    }



    const projectHandle = (e) => {
        setProject(e.target.value)

    }


    const addProject = () => {
        props.addProjectActionPost(project)
        setProject("")
    }





    return (<>

        < div className="settings" >
            <div className="settings__wrapper">

                <h1 className="settings__title">Настройки</h1>
                <div className="settings__body">

                    <div className="account">
                        <h2 className="account__title">Счет</h2>
                        <ul className="account__list">
                            {props.banks.map(item => {
                                return <li key={item.id}>{item.name_bank}
                                    <span className="deleteStng" >


                                        <img src={archiveIcon} onClick={() => props.modalToggle(item.id)} alt="delete icon" /> </span>  </li>

                            })}


                            <li className="addList"><input placeholder="Добавить" value={props.text} onChange={(e) => props.getInputText(e.target.value)} type="text" />
                                <div onClick={() => props.addBankActionPost(props.text)}><AddCircleIcon /> </div></li>

                        </ul>
                    </div>
                    <div className="category-income">
                        <h2 className="category-income__title">Категория дохода</h2>
                        <ul className="category-income__list">
                            {props.income.map(item => {
                                return <li key={item.id}>{item.name} <span className="deleteStng" onClick={() => props.categoryIncomeToggle(item.id)}><img src={deleteIcone} /></span></li>
                            })}
                            <li className="addList"><input placeholder="Добавить" value={incomeInput} onChange={incomeHandle} type="text" />
                                <div onClick={addIncome}><AddCircleIcon /></div></li>
                        </ul>

                    </div>
                    <div className="category-expenses">
                        <h2 className="category-expenses__title">Категория расхода</h2>
                        <ul className="category-expenses__list">
                            {props.expenses.map(item => {
                                return <li key={item.id}>{item.name} <span className="deleteStng" onClick={() => props.categoryExpensesToggle(item.id)}><img src={deleteIcone} /></span></li>
                            })}
                            <li className="addList"><input value={expensesInput} placeholder="Добавить" onChange={expensesHandle} type="text" />
                                <div onClick={addExpenses}><AddCircleIcon /></div></li>
                        </ul>
                    </div>
                    <div className="contragent">
                        <h2 className="contragent__title">Контрагенты</h2>
                        <ul className="contragent__list">
                            {props.contragents.map(item => {
                                return <li key={item.id}>{item.name}<span className="deleteStng" onClick={() => props.contractorToggle(item.id)}><img src={deleteIcone} /></span></li>
                            })}
                            <li className="addList"><input placeholder="Добавить" value={contr} onChange={contrHandle} type="text" />
                                <div onClick={addContr}><AddCircleIcon /></div></li>
                        </ul>

                    </div>
                    <div className="projects">
                        <h2 className="projects__title">Проекты</h2>
                        <ul className="projects__list">
                            {props.projects.map(item => {
                                return <li key={item.id}>{item.name}<span className="deleteStng" ><img onClick={() => props.projectToArhive(item.id)} src={archiveIcon} /><img onClick={() => props.projectToggle(item.id)} src={deleteIcone} /></span></li>
                            })}
                            <li className="addList"><input placeholder="Добавить" value={project} onChange={projectHandle} type="text" />
                                <div onClick={addProject}><AddCircleIcon /></div></li>
                        </ul>

                    </div>

                </div>
            </div>
        </div >
    </>
    )
}
export default Settings


