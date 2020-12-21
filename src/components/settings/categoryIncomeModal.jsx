import React from 'react'

const categoryIncomeModal=(props)=> {
    // let [conf,setConf] = React.useState()
    const yesModal =()=>{
        props.deleteIncomeActionPost(props.id)
        props.categoryIncomeToggle()
    }
    
    return (
        <>
        
           <div className="sureModal">
                    
                        
                        <div className="sureModal__body">
                             <p>Категория будет удалена во всех операциях. Вы уверены, что хотите ее удалить? 
                            </p>
                            <div className="sureButtnons">
                            <button className="btn btn-yes" onClick={yesModal}>Да</button>
                            <button className="btn btn-no" onClick={()=>props.categoryIncomeToggle()}>Нет</button>
                            </div>
                        </div>
                        
                       
                            
                    
                </div> 
        </>
    )
}

export default categoryIncomeModal
  