import {SAVE_HEIGHT, GET_HEIGHT} from './heightActionTypes'

const initialState = {
    height: 0
}

const heightReducer = (state = initialState, action) => {
    switch(action.type) {
        case SAVE_HEIGHT: return {
            ...state,
            height: action.payload
        }
        case GET_HEIGHT: return state
        default: return state
    }
}

export default heightReducer