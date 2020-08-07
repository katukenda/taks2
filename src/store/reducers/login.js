import *  as actionTypes from '../actions/actionTypes';


const initialState = {
    

    logname:'',
    logpassword:''
}

const reducer = (state = initialState, action) => {
    
    switch(action.type) {
    
                case actionTypes.SUBMIT_LOGNAME:
            return{
                    ...state,
                    logname:[action.loginData]
                };
                case actionTypes.SUBMIT_LOGPASSWORD:
            return{
                    ...state,
                    logpassword:[action.loginData]
                };
        default:
            return state;
    }
};

export default reducer;