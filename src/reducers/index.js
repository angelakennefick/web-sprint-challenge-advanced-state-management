import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL, ADD_SMURF, ERROR_MESSAGE} from './../actions/index';

export const initialState = {
    smurfs: [{
        name: "",
        position: "",
        nickname: "",
        description: "",
        id: ""
    }],
    isLoading: true,
    errorMessage: "",
}

export const reducer = (state = initialState, action )=>{
    switch(action.type) {
    case(FETCH_START):
        return({
            ...state,
            isLoading: true
        });
    case(FETCH_SUCCESS):
      return({
        ...state,
        smurfs: action.payload,
        isLoading: false
      });
    case(FETCH_FAIL):
      return({
        ...state,
        error: action.payload,
        isLoading: false
      });
    case ADD_SMURF:
        const newSmurf = {
          ...action.payload,
          id: Math.random()
        };
        return ({
            ...state,
            smurfs: [...state.smurfs, newSmurf]
        });
    case ERROR_MESSAGE:
        return ({
        ...state,
        errorMessage: action.payload,
        });
        
        default: 
            return state;
    }
}

export default reducer;

