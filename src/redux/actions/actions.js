import API from "../../API/API"
export const getBanks = (banks) => {
    return {
        type: "GETBANKS",
        payload: banks

    };
};
export const getProjects = (project) => {
    return {
        type: "GETPROJECTS",
        payload: project

    };
};


export const getContragetns = (contragents) => {
    return {
        type: "GETCONTRAGENTS",
        payload: contragents

    };
};
export const getIncomeCategory = (income) => {
    return {
        type: "GETINCOMECATEGORY",
        payload: income

    };
};

export const getExpensesCategory = (expenses) => {
    return {
        type: "GETEXPENSESCATEGORY",
        payload: expenses

    };
};

export const getJurnal = (jurnal) => {
    return {
        type: "GETJURNAL",
        payload: jurnal

    };
};

export const getTotalAction = (total) => {
    return {
        type: "GETTOTAL",
        payload: total

    };
};
export const getIncomeJurnal = (incomeJurnal) => {
    return {
        type: "GETINCOMEJURNAL",
        payload: incomeJurnal

    };
};
export const getExpensesJurnal = (expensesJurnal) => {
    return {
        type: "GETEXPENSESJURNAL",
        payload: expensesJurnal

    };
};
export const getTransferJurnal = (transferJurnal) => {
    return {
        type: "GETTRANSFERJURNAL",
        payload: transferJurnal

    };
};


export const getIncomeDiagram=(list)=>{
    return{
        type: "GETINCOMEDIAGRAM",
        payload: list
    }
}


export const getArchive=(archive)=>{
    return{
        type: "GETARCHIVE",
        payload: archive
    }
}











export const addIncomeAction = (categoryText) => {
    return {
        type: "ADDINCOMECATEGORY",
        payload: categoryText
    };
};
export const deleteIncomeAction = (id) => {
    return {
        type: "DELETEINCOMECATEGORY",
        payload: id
    };
};

export const addExpensesAction = (categoryText) => {
    return {
        type: "ADDEXPENSES",
        payload: categoryText
    };
};
export const deleteExpensesAction = (id) => {
    return {
        type: "DELETEEXPENSES",
        payload: id
    };
};

export const addBankAction = (bank) => {
    return {
        type: "ADDBANK",
        payload: bank
    };
};
export const deleteBankAction = (bankId) => {
    return {
        type: "DELETEBANK",
        payload: bankId
    };
};



export const addContractor = (contName) => {
    return {
        type: "ADDCONTRACTOR",
        payload: contName
    };
};
export const deleteContractor = (contId) => {
    return {
        type: "DELETECONTRACTOR",
        payload: contId
    };
};



export const addProjects = (project) => {
    return {
        type: "ADDPROJECTS",
        payload: project
    };
};
export const deleteProjects = (projectId) => {
    return {
        type: "DELETEPROJECTS",
        payload: projectId
    };
};


export const isFetchingAction = (status) => {
    return {
        type: "ISFETCHING",
        payload: status

    };
};

export const getInputText = (text) => {
    return {
        type: "GETTEXT",
        payload: text

    };
};



export const getArchiveBankAccount = (data)=>{
    return{
        type:"GETBANKARCHIVE",
        payload:data
    }
}




export const updateBalance = (balance) => {
    // expenses balance update
    return {
        type: "UPDATEBALANCE",
        payload: balance
    };
};

export const updateExpensesBalance = (balance) => {
    return {
        type: "UPDATEEXPENSEBALANCE",
        payload: balance
    };
};

export const updateIncomeJurnal = (list) => {
    return {
        type: "UPDATEINCOMEJURNAL",
        payload: list
    };
};

export const updateJurnal = (list) => {
    return {
        type: "UPDATEJURNAL",
        payload: list
    };
};



export const updateTransferJurnal = (transfer) => {
    return {
        type: "UPDATETRANSFERJURNAL",
        payload: transfer
    };
};



export const updateTransferBalance = (transfer) => {
    return {
        type: "UPDATETRANSFERBALANCE",
        payload: transfer
    }
}

// филтры
export const typeFilter = (category) => {
    return {
        type: "TYPEFILTER",
        payload: category
    }
}

export const selectType = (category) => {
    return {
        type: "SELECTTYPE",
        payload: category
    }
}




// export const filterType = (filType) => {
//     return {
//         type: "SELECTTYPE",
//         payload: filType
//     }
// }

export const pagination = (count) => {
    return {
        type: "PAGINATION",
        payload: count
    }
}
export const updatePage = (page) => {
    return {
        type: "UPDATEPAGE",
        payload: page
    }
}


