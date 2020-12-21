const initialState = {
    chartJurnal:[],
    type: [],
    contragents:[],
    categoryIncomeChart:[],
    categoryExpensesChart:[],
    incomeUniq:[],
    expensesUniq:[],
    projectsChart:[],
    uniqProject:[]
  }
  
  
  
  
  function chartReducer(state = initialState, action) {
    switch (action.type) {
  
  
      case 'GETCHARTJURNAL':
  
        
  
        return { ...state, chartJurnal: [...action.payload]}


      case 'TYPECHARTS':
         
        let typesIncome = action.payload.reduce((start, cure,i, arr)=>{
            let value = arr.reduce((prev,item)=>{
              
              if(item.type==="Income"){
                return prev +item.sum
              }
              return prev
              
            },0)
              return{
                type:"Доход",
                value
              }
          },{})
          let typesExpense = action.payload.reduce((start, cure,i, arr)=>{
            let value = arr.reduce((prev,item)=>{
              
              if(item.type==="Expenses"){
                return prev +item.sum
              }
              return prev
              
            },0)
              return{
                type:"Расход",
                value
              }
           
          },{})
          let type = [typesIncome,typesExpense]
        return { ...state, type: [...type] }
        case 'INCOMECATEGORYUNIQ':
        return { ...state, incomeUniq: [...action.payload] }



      case 'INCOMECATEGORYCHART':
        let categoryIncome = action.payload.reduce((start, cure,i, arr)=>{
            let newObj = state.incomeUniq.map(item=>{
              
              let categ =  arr.reduce((st,en)=>{
                if(item.name===en.category_income.name){
                 return st +en.sum
                }
                return st
                },0)
                return{
                  type:item.name,
                  value:categ
                }
              
              
            
            })
        
            return [...newObj]
          },[])
        return { ...state, categoryIncomeChart: [...categoryIncome] }


        case 'EXPENSESCATEGORYUNIQ':
            return { ...state, expensesUniq: [...action.payload] }

        case 'EXPENSESCATEGORYCHART':
            let categoryExpenses= action.payload.reduce((start, cure,i, arr)=>{
                let newObj = state.expensesUniq.map(item=>{
                  
                  let categ =  arr.reduce((st,en)=>{
                    if(item.name===en.category_expenses.name){
                     return st +en.sum
                    }
                    return st
                    },0)
                    return{
                      type:item.name,
                      value:categ
                    }
                  
                  
                
                })
            
                return [...newObj]
              },[])
            return { ...state, categoryExpensesChart: [...categoryExpenses] }


            case 'UNIQPROJECT':
                return { ...state, uniqProject: [...action.payload] }

            case 'PROJECTSCHART' :
                let projects = action.payload.reduce((start, cure,i, arr)=>{
                    let newObj = state.uniqProject.map(item=>{
                    
                      let categ =  arr.reduce((st,en)=>{
                        if(item.name===en.specific_project.name){
                         return st +en.sum
                        }
                        return st
                        },0)
                        return{
                          type:item.name,
                          value:categ
                        }
                      
                      
                    
                    })
                
                    return [...newObj]
                  },[]) 
                return { ...state, projectsChart: [...projects] }
        
      default:
        return state
    }
  }
  export default chartReducer