import { SAVE_WEIGHT } from './weightActionTypes'

const initialState = {
    weight: 0
}

const weightReducer = (state = initialState, action) => {
    switch(action.type) {
        case SAVE_WEIGHT: return {
            ...state,
            weight: action.payload
        }
        default: return state
    }
}

export default weightReducer