export const curentPage = (page) => {
    return {
        type: "CURENTPAGE",
        payload: page
    }
}





export const enterToApp = (token) => {
    return {
        type: "ENTERTOAPP",
        payload:token
    }
}







// thunk

// Добавление счета
export const addBankActionPost = (bank) => {

    console.log(bank)
    return dispatch => {
        let bankname = { "name_bank": bank, "balance": 0 }

        API.postIncomeCategory(`bank-account/`, bankname).then(data => {

            dispatch(addBankAction(data.data))
        })
    }

};

// удаление счета
export const deleteBankPost = (id) => {
    console.log(id)
    return dispatch => {
        API.deleteIncomeCategory(`bank-account/${id}/hard-delete/`)
        dispatch(deleteBankAction(id))
    }


};

// Архив счета

export const archiveBankThunk = (id) => {
    console.log(id)
    return dispatch => {
        API.deleteIncomeCategory(`bank-account/${id}/archivate/`)
        dispatch(deleteBankAction(id))
    }


};







// Добавление категорий Дохода
export const addIncomeActionPost = (categoryText) => {
    return dispatch => {
        let income = { "name": categoryText }

        API.postIncomeCategory(`category-income/`, income).then(data => {
            dispatch(addIncomeAction(data.data))
            dispatch(getInputText(""))
        })
    }

};
export const deleteIncomeActionPost = (id) => {
    console.log(id)
    return dispatch => {
        API.deleteIncomeCategory(`category-income/${id}`)
        dispatch(deleteIncomeAction(id))
    }

};

// Добавление категорий Расхода
export const addExpensesActionPost = (categoryText) => {
    return dispatch => {
        let expenses = { "name": categoryText }

        API.postIncomeCategory(`category-expenses/`, expenses).then(data => {
            dispatch(addExpensesAction(data.data))
        })
    }

};
export const deleteExpensesActionPost = (id) => {
    console.log(id)
    return dispatch => {
        API.deleteIncomeCategory(`category-expenses/${id}`)
        dispatch(deleteExpensesAction(id))
    }

};


// Добавление Дохода
export const addIncomeTransPost = ({ date = new Date, sum, bank_account, category_income, contractor="", specific_project="", description = "" }) => {
    return dispatch => {


        let income = {
            "date": date,
            "sum": sum,
            "type":"Income",
            "description": description,
            "bank_account": bank_account,
            "category_income": category_income,
            "category_expenses": null,
            "contractor": contractor,
            "specific_project": specific_project,
            "send_to":null
        }
        console.log(income)
        // dispatch(updateBalance(income))
        API.postJurnalTransactions(`transaction/`, income).then(data => {
            console.log(data.data)
            dispatch(updateBalance(income))
            dispatch(updateJurnal(data.data))

        }

        )
    }

};

// Добавление Расхода
export const addExpensesTransPost = ({ date= new Date, sum, bank_account, category_expenses, contractor="", specific_project="", description = "" }) => {
    return dispatch => {


        let expenses = {
            "date": date,
            "sum": sum,
            "type":"Expenses",
            "description": description,
            "bank_account": bank_account,
            "category_income": null,
            "category_expenses": category_expenses,
            "contractor": contractor,
            "specific_project": specific_project,
            "send_to":null
        }


        // dispatch(updateBalance(income))
        // dispatch(updateExpensesBalance(expenses))
        API.postJurnalTransactions(`transaction/`, expenses).then(data => {

            dispatch(updateExpensesBalance(expenses))
            dispatch(updateJurnal(data.data))
            // dispatch(getJurnal())
        }

        )
    }

};

// Перевод
export const addTransferPost = ({date= new Date, sum, bank_account, contractor="", description = "",send_to}) => {
    
    return dispatch => {


        let transfer = {
            "date": date,
            "sum": sum,
            "type":"BankTransaction",
            "description": description,
            "bank_account": bank_account,
            "category_income": null,
            "category_expenses": null,
            "contractor": contractor,
            "specific_project": null,
            "send_to":send_to
        }
        console.log(transfer)

        // dispatch(updateBalance(income))
        // dispatch(updateExpensesBalance(expenses))
        
        API.postIncomeCategory(`transaction/`, transfer).then(data => {
            
            console.log(data.data)
            dispatch(updateTransferBalance(data.data))
            dispatch(updateJurnal(data.data))
        }

        )
    }

};

export const transactionDelete = (transactionId) => {

    // if(typeof transactionId == "object") return
    
    return dispatch => {
        API.transactionDelete(`transaction/${transactionId}`).then(data => {
            
            console.log(data)
            // dispatch(updateTransferBalance(data.data))
            dispatch(deletebyId(transactionId))
        }

        )
    }

};
export const deletebyId = (transactionId) => {
        return{
            type:"DELETETRANSACTION",
            payload: transactionId
        }
}





