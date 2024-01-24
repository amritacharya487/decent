// authActions.js

export const login = (userData) => {
    return {
      type: 'LOGIN',
      payload: userData,
    };
  };
  
  export const logout = () => {
    return {
      type: 'LOGOUT',
    };
  };
// authReducer.js

const initialState = {
    isAuthenticated: false,
    user: null,
    // other user-related state properties
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload,
          // set other user-related state properties as needed
        };
      case 'LOGOUT':
        return {
          ...state,
          isAuthenticated: false,
          user: null,
          // clear other user-related state properties if needed
        };
      default:
        return state;
    }
  };
 
  export default authReducer;
// rootReducer.js




    