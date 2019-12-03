import { SMURF_FETCH_START, SMURF_FETCH_SUCCESS, SMURF_FETCH_FAILURE, ADD_SMURF } from '../Actions';

export const initialState = {
  smurfs: [],
  error: '',
  isFetching: false
}

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case SMURF_FETCH_START:
      return { ...state, error: '', isFetching: true };
    case SMURF_FETCH_SUCCESS:
      return { ...state, smurfs: action.payload, error: '', isFetching: false }
    case SMURF_FETCH_FAILURE:
      return { ...state, error: action.payload, isFetching: false }
    default:
      return state;
  }
}