// Добавление Проекта
export const addProjectActionPost = (projectName) => {
    return dispatch => {
        let project = { "name": projectName }

        API.postIncomeCategory(`specific-project/`, project).then(data => {
            dispatch(addProjects(data.data))
        })
    }

};
export const deletedProjectActionPost = (id) => {
    console.log(id)
    return dispatch => {
        API.deleteIncomeCategory(`specific-project/${id}/hard-delete/`)
        dispatch(deleteProjects(id))
    }

};

// Добавление Контрагента
export const addContractorActionPost = (contName) => {


    return dispatch => {
        let contractor = { "name": contName, "email": "" }

        API.postIncomeCategory(`contractor/`, contractor).then(data => {
            dispatch(addContractor(data.data))
        })
    }

};
export const deleteContractorActionPost = (id) => {
    console.log(id)
    return dispatch => {
        API.deleteIncomeCategory(`contractor/${id}`)
        dispatch(deleteContractor(id))
    }

};

export const paginationSelectPage = (page) => {
    console.log(page)
    return dispatch => {
        API.getPages(page).then(data => {
            console.log(data.data)
            dispatch(curentPage(page))
            dispatch(updatePage(data.data.results))
            
        })
        
    }

};






export const getBanksThunk = () => {
    return dispatch => {
        dispatch(isFetchingAction(true))
        API.getAllListBank().then(data => {
            dispatch(isFetchingAction(false))
            dispatch(getBanks(data.data))
        })

    }
}

// Фильтры

export const filterTypeThunk = ( {dateStart="",dateEnd="",category="",bank_account="",contractor=""}) => {
    return dispatch => {
        // let newFilter = filter.split("%")

        API.getFilter(dateStart,dateEnd,category,bank_account,contractor).then(data => {
            
            dispatch(updatePage(data.data ))
            dispatch(pagination(data.data))
            
        })

    }
}











export const settingsData = () => {
    return dispatch => {
        dispatch(isFetchingAction(true))
        API.getAllContractors().then(data => {
            dispatch(isFetchingAction(false))

            dispatch(getContragetns(data.data))


        })
        API.getIncomeCategory().then(data => {
            dispatch(isFetchingAction(false))


            dispatch(getIncomeCategory(data.data))


        })
        API.getExpensesCategory().then(data => {
            dispatch(isFetchingAction(false))

            dispatch(getExpensesCategory(data.data))

        })
        API.getExpensesCategory().then(data => {
            dispatch(isFetchingAction(false))

            dispatch(getExpensesCategory(data.data))

        })
        API.getSpecificProject().then(data => {
            dispatch(isFetchingAction(false))

            dispatch(getProjects(data.data))

        })
        API.getJurnalTransactions().then(data => {
            console.log(data)
            dispatch(pagination(data.data))
            dispatch(getJurnal(data.data.results))

        })

        API.getTotal().then(data => {


            dispatch(getTotalAction(data.data))

        })
        API.getMe().then(data=>{
            dispatch(getMe(data.data))
        })

        


        


    }
}

export const archiveData = () => {
    return dispatch => {
        API.getArchiveBankAccount().then(data=>{
            dispatch(getArchiveBankAccount(data.data))
        })
        API.getArchiveProject().then(data=>{
            dispatch(getArchiveProject(data.data))
        })
        API.getMe().then(data=>{
            dispatch(getMe(data.data))
        })
 
    }}

    const getArchiveProject = (projects)=>{
        return{
            type:"GETARHIVEPROJECTS",
            payload: projects
        }
    }


    

    export const projectToArhive = (projectId) => {
        
        return dispatch => {
            API.projectToArhive(projectId)
                
                
                dispatch(deleteProjects(projectId))
                
            
        }}
        export const unArchiveProject = (projectId) => {
            
            return dispatch => {
                API.restoreFromArchiveProjet(projectId)
                    
                    
                    dispatch(updateArchiveProjects(projectId))
                    // dispatch(addBankAction(bank))
                
            }}
            export const updateArchiveProjects = (id) => {
                return{
                    type:"UPDATEARHIVEPROJECT",
                    payload:id
    
                }
            }


    export const unArchiveBank = (bank) => {
        let {id} =bank 
        return dispatch => {
            API.restoreFromArchiveBank(id).then(data=>{
                
                console.log(bank)
                dispatch(updateArchive(id))
                dispatch(addBankAction(bank))
            })
        }}

        export const updateArchive = (id) => {
            return{
                type:"UPDATEARHIVE",
                payload:id

            }
        }



