import axios from "axios";


let head = window.localStorage.getItem('token')? {Authorization:`Token ${JSON.parse(localStorage.getItem("token"))}`} :""

console.log(head)

 const  auth = axios.create({
    baseURL: "https://neo-finance.herokuapp.com/auth/",
    headers: head||{}
    
});
const fetchData = axios.create({
    baseURL: "https://neo-finance.herokuapp.com/api/",
    headers:  head||{}
        
    
    
});
export default {
    getAllListBank: () => fetchData.get("bank-account/"),
    getAllContractors: () => fetchData.get("contractor/"),
    getIncomeCategory: () => fetchData.get("category-income/"),
    getExpensesCategory: () => fetchData.get("category-expenses/"),
    getSpecificProject: () => fetchData.get("specific-project/"),
    getIncomesTable: () => fetchData.get("add-income/"),
    getExpensesTable: () => fetchData.get("add-expenses/"),
    getBankTransactions: () => fetchData.get("bank-transaction/"),
    getJurnalTransactions: () => fetchData.get(`transaction/?limit=12`),
    getPages: (page) => fetchData.get(`transaction/?limit=12&offset=${page*12}`),
    getArchiveBankAccount: () => fetchData.get(`/bank-account/archive/`),
    getArchiveProject: () => fetchData.get(`/specific-project/archive/`),

    postJurnalTransactions: (location,body) => fetchData.post(location,body),
    getTotal: () => fetchData.get("total/"),
    getFilter: (dateStart,dateEnd, category,bank_account,contractor) => fetchData.get(`transaction/?start_date=${dateStart||''}&end_date=${dateEnd||''}&type=${category||''}&contractor=${contractor ||''}&bank_account=${bank_account||''}`),
    getExport: (dateStart,dateEnd, category,bank_account,contractor) => fetchData.get(`transaction/?start_date=${dateStart||''}&end_date=${dateEnd||''}&type=${category||''}&contractor=${contractor ||''}&bank_account=${bank_account||''}&format=xlsx`),
    getContragentsFilter: ( contr) => fetchData.get(`transaction/?contractor=${contr}`),
    
    getAccountFilter: ( account) => fetchData.get(`transaction/?bank_account=${account}`),
    postIncomeCategory: (location, body) => fetchData.post(location, body),
    deleteIncomeCategory: (location) => fetchData.delete(location),
    login:(location,body)=>auth.post(location, body),
    transactionDelete:(location)=>fetchData.delete(location),

    restoreFromArchiveBank:(id) =>fetchData.delete(`/bank-account/archive/${id}/restore/`),
    
    restoreFromArchiveProjet:(id) =>fetchData.delete(`/specific-project/archive/${id}/restore/`),
    projectToArhive:(id) =>fetchData.delete(`/specific-project/${id}/archivate/`),
    getUsers:()=>auth.get(`/users/`),
    getMe:()=>auth.get(`/users/me/`),
    addUser:(location,user)=>auth.post(location,user),
    deleteUser:(pass)=>auth.delete(`/users/me/`,pass),
    getPeriodCharts:(dateStart,dateEnd)=>fetchData.get(`transaction/?start_date=${dateStart||''}&end_date=${dateEnd||''}`)
}