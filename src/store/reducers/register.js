import *  as actionTypes from '../actions/actionTypes';


const initialState = {
    username: '',
    email:'',
    password: '',
    repassword: '',
    
}

const reducer = (state = initialState, action) => {
    // console.log(action.userData);
    switch(action.type) {
        case actionTypes.SUBMIT_NAME:
            return{
                ...state,
                username:[action.userData],
            };
            case actionTypes.SUBMIT_EMAIL:
                return{
                    ...state,
                    email:[action.userData],
                };
        case actionTypes.SUBMIT_PASSWORD:
            return{
                    ...state,
                    password:[action.userData]
                };
                case actionTypes.SUBMIT_REPASSWORD:
            return{
                    ...state,
                    repassword:[action.userData]
                };
              
        default:
            return state;
    }
};

export default reducer;