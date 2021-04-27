import { SAVE_HEIGHT } from './heightActionTypes'

export const saveHeight = (height) => {
    return {
        type: SAVE_HEIGHT,
        payload: Number(height)
    }
}
