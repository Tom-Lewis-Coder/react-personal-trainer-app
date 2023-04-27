import React from 'react'
import CalorieForm from '../../../Components/CalorieForm'
import Header from '../../../Components/Header'

const CalorieCalc = () => {
    return (
        <div>
            <div className='container' >
                <Header title={'Calorie Calculator'} />
                <CalorieForm />
            </div>
        </div>
    )
}

export default CalorieCalc