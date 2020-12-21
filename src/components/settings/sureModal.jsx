import React from 'react'

const sureModal=(props)=> {
    // let [conf,setConf] = React.useState()
    const yesModal =()=>{
        props.archiveBankThunk(props.id)
        props.modalToggle()
    }
    let balance = props.banks.find(item=>item.id===props.id)
    console.log(balance)
    return (
        <>
        
           <div className="sureModal">
                    
                        {balance.balance>0?<div className="sureModal__body">
                             <p>Для сохранения целостности ваших данных, удалить счет можно будет только с нулевым балансом!
                            </p>
                            <div className="sureButtnons">
                            <button className="btn btn-yes balance-btn" onClick={()=>props.modalToggle()}>Ок</button>
                           
                            </div>
                        </div>:<div className="sureModal__body">
                             <p>Счет будет удален во всех операциях. Вы уверены, что хотите удалить?
                            </p>
                            <div className="sureButtnons">
                            <button className="btn btn-yes" onClick={yesModal}>Да</button>
                            <button className="btn btn-no" onClick={()=>props.modalToggle()}>Нет</button>
                            </div>
                        </div>}
                        
                       
                            
                    
                </div> 
        </>
    )
}

export default sureModal
  