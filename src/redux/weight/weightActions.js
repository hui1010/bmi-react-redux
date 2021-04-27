import { SAVE_WEIGHT } from './weightActionTypes'

export const saveWeight = (weight) => {
    return {
        type: SAVE_WEIGHT,
        payload: Number(weight)
    }
}
