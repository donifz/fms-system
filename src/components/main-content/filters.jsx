import React, { createRef, useRef,useMemo,useCallback } from 'react';
import "./filter.css"
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
    root: {
    //   width: '100%',
    
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    
  }));




const Filter = (props) => {


    

    let [filterData, setFilterData] = React.useState("")
    let [data, setData] = React.useState({})
    

    

    const submitHandle=(e) =>{
        
        setFilterData({...filterData, [e.target.name]:e.target.value}) 
        
        props.filterTypeThunk({...filterData, [e.target.name]:e.target.value})
    }
    


   

    
    
  



     




    function onChange(date, dateString) {
        console.log(date, dateString);
      }

      const classes = useStyles();




    return (
        <div className="content__wrapper">

            
            <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
            <h3 className="filter-title">Фильтры</h3>
        </AccordionSummary>
        <AccordionDetails>
        <div className="main-filter">
          <form onChange={submitHandle} >
                    

    
    
 
                    <input type="date"  name="dateStart" />
                    <input type="date" name="dateEnd"  />
                    <select name="category" >
                        <option selected disabled value="">Тип</option>
                        <option  value="">Все</option>
                        <option value="Income">Доход</option>
                        <option value="Expenses">Расход</option>
                        <option value="BankTransaction">Перевод</option>


                    </select>
                    <select  name="bank_account" >
                        <option selected disabled value={null}>Счет</option>
                        <option  value="">Все</option>
                        {props.banks && props.banks.map(item => {
                            return <option key={item.id} value={item.id}>{item.name_bank}</option>
                        })}

                    </select>
                    <select   name="contractor">
                        <option selected disabled value={null}>Контрагент</option>
                        <option  value="">Все</option>
                        {props.contragents && props.contragents.map(item => {
                            return <option key={item.id} value={item.id}>{item.name}</option>
                        })}
                    </select>
                    <div className="buttons">
                    <input style={{background:"#36a2eb"}} className="btn btn__submit" type="submit" value="Сброс"/>
                        <a href={`https://neo-finance.herokuapp.com/api/transaction/?start_date=${filterData.dateStart||''}&end_date=${filterData.dateEnd||''}&type=${filterData.category||''}&contractor=${filterData.contractor ||''}&bank_account=${filterData.bank_account||''}&format=xlsx`}    className="btn excel__btn">Export</a>
                    </div>
                        
                </form>
                </div>
        </AccordionDetails>
        </Accordion>
                
                
            
        </div >

        // < div className="filter" >
        //     <div className="filter__wrapper">

        //         <div className="filter__body">
        //             <form onSubmit={handleFilterSubmit}>
        //                 <input type="datetime-local" name="date-start" onChange={handleInputForFilter} />
        //                 <input type="datetime-local" name="date-end" onChange={handleInputForFilter} />
        //                 <select name="category_income" onChange={handleInputForFilter}>
        //                     <option selected disabled value={null}>Тип</option>
        //                     {props.income && props.income.map(item => {
        //                         return <option key={item.id} value={item.id}>{item.name}</option>
        //                     })}

        //                 </select>
        //                 <select required name="bank_account" onChange={handleInputForFilter}>
        //                     <option selected disabled value={null}>Счет</option>
        //                     {props.banks && props.banks.map(item => {
        //                         return <option key={item.id} value={item.id}>{item.name_bank}</option>
        //                     })}

        //                 </select>
        //                 <select required onChange={handleInputForFilter} name="contractor">
        //                     <option selected disabled value={null}>Контрагент</option>
        //                     {props.contragents && props.contragents.map(item => {
        //                         return <option key={item.id} value={item.id}>{item.name}</option>
        //                     })}
        //                 </select>

        //             </form>

        //         </div>
        //     </div>
        // </div >
    )
}
export default Filter


