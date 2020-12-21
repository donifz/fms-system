import React from 'react'

 const TableExpenses = (props) => {

    const incomText = () => {
        return <span className="incomText">Доход</span>
      }
      const expensesText = () => {
        return <span className="expensesText">Расход</span>
      }
      const transferText = () => {
        return <span className="transferText">Перевод</span>
      }
    
      const dateFormat = (itemDate) => {
        let date = new Date(itemDate)
        let newDate = date.getUTCDate() + "." + (+date.getUTCMonth() + 1) + "." + date.getFullYear()
    
        return newDate
      }

    return (
        
        <div className="main-table">
        
        <table>
          <thead>
            <tr>
              <th>Дата</th>
              <th>Тип</th>
              <th>Сумма</th>
              <th>Счет</th>
              <th>Контрагент</th>
              <th>Категория</th>
              <th>Проект</th>
              <th>Доп.Инфо</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr><td>20.10.2020</td>
              <td>pr</td>
              <td>450</td>
              <td>Касса</td>
              <td>Санира</td>
              <td>За еду</td>
              <td>fms</td>
              <td>2165</td></tr> */}

            {props.expensesJurnal.map(item => {
              return (
                
                    <tr key={item.id}><td>{dateFormat(item.date)}</td>
                    <td>{expensesText()}</td>
                    <td>{item.sum}</td>
                    <td>{item.bank_account && item.bank_account.name_bank}</td>
                    <td>{item.contractor && item.contractor.name}</td>
                    <td>{item.category_expenses && item.category_expenses.name }</td>
                    <td>{item.specific_project && item.specific_project.name}</td>
                    <td>{item.description}</td></tr>

              )
            })}
            {/* <tr><td>sdfsf</td><td>sdadadadadfsf</td><td>sdfsf</td></tr> */}



          </tbody>
        </table>
      </div>
      
    )
}
export default TableExpenses