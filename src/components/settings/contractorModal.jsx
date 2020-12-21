import React from 'react'

const contractorModal=(props)=> {

    const yesModal =()=>{
        props.deleteContractorActionPost(props.id)
        props.contractorToggle()
    }
    
    return (
        <>
        
           <div className="sureModal">
                    
                        
                        <div className="sureModal__body">
                             <p>Категория будет удалена во всех операциях. Вы уверены, что хотите ее удалить?
                            </p>
                            <div className="sureButtnons">
                            <button className="btn btn-yes" onClick={yesModal}>Да</button>
                            <button className="btn btn-no" onClick={()=>props.contractorToggle()}>Нет</button>
                            </div>
                        </div>
                        
                       
                            
                    
                </div> 
        </>
    )
}

export default contractorModal
  