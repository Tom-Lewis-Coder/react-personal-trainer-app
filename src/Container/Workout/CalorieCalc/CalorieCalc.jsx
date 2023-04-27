import React, { useState } from 'react'
import CalorieForm from '../../../Forms/CalorieForm'
import Header from '../../../Components/Header'

const CalorieCalc = () => {

    const [form1Data, setForm1Data] = useState({ age: '', gender: '', height: '', weight: '', activity: '' })
    const [form2Data, setForm2Data] = useState({ weightGoal: '', timeFrame: '' })

    const { age, gender, height, weight, activity } = form1Data
    const { weightGoal, timeFrame } = form2Data

    const handleForm1Change = e => {
        const { name, value } = e.target

        setForm1Data({ ...form1Data, [name]: value })
    }

    const handleForm1Submit = () => {

        const data1 = {
            age: age,
            gender: gender,
            height: height,
            weight: weight,
            activity: activity,
        }
        console.log(data1)
        setForm1Data({ age: '', gender: '', height: '', weight: '', activity: '' })
    }

    const handleForm2Change = e => {
        const { name, value } = e.target

        setForm2Data({ ...form2Data, [name]: value })
    }

    const handleForm2Submit = e => {
        e.preventDefault()
        const data2 = {
            weightGoal: weightGoal,
            timeFrame: timeFrame,
        }
        console.log(data2)
        setForm2Data({ weightGoal: '', timeFrame: '' })
    }

    return (
        <div>
            <div className='container' >
                <Header title={'Calorie Calculator'} />
                <CalorieForm
                    handleForm1Change={handleForm1Change}
                    handleForm1Submit={handleForm1Submit}
                    handleForm2Change={handleForm2Change}
                    handleForm2Submit={handleForm2Submit}
                    form1Data={form1Data}
                    form2Data={form2Data}
                />
            </div>
        </div>
    )
}

export default CalorieCalc