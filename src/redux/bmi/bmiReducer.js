import { SAVE_BMI } from './bmiActionTypes'

const initialState = {
    bmi: 0
}

const bmiReducer = (state = initialState, action) => {
    switch(action.type) {
        case SAVE_BMI: return {
            ...state,
            bmi: action.payload
        }
        default: return state
    }
}
export default bmiReducer