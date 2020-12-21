import React from 'react'
import "./archive.css"
import UnarchiveIcon from '@material-ui/icons/Unarchive';

const Archive = (props)=> {

const unArhive = (id)=>{
    console.log(id)
    props.unArchiveBank(id)
}
console.log(props.projectsArchive)

    return (
      <>

      < div className="archive" >
          <div className="archive__wrapper">
              
              <h1 className="archive__title">Архив</h1>
              <div className="archive__body">

                  <div className="bank-archive">
                      <h2 className="account__title">Счета</h2>
                      <ul className="account__list">
                          {props.bankArchive.map(item => {
                              return <li  key={item.id}>{item.name_bank} 
                                <UnarchiveIcon  className="unArchive"  color="primary" onClick={()=>unArhive(item)}/></li>
                              
                          })}


                          

                      </ul>
                  </div>

                  <div className="bank-archive">
                      <h2 className="account__title">Проекты</h2>
                      <ul className="account__list">
                          {props.projectsArchive.map(item => {
                              return <li key={item.id}>{item.name} 
                                <UnarchiveIcon onClick={()=>props.unArchiveProject(item.id)} color="primary"/></li>
                              
                          })}


                          

                      </ul>
                  </div>
                  
                  
                  
                  

              </div>
          </div>
      </div >
      </>
    )
}

export default Archive
