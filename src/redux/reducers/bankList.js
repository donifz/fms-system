const initialState = {
  banks: [],

  isFetching: true
}




function bankList(state = initialState, action) {
  switch (action.type) {
    case 'GETBANKS':



      return { ...state, banks: action.payload }
    case 'GETCONTRAGENTS':

      return { ...state, contragents: action.payload }
    case 'ISFETCHING':
      return { ...state, isFetching: action.payload }
    default:
      return state
  }
}
export default bankList