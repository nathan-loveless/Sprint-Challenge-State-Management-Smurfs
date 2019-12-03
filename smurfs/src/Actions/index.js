import axios from "axios";
export const SMURF_FETCH_SUCCESS = "SMURF_FETCH_SUCCESS";
export const SMURF_FETCH_START = 'SMURF_FETCH_START';
export const SMURF_FETCH_FAILURE = "SMURF_ERROR";

export const fetchSmurfs = () => dispatch => {
  dispatch({type: SMURF_FETCH_START })
  
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      dispatch({ type: SMURF_FETCH_SUCCESS, payload: res.data });
    })
    .catch(err => { dispatch({ type: SMURF_FETCH_FAILURE, payload: err});
    });
  }

export const addSmurf = (smurf) => dispatch => {
  dispatch({type: SMURF_FETCH_START })
  axios
    .post("http://localhost:3333/smurfs", {name: smurf.name, age: smurf.age, height: smurf.height})
    .then(res => {
      dispatch({ type: SMURF_FETCH_SUCCESS, payload: res.data });
    })
    .catch(err => { dispatch({ type: SMURF_FETCH_FAILURE, payload: err});
    });
  }