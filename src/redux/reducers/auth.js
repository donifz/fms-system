import { history } from "../../helpers/_history";
let token = window.localStorage.getItem('token')
const initialState = {
    email:"",
    password:"",
    token:{},
    entry:!!token,
    

  }
  
  
  
  
  function auth(state = initialState, action) {
    switch (action.type) {
      case 'ENTERTOAPP':
      return {...state, entry: true}

      case 'LOGOUT':
        window.localStorage.removeItem("token")
        return {...state, entry: false}
        

      default:
        return state
    }
  }
  export default auth