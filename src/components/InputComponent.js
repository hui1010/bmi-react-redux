import React, {useState} from 'react'
import { useDispatch } from 'react-redux'

import {showResult, saveHeight, saveWeight} from '../redux'

function InputComponent() {

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [err, setErr] = useState('')

    const dispatch = useDispatch()

    const handleCalculateClick = (e) => {
        e.preventDefault()
        if(!height || !weight) {
            setErr('All fields are needed.')
            return
        }
        if(height <= 0 || weight <= 0) {
            setErr('Height and weight need to be larger than 0.')
            return
        }
        dispatch(saveHeight(height)); 
        dispatch(saveWeight(weight));
        dispatch(showResult())
        setErr('')
    }

    const handleClearClick = (e) => {
        e.preventDefault()
        setHeight('')
        setWeight('')
        dispatch(saveHeight(0)); 
        dispatch(saveWeight(0));
        setErr('')
    }
    return (
        <div className="input">
            <form className="input-form">
                <label>Height (cm) </label>
                <input type="number" value = {height} onChange = { e => setHeight(e.target.value)} required/>
                <label>Weight (kg)</label>
                <input type="number" value = {weight} onChange = { e => setWeight(e.target.value)} required/>
                <p className="error">{err}</p>
                <button className="calculate" onClick={(e)=>handleCalculateClick(e)}>Calculate</button>
                <button className="clear" onClick={(e)=>handleClearClick(e)}>Clear</button>
            </form>
        </div>
    )
}

export default InputComponent
