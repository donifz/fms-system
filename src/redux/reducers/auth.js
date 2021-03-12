let token = window.localStorage.getItem('token')
const initialState = {
    email:"",
    password:"",
    token:{},
    entry:!token,
    

  }
  
  
  
  
  function auth(state = initialState, action) {
    switch (action.type) {
      case 'ENTERTOAPP':
        
      
      return {...state, entry: false}

      case 'LOGOUT':
        window.localStorage.removeItem("token")
        return {...state, entry: token}
        

      default:
        return state
    }
  }
  export default auth