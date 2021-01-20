export const initialState = {
    media: [],
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    user: null,
  }; 
  // Selector
  const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_MEDIA':
            return {
                        ...state,
                 media :[...state.media, action.media]
            };
        case 'DEL_MEDIA':
          return {
            ...state,
             media: state.media.filter((media) => media._id !== action.id)
            };    
        case 'UPDATE_MEDIA': 
           return {
             ...state,
             media: state.media.map((media) => (media._id === action.payload._id ? action.payload : media))}; 

        case 'USER_LOADED':
        return {
            ...state,
            isAuthenticated: true,
            user: action.payload
        };     
        case 'LOGIN_SUCCESS':
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                // isLoading: false
            };    
       
          case 'LOGIN_FAIL':
          case 'LOGOUT_SUCCESS':
              localStorage.removeItem('token');
              return {
                  ...state,
                  token: null,
                  user: null,
                  isAuthenticated: false,
              };
    
      default:
        return state;
    }
  };
  
  export default reducer;