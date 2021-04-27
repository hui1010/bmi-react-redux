import {SAVE_WEIGHT, GET_WEIGHT} from './weightActionTypes'

const initialState = {
    weight: 0
}

const weightReducer = (state = initialState, action) => {
    switch(action.type) {
        case SAVE_WEIGHT: return {
            ...state,
            weight: action.payload
        }
        case GET_WEIGHT: return state
        default: return state
    }
}

export default weightReducer