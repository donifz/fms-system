const initialState = {

    isFetching: true,

    income: {
        date: '',
        sum: 0,
        bank_account: "",
        category_income: 0,
        contractor: 0,
        specific_project: 2,
        description: ""

    }

}


function transactions(state = initialState, action) {
    switch (action.type) {
        case 'DATEINCOME':
            return { ...state, income: { date: action.payload } }
        case 'SUMINCOME':
            return { ...state, income: { sum: action.payload } }
        case 'BANKINCOME':
            return { ...state, income: { bank_account: action.payload } }
        case 'CATEGORYINCOME':
            return { ...state, income: { category_income: action.payload } }
        case 'CONTRACTORINCOME':
            return { ...state, income: { contractor: action.payload } }
        case 'PROJECTINCOME':
            return { ...state, income: { specific_project: action.payload } }
        case 'DESCRIPTION':
            return { ...state, income: { description: action.payload } }
        default:
            return state
    }
}
export default transactions