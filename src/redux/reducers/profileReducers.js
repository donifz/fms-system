const initialState = {
    users: [],
    me:{}
    
    
  }
  
  
  
  
  function profileReducers(state = initialState, action) {
    switch (action.type) {
      case 'GETUSERS':
        return { ...state, users: [...action.payload] }
        case 'UPDATEUSERS':
          
          return {...state, users: [...state.users, {...action.payload}]}
     
     case 'GETME':
          
          return {...state, me: {...action.payload}}

    case 'DELETEUSER':
        
            let deleted = state.users.filter(item=>item.id!==action.payload)
                
                return { ...state, users: [...deleted] }
      default:
        return state
    }
  }
  export default profileReducers