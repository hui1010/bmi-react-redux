import {CALCULATE_BMI, SAVE_BMI} from './bmiActionTypes'

const initialState = {
    bmi: 0
}

const calculate = (arr) => {
    return arr[0] + arr[1]
}

const bmiReducer = (state = initialState, action) => {
    switch(action.type) {
        case CALCULATE_BMI: return {
            ...state,
            bmi: calculate(action.payload)
        }
        case SAVE_BMI: return {
            ...state,
            bmi: action.payload
        }
        default: return state
    }
}
export default bmiReducer