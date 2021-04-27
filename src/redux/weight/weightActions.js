import {SAVE_WEIGHT, GET_WEIGHT} from './weightActionTypes'

export const saveWeight = (weight) => {
    return {
        type: SAVE_WEIGHT,
        payload: Number(weight)
    }
}

export const getWeight = () => {
    return {
        type: GET_WEIGHT
    }
}