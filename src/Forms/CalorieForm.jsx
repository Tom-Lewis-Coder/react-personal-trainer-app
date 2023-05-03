import React, { useEffect, useState } from 'react'
import Button from '../Components/Button'

const CalorieForm = () => {

    const [form1Data, setForm1Data] = useState({ age: '', height: '', weight: '', activity: '' })
    const [form2Data, setForm2Data] = useState({ weightGoal: '', timeFrame: '' })
    const [form1Result, setForm1Result] = useState(0)
    const [form2Result, setForm2Result] = useState(0)
    const [gender, setGender] = useState('')


    const { age, height, weight, activity } = form1Data
    const { weightGoal, timeFrame } = form2Data


    useEffect(() => {
        console.log(form1Result, form2Result)
    }, [form1Result, form2Result])


    const handleForm1Change = e => {
        const { name, value } = e.target
        setForm1Data({ ...form1Data, [name]: value })
    }

    const getGender = e => {
        setGender(e.target.value)
    }

    const handleForm1Submit = e => {
        e.preventDefault()
        console.log(gender)
        if (age === '' || gender === '' || height === '' || weight === '' || activity === '') {
            alert('Please ensure all fields are entered')
        } else {
            let result1 = Math.floor(((weight * 10) + (height * 6.25) - (age * 5) + (gender === 'male' ? 5 : - 161)) * activity)
            setForm1Result(result1)
        }
    }

    const handleForm2Change = e => {
        const { name, value } = e.target
        setForm2Data({ ...form2Data, [name]: value })
    }

    const handleForm2Submit = e => {
        e.preventDefault()
        if (weightGoal === '' || timeFrame === '' || form1Result === '') {
            alert('Please ensure all fields are entered and the first form is completed')
        } else {
            let result2 = Math.round(((weightGoal - weight) * 7700) / (timeFrame * 30)) + form1Result
            setForm2Result(result2)
        }
    }

    return (
        <>
            <form className='app__calorie-form1'>
                <div className='app__calCalc'>
                    <label>Age </label>
                    <input
                        className="app__age-input"
                        type="number"
                        name="age"
                        min="15"
                        max="80"
                        value={age}
                        onChange={handleForm1Change}
                    /><br />
                    <input
                        id='male'
                        type="radio"
                        name="radio"
                        value='male'
                        onChange={getGender}
                    /><label className='app__gender-input' htmlFor='male'> Male</label>
                    <input
                        id='female'
                        type="radio"
                        name="radio"
                        value='female'
                        onChange={getGender}
                    /><label className='app__gender-input' htmlFor='female'> Female</label>
                    <label>Height </label>
                    <input
                        className='app__height-input'
                        placeholder='CM'
                        type="text"
                        name="height"
                        value={height}
                        onChange={handleForm1Change}
                    /><br />
                    <label>Weight </label>
                    <input
                        className='app__weight-input'
                        placeholder='KG'
                        type="text"
                        name="weight"
                        value={weight}
                        onChange={handleForm1Change}
                    /><br />
                    <label>Activity</label>
                    <select name="activity" onChange={handleForm1Change} value={activity} className='app__activity-input'>
                        <option>Choose activity level</option>
                        <option value="1">BMR (Basal Metabolic Rate) No activity</option>
                        <option value="1.2">Sedentary: little to no activity</option>
                        <option value="1.375">Light: exercise 1/3 x per week</option>
                        <option value="1.465">Moderate: exercise 4/5 x per week</option>
                        <option value="1.55">Active: daily exercise or intense 3/4 x per week</option>
                        <option value="1.725">Very: intense exercise 6/7 x per week</option>
                        <option value="1.9">Extremely: intense exercise/job daily</option>
                    </select>
                    <div className="results-container hidden">
                        <p className="finalNumberStyling"></p>
                    </div>
                </div>
                <Button title={'Calculate'} onClick={handleForm1Submit} className={'btn-default'} />
            </form><br />


            <div>
                <form className='calorie-form2'>
                    <label>Weight Goal</label>
                    <input
                        type="text"
                        name="weightGoal"
                        value={weightGoal}
                        onChange={handleForm2Change}
                    />
                    <label>kg</label><br />

                    <label>Time Frame</label>
                    <input
                        type="number"
                        name="timeFrame"
                        min="2"
                        value={timeFrame}
                        onChange={handleForm2Change}
                    />
                    <label>Months</label><br />

                    <Button title={'Calculate'} onClick={handleForm2Submit} className={'btn-default'} /><br />
                </form>

                <div className="results-container2 hidden">
                    <p></p>
                </div>

            </div>
        </>
    )
}

export default CalorieForm