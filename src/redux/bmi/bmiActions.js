import { SAVE_BMI } from './bmiActionTypes'

export const saveBmi = (bmi) => {
    return {
        type: SAVE_BMI,
        payload: Number(bmi)
    }
}