const initialState = {
    email:"",
    password:"",
    token:{},
    entry:!window.localStorage.getItem('token'),
    

  }
  
  
  
  
  function auth(state = initialState, action) {
    switch (action.type) {
      case 'ENTERTOAPP':
        
      let toke = action.payload===JSON.parse( window.localStorage.getItem('token'))
      console.log(toke)
      console.log(JSON.parse( window.localStorage.getItem('token')))
      return {...state, entry: false}

      case 'LOGOUT':
        window.localStorage.removeItem("token")
        return {...state, entry: !window.localStorage.getItem('token')}
        

      default:
        return state
    }
  }
  export default auth