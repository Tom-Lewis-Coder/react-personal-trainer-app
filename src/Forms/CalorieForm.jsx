import React from 'react'
import Button from '../Components/Button'

const CalorieForm = ( props ) => {
    return (
        <>
            <form className='calorie-form1'>
                <label>Age</label>
                <input
                    type="number"
                    name="age"
                    min="15"
                    max="80"
                    value={props.age}
                    onChange={props.handleForm1Change}
                />
                <label>15 - 80</label><br />

                <label>Gender</label><br />
                <input
                    type="radio"
                    name="gender"
                    value='m'
                    onChange={props.handleForm1Change}
                />
                <label>Male</label><br />

                <input
                    type="radio"
                    name="gender"
                    value='f'
                    onChange={props.handleForm1Change}
                />
                <label>Female</label><br />

                <label>Height</label>
                <input
                    type="text"
                    name="height"
                    value={props.height}
                    onChange={props.handleForm1Change}
                />
                <label>cm</label><br />

                <label>Weight</label>
                <input
                    type="text"
                    name="weight"
                    value={props.weight}
                    onChange={props.handleForm1Change}
                />
                <label>kg</label><br />

                <label>Activity</label>
                <select name="activity" onChange={props.handleForm1Change} value={props.activity}>
                    <option value="1">BMR (Basal Metabolic Rate)</option>
                    <option value="1.2">Sedentary: little to no activity</option>
                    <option value="1.375">Lightly Active: exercise 1/3 x per week</option>
                    <option value="1.465">Moderate Activity: exercise 4/5 x per week</option>
                    <option value="1.55">Active: daily exercise or intense 3/4 x per week</option>
                    <option value="1.725">Very Active: intense exercise 6/7 x per week</option>
                    <option value="1.9">Extremely Active: intense exercise daily or physical job</option>
                </select>
            </form><br />

            <Button title={'Calculate'} onClick={props.handleForm1Submit} />

            <div className="results-container hidden">
                <p className="finalNumberStyling"></p>
            </div>

            <div>
                <form className='calorie-form2'>
                    <label>Weight Goal</label>
                    <input
                        type="text"
                        name="weightGoal"
                        value={props.weightGoal}
                        onChange={props.handleForm2Change}
                    />
                    <label>kg</label><br />

                    <label>Time Frame</label>
                    <input
                        type="number"
                        name="timeFrame"
                        min="2"
                        value={props.timeFrame}
                        onChange={props.handleForm2Change}
                    />
                    <label>Months</label><br />

                    <Button title={'Calculate'} onClick={props.handleForm2Submit} /><br />
                </form>

                <div className="results-container2 hidden">
                    <p></p>
                </div>

            </div>
        </>
    )
}

export default CalorieForm