import {CALCULATE_BMI, SAVE_BMI} from './bmiActionTypes'

export const calculateBmi = (height, weight) => {
    return {
        type: CALCULATE_BMI,
        payload: [height, weight]
    }
}

export const saveBmi = (bmi) => {
    return {
        type: SAVE_BMI,
        payload: Number(bmi)
    }
}