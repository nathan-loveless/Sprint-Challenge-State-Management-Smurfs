import axios from "axios";
export const ADD_SMURF = "ADD_SMURF";

export const addSmurf = dispatch => {
  axios
    .get("localhost:333/smurfs/GET")
    .then(res => {
        console.log(res.data);
      dispatch({ type: ADD_SMURF, payload: res.data.results });
    })
    .catch(err => { console.log(err);
    });
}