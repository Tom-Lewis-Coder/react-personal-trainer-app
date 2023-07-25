import React from 'react'
import CalorieForm from '../../../Forms/CalorieForm'
import { Header } from '../../../Components'

import './CalorieCalc.scss'

const CalorieCalc = () => {
    return (
        <div>
            <div className="app__cal-Container">
                <Header
                    title={'Calorie Calculator'}
                    className={'app__headTitle'}
                />
                <CalorieForm />
            </div>
        </div>
    )
}

export default CalorieCalc
