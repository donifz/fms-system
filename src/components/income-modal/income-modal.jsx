import React from 'react';
import "./income-modal.css"


const IncomeModal = (props) => {
    let [formData, setFormData] = React.useState()
   



    const handleInput = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })

    }
    console.log(formData)

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addIncomeTransPost(formData)
        props.modalIncome()
    }
    let date = new Date
    let newDate = (`${date.getFullYear()}-${date.getMonth()+1}-${(date.getUTCDate()).toString().length==1?"0"+date.getDate():date.getDate()}`).toString()
    console.log(newDate)
    

    return (
        <div className="income">
            <div className="income__wrapper">
                <div className="income__header">
                    <h2 className="income__title">Добавить доход   </h2>
                    <span onClick={props.modalIncome}>	&#10006;</span>
                </div>
                <div className="income__body">
                    <form onSubmit={handleSubmit}>
                        <input  type="date" name="date" defaultValue= {newDate} onChange={handleInput} />
                        <input required type="number" placeholder="Сумма" name="sum" onChange={handleInput} />
                        <select required name="category_income" onChange={handleInput}>
                            <option selected disabled value={null}>Выберите категорию</option>
                            {props.income && props.income.map(item => {
                                return <option key={item.id} value={item.id}>{item.name}</option>
                            })}

                        </select>


                        <select required name="bank_account" onChange={handleInput}>
                            <option selected disabled value={null}>Выберите счет</option>
                            {props.banks && props.banks.map(item => {
                                return <option key={item.id} value={item.id}>{item.name_bank}</option>
                            })}

                        </select>
                        <select  onChange={handleInput} name="contractor">
                            <option selected disabled value={null}>Контрагент</option>
                            {props.contragents && props.contragents.map(item => {
                                return <option key={item.id} value={item.id}>{item.name}</option>
                            })}
                        </select>
                        <select  onChange={handleInput} name="specific_project">
                            <option selected disabled value={null}>Проекты</option>
                            {props.projects && props.projects.map(item => {
                                return <option key={item.id} value={item.id}>{item.name}</option>
                            })}
                        </select>
                        <input  type="text" placeholder="Комментарий" onChange={handleInput} name="description" />

                        <input type="submit" value="Сохранить" className="btn income__submit" />
                    </form>
                </div>
            </div>


        </div>
    )
}
export default IncomeModal


