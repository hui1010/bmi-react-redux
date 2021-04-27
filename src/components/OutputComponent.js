import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {MdClose} from 'react-icons/md'
import {FaHandPointDown} from 'react-icons/fa'

import {saveBmi, hideResult} from '../redux'

function OutputComponent() {

    const dispatch = useDispatch()

    const height = useSelector( state => state.height.height)/100
    const weight = useSelector( state => state.weight.weight)

    const bmi = (weight/(height * height)).toFixed(1)

    const range = bmi < 18.5 ? 'underweight' : 
        bmi < 23.9 ? 'normal' :
        bmi < 27.9 ? 'overweight' : 'obese'

    const bmiPosition = ((bmi-15) * 15).toFixed(1) - 5 

    const minWeight = (18.5 * height * height).toFixed(0) 
    const maxWeight = (23.9 * height * height).toFixed(0)
    
    const minPosition = (minWeight - 40) * 3
    const maxPosition = (maxWeight - 40) * 3

    useEffect(() => {dispatch(saveBmi(bmi))}, [bmi])

    const handleClick = () =>{
        dispatch(hideResult())
    }

    return (
        <div className="output" > 
            <button className="close" onClick={handleClick}>
                <MdClose fontSize={20}/>
            </button>
            <div className="result result-bmi">
                <label>Your BMI is <strong>{bmi}</strong>. </label> 
                <label>This is considered <strong>{range}</strong></label>
                <div className="result-bmi-arrow"> 
                    <FaHandPointDown className="from-left" style={{position: 'absolute', left: bmi<= 15 ? -4 : bmi <= 35 ? bmiPosition : 295}}/>       
                </div>
                <div className="result-bmi-bar">
                    <span style={{top: 2, left: 10, fontSize: 10, color: '#fff'}}>low</span>
                    <span style={{left: 52.5, color: 'black'}}>|</span>
                    <span style={{top: 2, left: 70, fontSize: 10, color: '#fff'}}>Normal</span>
                    <span style={{left: 133.5, color: 'black'}}>|</span>
                    <span style={{top: 2, left: 152, fontSize: 10, color: '#fff'}}>high</span>
                    <span style={{left: 193.5, color: 'black'}}>|</span>
                    <span style={{top: 2, right: 30, fontSize: 10, color: '#fff'}}>too high</span>
                </div> 
                <div className="axis">
                    <span style={{left: 42.5}}>18.5</span>
                    <span style={{left: 123.5}}>23.9</span>
                    <span style={{left: 183.5}}>27.9</span>    
                </div> 
            </div>
          
            <div className= "result result-weight">
                <label>Your ideal weight (kg) according to BMI</label>
                <div className="result-weight-arrow">
                    <FaHandPointDown className="from-left" style={{position: 'absolute', left: minPosition -4 < 0 ? -4 : minPosition - 4}}/>
                    <FaHandPointDown className="from-left" style={{position: 'absolute', left: maxPosition -4 > 300 ? 300 : maxPosition - 5 < 0 ? 0 : maxPosition -4}}/>
                </div>
                <div className="result-weight-bar">
                    <span style={{position: 'absolute', left: minPosition < 0 ? 0 : minPosition}}>|</span>
                    <span style={{position: 'absolute', left: maxPosition > 300 ? 300 : maxPosition - 5 < 0 ? 0 : maxPosition}}>|</span>
                </div>
                <div className="axis">               
                    <span style={{left: minPosition - 5 < 0 ? 0 : minPosition - 5}}>{minWeight}</span>
                    <span style={{left: maxPosition - 5 > 300 ? 300 : maxPosition - 5 < 0 ? 0 : maxPosition - 5}}>{maxWeight}</span>
                </div>
            </div>
        </div>
    )
}

export default OutputComponent
