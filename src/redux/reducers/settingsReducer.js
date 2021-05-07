import incomeModalContainer from "../../components/income-modal/income-modal-container"

const initialState = {
    contragents: [],
    banks: [],
    income: [],
    expenses: [],
    projects: [],
    jurnal: [],
    total: [],
    incomeDiagram:[],
    isFetching: true,
    text: "",
    incomeText: "",
    category: {},
    paginationPages: [],
    curentPage:0,
    exportUrl:""

}




function settingsReducer(state = initialState, action) {
    switch (action.type) {

        case 'GETCONTRAGENTS':

            return { ...state, contragents: action.payload }
        case 'GETINCOMECATEGORY':

            return { ...state, income: action.payload }

        case 'GETPROJECTS':

            return { ...state, projects: action.payload }

        case 'GETEXPENSESCATEGORY':

            return { ...state, expenses: action.payload }
        case 'GETBANKS':
            return { ...state, banks: action.payload }

        case 'GETTOTAL':
            return { ...state, total: action.payload }


        case 'GETINCOMEDIAGRAM':
            return{...state,incomeDiagram:action.payload}

        

        case 'GETJURNAL':
            return { ...state, jurnal: [...action.payload] }

        case 'ISFETCHING':
            return { ...state, isFetching: action.payload }
        case 'GETTEXT':

            return { ...state, text: action.payload }
        case 'ADDINCOMECATEGORY':

            return { ...state, income: [...state.income, { "id": action.payload.id, "name": action.payload.name }], text: '' }

        case 'DELETEINCOMECATEGORY':
            let newBanks = state.income.filter(item => item.id !== action.payload)
            return { ...state, income: [...newBanks] }


        case 'ADDBANK':
            let bankState = {
                ...state
            }
            bankState.banks = [...state.banks, { "id": action.payload.id, "name_bank": action.payload.name_bank, "balance": action.payload.balance }]
            bankState.text = ""

            return { ...state, banks: [...state.banks, { "id": action.payload.id, "name_bank": action.payload.name_bank, "balance": action.payload.balance }], text: '' }
        case 'DELETEBANK':
            let newArr = state.banks.filter(item => item.id !== action.payload)
            return { ...state, banks: [...newArr] }
        case 'ADDEXPENSES':

            return { ...state, expenses: [...state.expenses, { "id": action.payload.id, "name": action.payload.name, }], text: ' ' }
        case 'DELETEEXPENSES':
            let newExpenses = state.expenses.filter(item => item.id !== action.payload)
            return { ...state, expenses: [...newExpenses] }
        case 'ADDCONTRACTOR':

            return { ...state, contragents: [...state.contragents, { "id": action.payload.id, "name": action.payload.name, "email": action.payload.email }], text: '' }
        case 'DELETECONTRACTOR':
            let newCont = state.contragents.filter(item => item.id !== action.payload)
            return { ...state, contragents: [...newCont] }

        case 'ADDPROJECTS':

            return { ...state, projects: [...state.projects, { "id": action.payload.id, "name": action.payload.name, }], text: '' }
        case 'DELETEPROJECTS':
            let newProjects = state.projects.filter(item => item.id !== action.payload)
            return { ...state, projects: [...newProjects] }


        case 'UPDATEBALANCE':
            let updBnk = state.banks.filter(item => action.payload.bank_account == item.id)
            let updNew = state.banks.filter(item => action.payload.bank_account != item.id)
            let update = updBnk.map(item => {

                return {
                    id: Number(action.payload.bank_account),
                    name_bank: item.name_bank,
                    balance: item.balance += Number(action.payload.sum)
                }
            })


            return { ...state, banks: [...updNew, ...update] }

        case 'UPDATEEXPENSEBALANCE':
            let updBnkExp = state.banks.filter(item => action.payload.bank_account == item.id)
            let updNewExp = state.banks.filter(item => action.payload.bank_account != item.id)
            let updateExp = updBnkExp.map(item => {

                return {
                    id: Number(action.payload.bank_account),
                    name_bank: item.name_bank,
                    balance: item.balance -= Number(action.payload.sum)
                }
            })


            return { ...state, banks: [...updNewExp, ...updateExp] }
        case 'UPDATEJURNAL':
            
            let srortedJurnal = state.jurnal.sort(function (a, b) {
                a = new Date(a.date);
                b = new Date(b.date);
                
                return a > b ? -1 : a < b ? 1 : 0;
            });
            
            return { ...state, jurnal: [action.payload, ...srortedJurnal] }
        
        case 'UPDATEPAGE':
                
                return { ...state, jurnal: [ ...action.payload] }

        case 'DELETETRANSACTION':
            let deletedId = state.jurnal.filter(item=> item.id !==action.payload)
        return {...state, jurnal:[...deletedId]}


        case 'PAGINATION':
            let pagesNum = []
            
            let pages = !action.payload.count?0 : Math.ceil(action.payload.count/12)
            for(let i=1;i<pages+1; i++) pagesNum.push(i)

            return {...state, paginationPages:pagesNum}
        
        case 'CURENTPAGE':
        
        return {...state, curentPage:action.payload}
        
            case 'UPDATETRANSFERBALANCE':


            let newBal1 = state.banks.filter(item => action.payload.bank_account.id !== item.id)
            let newBal2 = newBal1.filter(item => action.payload.send_to.id !== item.id)


            let bankFrom = state.banks.filter(item => action.payload.bank_account.id === item.id).map(item => {
                return {
                    "id": item.id,
                    "balance": item.balance -= action.payload.sum,
                    "name_bank": item.name_bank
                }
            })
            let bankto = newBal1.filter(item => action.payload.send_to.id === item.id).map(item => {
                return {
                    "id": item.id,
                    "balance": item.balance += action.payload.sum,
                    "name_bank": item.name_bank
                }
            })

            return { ...state, banks: [...newBal2, ...bankFrom, ...bankto] }

        

        case 'SELECTTYPE':


            return { ...state, category: {...action.payload} }
        

        
    




        default:
            return state
    }
}
export default settingsReducer