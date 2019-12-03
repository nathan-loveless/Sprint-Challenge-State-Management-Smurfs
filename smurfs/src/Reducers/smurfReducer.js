import { ADD_SMURF } from '../Actions';

export const initialState = {
    smurfs: []
}

export const smurfReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_SMURF:
            return state;
            default:
                return state;
    }
}