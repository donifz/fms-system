import React from 'react'

 const TableTransfer = (props) => {

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

            {props.transferJurnal.map(item => {
              return (
                

                  
                   <tr key={item.id}><td>{dateFormat(item.date)}</td>
                   <td>{item.account_from ? transferText() : " "}</td>
                   <td>{item.amount}</td>
                   <td>{item.account_from && item.account_from.name_bank}</td>
                   <td>На счет</td>
                   <td>{item.account_to && item.account_to.name_bank}</td>
                   <td>Переведен</td>
                   <td>Успешно</td></tr>

              )
            })}
            {/* <tr><td>sdfsf</td><td>sdadadadadfsf</td><td>sdfsf</td></tr> */}



          </tbody>
        </table>
      </div>
      
    )
}
export default TableTransfer