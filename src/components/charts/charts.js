import React from 'react';
import "./charts.css"
import { Pie } from '@ant-design/charts';





const Charts = (props) => {
    
    
    let [period, setPeriod]=React.useState({})

 

   
      var total = {
        appendPadding: 10,
        data: props.typeChart,
        angleField: 'value',
        colorField: 'type',
        radius: 0.8,
        label: {
            type: 'spider',
            labelHeight: 50,
            content: '{name}\n{percentage}\n {value} Сом',
            style:{
                fontWeight:700
            }
          },
          interactions: [{ type: 'element-selected' }, { type: 'element-active' }],
      };

      var income = {
        appendPadding: 10,
        data: props.categoryIncomeChart&& props.categoryIncomeChart,
        angleField: 'value',
        colorField: 'type',
        radius: 0.8,
        label: {
          type: 'spider',
          labelHeight: 60,
          content: '{name}\n{percentage}\n {value} Сом',
          
              style:{
                  fontWeight:700
              }
          
        },
        interactions: [{ type: 'element-selected' }, { type: 'element-active' }],
      };
      var expenses = {
        appendPadding: 10,
        data: props.categoryExpensesChart&& props.categoryExpensesChart,
        angleField: 'value',
        colorField: 'type',
        radius: 0.8,
        label: {
          type: 'spider',
          labelHeight: 50,
          content: '{name}\n{percentage}\n {value} Сом',
          style:{
            fontWeight:700
        }
        },
        interactions: [{ type: 'element-selected' }, { type: 'element-active' }],
      };

      var projects = {
        appendPadding: 10,
        data: props.projectsChart&& props.projectsChart,
        angleField: 'value',
        colorField: 'type',
        radius: 0.8,
        label: {
          type: 'spider',
          labelHeight: 50,
          content: '{name}\n{percentage}\n {value} Сом',
          style:{
            fontWeight:700
        }

        },
        interactions: [{ type: 'element-selected' }, { type: 'element-active' }],
        
      };
     const dateHandle=(e)=>{
        setPeriod({...period,[e.target.name]:e.target.value})
        props.chartPeriod({...period,[e.target.name]:e.target.value})
     }


    return (
        <div className="charts__wrapper">
            <h1>Диаграммы</h1>
            <div className="chart-filter__wrapper">
            <h2>Дата </h2>
            <div className="date-input"><form onChange={dateHandle}><label><h3>От:</h3> <input type="date" name="start_date"/></label><label><h3>До:</h3> <input type="date" name="end_date"/></label></form></div>
        
            </div>
            
            
            <div className="diagram__body">
            
                <div className="bank__diagram">
                    <div className="type_charts">
                    <h2>Доход и Расход</h2>
    </div>
                    
                    <Pie {...total} />

                    
                
                </div>
                <div className="bank__diagram">
                    <div className="type_charts">
                    <h2>Категории дохода</h2>
    </div>
                    <Pie {...income} />

                    
                
                </div>
                <div className="bank__diagram">
                    <div className="type_charts">
                    <h2>Категории расхода</h2>
    </div>
                    <Pie {...expenses} />

                    
                
                </div>
                <div className="bank__diagram">
                    <div className="type_charts">
                    <h2>Проекты</h2>
    </div>
                    <Pie {...projects} />

                    
                
                </div>

            </div>
            






        </div >
    )
}
export default Charts


