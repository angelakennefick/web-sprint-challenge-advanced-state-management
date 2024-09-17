import axios from 'axios';

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const ADD_SMURF = "ADD_SMURF";
export const ERROR_MESSAGE = "ERROR_MESSAGE";


export function fetchSmurfs() {
    return (dispatch => {
        dispatch({type: FETCH_START});
        axios
          .get('http://localhost:3333/smurfs')
          .then(resp => {
            dispatch({type: FETCH_SUCCESS, payload:resp.data});
          })
          .catch(err=>{
            dispatch({type: FETCH_FAIL, payload:err});
          })
    });
}

export function fetchStart() {
    return({
        type: FETCH_START
    });
}

export function fetchSuccess(smurfs) {
    return({
        type: FETCH_SUCCESS, 
        payload: smurfs
    });
}

export function fetchFail(error) {
    return({
        type: FETCH_FAIL, 
        payload: error
    });
}

export function addNewSmurf(newSmurf) {
    return({
      type: ADD_SMURF,
      payload: newSmurf
    });
}

export function errorMessage(error) {
    return({
      type: ERROR_MESSAGE,
      payload: error
    });
}

//Task List:
//1.x Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2.x Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)

//3. x Add a standard action that allows us to set the value of the error message slice of state.