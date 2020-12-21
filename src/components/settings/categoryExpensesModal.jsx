import React from 'react'

const categoryExpensesModal=(props)=> {
    // let [conf,setConf] = React.useState()
    const yesModal =()=>{
        props.deleteExpensesActionPost(props.id)
        props.categoryExpensesToggle()
    }
    
    return (
        <>
        
           <div className="sureModal">
                    
                        
                        <div className="sureModal__body">
                             <p>Категория будет удалена во всех операциях. Вы уверены, что хотите ее удалить? 
                            </p>
                            <div className="sureButtnons">
                            <button className="btn btn-yes" onClick={yesModal}>Да</button>
                            <button className="btn btn-no" onClick={()=>props.categoryExpensesToggle()}>Нет</button>
                            </div>
                        </div>
                        
                       
                            
                    
                </div> 
        </>
    )
}

export default categoryExpensesModal
  