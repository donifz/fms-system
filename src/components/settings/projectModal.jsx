import React from 'react'

const projectModal=(props)=> {

    const yesModal =()=>{
        props.deletedProjectActionPost(props.id)
        props.projectToggle()
    }
    
    return (
        <>
        
           <div className="sureModal">
                    
                        
                        <div className="sureModal__body">
                             <p>Категория будет удалена во всех операциях. Вы уверены, что хотите ее удалить?
                            </p>
                            <div className="sureButtnons">
                            <button className="btn btn-yes" onClick={yesModal}>Да</button>
                            <button className="btn btn-no" onClick={()=>props.projectToggle()}>Нет</button>
                            </div>
                        </div>
                        
                       
                            
                    
                </div> 
        </>
    )
}

export default projectModal
  