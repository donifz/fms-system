const initialState = {
    bankArchive:[],
    projectsArchive:[],
}




function archiveReducer(state = initialState, action) {
  switch (action.type) {
   
    case 'GETBANKARCHIVE':
      console.log(state)
      return {...state, bankArchive:[...action.payload]}
    case 'UPDATEARHIVE':
      let updArh = state.bankArchive.filter(item=>item.id !== action.payload)
      return {...state, bankArchive:[...updArh]}
    case 'UPDATEARHIVEPROJECT':
      let updArhPro = state.projectsArchive.filter(item=>item.id !== action.payload)
      return {...state, projectsArchive:[...updArhPro]}

    case "GETARHIVEPROJECTS":
      return {...state, projectsArchive:[...action.payload]}

    default:
      return state
  }
}
export default archiveReducer