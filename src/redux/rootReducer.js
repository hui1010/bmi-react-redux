import {combineReducers} from 'redux'

import bmiReducer from './bmi/bmiReducer'
import resultReducer from './result/resultReducer'
import heightReducer from './height/heightReducer'
import weightReducer from './weight/weightReducer'

const rootReducer = combineReducers({
    bmi: bmiReducer,
    result: resultReducer,
    height: heightReducer,
    weight: weightReducer
})

export default rootReducer