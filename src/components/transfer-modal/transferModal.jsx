import React from 'react';
import "./transferModal.css"


const TransferModal = (props) => {
    let [formTrnsData, setformTrnspData] = React.useState()
    const handleTrnsInput = (e) => {
        setformTrnspData({ ...formTrnsData, [e.target.name]: e.target.value })
    }

    const handleTrnsSubmit = (e) => {
        e.preventDefault()
        props.addTransferPost(formTrnsData)
        props.modalTransfer()
    }
    let date = new Date
    let newDate = (`${date.getFullYear()}-${date.getMonth()+1}-${(date.getUTCDate()).toString().length==1?"0"+date.getDate():date.getDate()}`).toString()



    return (
        <div className="transfer">
            <div className="income__wrapper">
                <div className="income__header">
                    <h2 className="income__title">Перевод</h2>
                    <span onClick={props.modalTransfer}>	&#10006;</span>
                </div>
                <div className="income__body">
                    <form onSubmit={handleTrnsSubmit} >
                        <input autoComplete required type="date" name="date" defaultValue={newDate}  onChange={handleTrnsInput} />
                        <input required type="number" placeholder="Сумма" name="sum" onChange={handleTrnsInput} />

                        <select required name="bank_account" onChange={handleTrnsInput}>
                            <option selected disabled value={null}>Со счета</option>
                            {props.banks && props.banks.map(item => {
                                return <option key={item.id} value={item.id}>{item.name_bank}</option>
                            })}

                        </select>
                        <select required name="send_to" onChange={handleTrnsInput}>
                            <option selected disabled value={null}>На счет</option>
                            {props.banks && props.banks.map(item => {
                                return <option key={item.id} value={item.id}>{item.name_bank}</option>
                            })}

                        </select>
                        <select   name="contractor">
                            <option selected disabled value={null}>Контрагент</option>
                            {props.contragents && props.contragents.map(item => {
                                return <option key={item.id} value={item.id}>{item.name}</option>
                            })}
                        </select>


                            
                        <input type="text" placeholder="Комментарий" onChange={handleTrnsInput} name="description" />

                        <input type="submit" value="Сохранить" className="btn income__submit" />
                    </form>
                </div>
            </div>


        </div>
    )
}
export default TransferModal


