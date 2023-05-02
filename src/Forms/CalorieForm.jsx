import React, { useEffect, useState } from 'react'
import Button from '../Components/Button'

const CalorieForm = () => {

    const [form1Data, setForm1Data] = useState({ age: '', gender: 'm', height: '', weight: '', activity: '' })
    const [form2Data, setForm2Data] = useState({ weightGoal: '', timeFrame: '' })
    const [form1Result, setForm1Result] = useState(0)
    const [form2Result, setForm2Result] = useState(0)


    const { age, gender, height, weight, activity } = form1Data
    const { weightGoal, timeFrame } = form2Data


    useEffect(() => {
        console.log(form1Result, form2Result)
    }, [form1Result, form2Result])


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

        if (age === '' || height === '' || weight === '' || gender === '' || activity === '') {
            alert('Please ensure all fields are entered')
        } else {
            let result1 = Math.floor(((weight * 10) + (height * 6.25) - (age * 5) + (gender === 'm' ? 5 : - 161)) * activity)
            setForm1Result(result1)
        }
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
        if (weightGoal === '' || timeFrame === '' || form1Result === '') {
            alert('Please ensure all fields are entered and the first form is completed')
        } else {
            let result2 = Math.round(((weightGoal - weight) * 7700) / (timeFrame * 30)) + form1Result
            setForm2Result(result2)
        }
    }
    

    return (
        <>
            <form className='calorie-form1'>
                <label>Age</label>
                <input
                    type="number"
                    name="age"
                    min="15"
                    max="80"
                    value={age}
                    onChange={handleForm1Change}
                />
                <label>15 - 80</label><br />

                <label>Gender</label><br />
                <input
                    type="radio"
                    name="gender"
                    value='m'
                    onChange={handleForm1Change}
                    checked
                />
                <label>Male</label><br />

                <input
                    type="radio"
                    name="gender"
                    value='f'
                    onChange={handleForm1Change}
                />
                <label>Female</label><br />

                <label>Height</label>
                <input
                    type="text"
                    name="height"
                    value={height}
                    onChange={handleForm1Change}
                />
                <label>cm</label><br />

                <label>Weight</label>
                <input
                    type="text"
                    name="weight"
                    value={weight}
                    onChange={handleForm1Change}
                />
                <label>kg</label><br />

                <label>Activity</label>
                <select name="activity" onChange={handleForm1Change} value={activity}>
                    <option>Pick your activity level</option>
                    <option value="1">BMR (Basal Metabolic Rate) No activity</option>
                    <option value="1.2">Sedentary: little to no activity</option>
                    <option value="1.375">Lightly Active: exercise 1/3 x per week</option>
                    <option value="1.465">Moderate Activity: exercise 4/5 x per week</option>
                    <option value="1.55">Active: daily exercise or intense 3/4 x per week</option>
                    <option value="1.725">Very Active: intense exercise 6/7 x per week</option>
                    <option value="1.9">Extremely Active: intense exercise daily or physical job</option>
                </select>
            </form><br />

            <Button title={'Calculate'} onClick={handleForm1Submit} />

            <div className="results-container hidden">
                <p className="finalNumberStyling"></p>
            </div>

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

                    <Button title={'Calculate'} onClick={handleForm2Submit} /><br />
                </form>

                <div className="results-container2 hidden">
                    <p></p>
                </div>

            </div>
        </>
    )
}

export default CalorieForm