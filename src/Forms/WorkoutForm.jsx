import React from 'react'

const WorkoutForm = ( props ) => {
    return (
        <form className='workout-form' >
            <div className='workout-form-title'>{props.title}</div><br/>
                <input 
                    id='low'
                    type='radio'
                    name='radio'
                    value='low' 
                    onChange={props.onChange}
                /><label className='workoutRadio' htmlFor='low' >Low</label>                              
                <input 
                    id='medium'
                    type='radio'
                    name='radio' 
                    value='medium' 
                    onChange={props.onChange} 
                /><label className='workoutRadio' htmlFor='medium' >Med</label>                   
                <input
                    id='high'                       
                    type='radio' 
                    name='radio'
                    value='high' 
                    onChange={props.onChange} 
                /><label className='workoutRadio' htmlFor='high' >High</label> 
            <p>Complete one circuit 3 times or change each time for a variation. Rest 1 min between circuits</p>
        </form>
        )}

export default WorkoutForm