import React from 'react';
import "./expenses-modal.css"


const ExpensesModal = (props) => {
    let [formExpData, setformExpData] = React.useState()
    const handleExpInput = (e) => {
        setformExpData({ ...formExpData, [e.target.name]: e.target.value })
    }

    const handleExpSubmit = (e) => {
        e.preventDefault()
        props.addExpensesTransPost(formExpData)
        props.modalExpenses()
    }
    console.log(props.expenses)
    let date = new Date
    let newDate = (`${date.getFullYear()}-${date.getMonth()+1}-${(date.getUTCDate()).toString().length==1?"0"+date.getDate():date.getDate()}`).toString()

    return (
        <div className="expenses">
            <div className="income__wrapper">
                <div className="income__header">
                    <h2 className="income__title">Добавить расход</h2>
                    <span onClick={props.modalExpenses}>	&#10006;</span>
                </div>
                <div className="income__body">
                    <form onSubmit={handleExpSubmit} >
                        <input required type="date" name="date" defaultValue={newDate} onChange={handleExpInput} />
                        <input required type="number" placeholder="Сумма" name="sum" onChange={handleExpInput} />
                        <select required name="category_expenses" onChange={handleExpInput}>
                            <option selected disabled value={null}>Выберите категорию</option>
                            {props.expenses && props.expenses.map(item => {
                                return <option key={item.id} value={item.id}>{item.name}</option>
                            })}

                        </select>
                        <select required name="bank_account" onChange={handleExpInput}>
                            <option selected disabled value={null}>Выберите счет</option>
                            {props.banks && props.banks.map(item => {
                                return <option key={item.id} value={item.id}>{item.name_bank}</option>
                            })}

                        </select>
                        <select  onChange={handleExpInput} name="contractor">
                            <option selected disabled value={null}>Контрагент</option>
                            {props.contragents && props.contragents.map(item => {
                                return <option key={item.id} value={item.id}>{item.name}</option>
                            })}
                        </select>
                        <select  onChange={handleExpInput} name="specific_project">
                            <option selected disabled value={null}>Проекты</option>
                            {props.projects && props.projects.map(item => {
                                return <option key={item.id} value={item.id}>{item.name}</option>
                            })}
                        </select>
                        <input type="text" placeholder="Комментарий" onChange={handleExpInput} name="description" />

                        <input type="submit" value="Сохранить" className="btn income__submit" />
                    </form>
                </div>
            </div>


        </div>
    )
}
export default ExpensesModal