export const login = ({email,password})=>{
    let valid = {
        "username": email,
        "password": password
      }
    return dispatch=>{
        API.login(`token/login/`,valid).then(token=>{
            console.log(token)
            localStorage.setItem('token', JSON.stringify(token.data.auth_token));
            window.location.reload(true) 
            dispatch(enterToApp(token.data.auth_token))
        })
        .catch(console.log("Неправильный пароль"))
    }
}


export const logout = ()=>{
        return{
            type:"LOGOUT"
        }
}


// users

export const profileData = () => {
    return dispatch => {
        API.getUsers().then(data=>{
            dispatch(getUsers(data.data))
        })
        API.getMe().then(data=>{
            dispatch(getMe(data.data))
        })
 
    }}

    export const getUsers = (users)=>{
        return{
            type:"GETUSERS",
            payload:users
        }
}

// getMe Users
export const getMe = (me)=>{
    return{
        type:"GETME",
        payload:me
    }
}


export const addUser = ({username,password,first_name,last_name,email}) => {
    let newUser ={
        "username":username,
        "password":password,
        "first_name":first_name,
        "last_name":last_name,
        "email":email,
        "is_staff": false
    }
    
    return dispatch => {
        console.log(newUser)
       API.addUser(`/users/`,newUser).then(data=>{
           console.log(data.data)
           dispatch(updateUsers(data.data))
       })
 
    }}

    export const updateUsers = (users)=>{
        return{
            type:"UPDATEUSERS",
            payload:users
        }
}

export const deleteUser = (id) => {
    
    
    return dispatch => {
        
       API.deleteUser(id).then(data=>{
           console.log(data.data)
           dispatch(deleteUserId(data.data))
       })
 
    }}

    
    export const deleteUserId = (usersID)=>{
        return{
            type:"DELETEUSER",
            payload:usersID
        }
}

// charts

export const chartsData = () => {
    return dispatch => {
        API.getJurnalTransactions().then(data=>{
            console.log(data.data)
            dispatch(getChartJurnal(data.data.results))
            dispatch(getTypeCharts(data.data.results))
            dispatch(getIcomeCategoryChart(data.data.results))
            dispatch(getExpensesCategoryChart(data.data.results))
            dispatch(getProjectsChart(data.data.results))
        })
        API.getIncomeCategory().then(data=>{
            dispatch(categoryIncomeUniq(data.data))
            
            

        })
        API.getExpensesCategory().then(data=>{
            dispatch(categoryExpensesUniq(data.data))
        })
        API.getSpecificProject().then(data=>{
            dispatch(projectUniq(data.data))
            
        })
        API.getMe().then(data=>{
            dispatch(getMe(data.data))
        })
 
        
 
    }}
    
    
    export const getChartJurnal = (data)=>{
        return{
            type:"GETCHARTJURNAL",
            payload:data
        }
}

export const getTypeCharts = (data)=>{
    return{
        type:"TYPECHARTS",
        payload:data
    }
}

export const getIcomeCategoryChart=(data)=>{
    return{
        type:"INCOMECATEGORYCHART",
        payload:data
    }
}

export const categoryIncomeUniq=(data)=>{
    return{
        type:"INCOMECATEGORYUNIQ",
        payload:data
    }
}

export const getExpensesCategoryChart=(data)=>{
    return{
        type:"EXPENSESCATEGORYCHART",
        payload:data
    }
}

export const categoryExpensesUniq=(data)=>{
    return{
        type:"EXPENSESCATEGORYUNIQ",
        payload:data
    }
}

export const getProjectsChart=(data)=>{
    return{
        type:"PROJECTSCHART",
        payload:data
    }
}

export const projectUniq=(data)=>{
    return{
        type:"UNIQPROJECT",
        payload:data
    }



}

export const chartPeriod = ({start_date,end_date}) => {
    return dispatch => {
        API.getPeriodCharts(start_date,end_date).then(data=>{
            console.log(data.data)
            dispatch(getChartJurnal(data.data))
            dispatch(getTypeCharts(data.data))
            dispatch(getIcomeCategoryChart(data.data))
            dispatch(getExpensesCategoryChart(data.data))
            dispatch(getProjectsChart(data.data))
        })
        // API.getIncomeCategory().then(data=>{
        //     dispatch(categoryIncomeUniq(data.data))
            
            

        // })
        // API.getExpensesCategory().then(data=>{
        //     dispatch(categoryExpensesUniq(data.data))
        // })
        // API.getSpecificProject().then(data=>{
        //     dispatch(projectUniq(data.data))
            
        // })
        
 
    }}


