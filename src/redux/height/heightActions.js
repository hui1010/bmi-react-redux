import {SAVE_HEIGHT, GET_HEIGHT} from './heightActionTypes'

export const saveHeight = (height) => {
    return {
        type: SAVE_HEIGHT,
        payload: Number(height)
    }
}

export const getHeight = () => {
    return {
        type: GET_HEIGHT
    }
}