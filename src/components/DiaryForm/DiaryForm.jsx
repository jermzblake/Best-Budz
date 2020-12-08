import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import diaryService from '../../utils/diaryService';
import { positiveEffects } from '../../utils/formHelpers';
import Checkbox from '../Checkbox/Checkbox';




class DiaryForm extends Component {
    constructor() {
        super();
        this.state= {
            method: '',
            positiveEffects: '',
            negativeEffects: '',
            flavour: [],
            rating: 5,
            onsetTime: '',
            strain: '',
            comments: '',
            date: Date(),
        }
    }

    handleChange = (e) => {
        this.props.updateMessage('');
        this.setState({
          // Using ES2015 Computed Property Names
          [e.target.name]: e.target.value
        });
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
        [name]: value
        });
  }

    addEntry = async(e) => {
        e.preventDefault();
        await diaryService.createEntry(this.state).then(diary=> this.props.updateDiary(diary));
        this.props.history.push('/');
    }

    render(){
        console.log({positiveEffects})
        return (
            <section>
                <h2>Consumption Entry</h2>
                <hr />
                <form onSubmit={this.addEntry}>
                    {/* <Checkbox 
                        choices={positiveEffects}
                        label="Positive Effects"
                        labelFor="positiveEffects"
                        checked={false}
                        handleInputChange={this.handleInputChange}
                        /> */}
                    <label>
                        <span>DATE</span>
                        <input type='datetime-local' name='date' value={this.state.date} onChange={this.handleChange} />
                    </label>
                    <label>
                        <span>STRAIN</span>
                        <input name='strain' value={this.state.strain} onChange={this.handleChange} />
                    </label>
                    <label>
                        <span>METHOD</span>
                        <select name='method' onChange={this.handleChange}>
                        <option value="">Pick One Below</option>
                        <option value="Dried Flower">Dried Flower</option>
                        <option value="Pill">Pill/Capsule</option>
                        <option value="Oil">Oil</option>
                        <option value="Beverage">Beverage</option>
                        <option value="Edible">Edible</option>
                        </select>
                    </label>
                    <label>
                        <span>POSITIVE EFFECTS</span>
                        <select name='positiveEffects' onChange={this.handleChange} >
                        <option value="">Pick One Below</option>
                        <option value="Euphoria">Euphoria</option>
                        <option value="Body High">Body High</option>
                        <option value="Calm">Calm</option>
                        <option value="Uplifting">Uplifting</option>
                        <option value="Sociable">Sociable</option>
                        <option value="Energetic">Energetic</option>
                        <option value="Giggly">Giggly</option>
                        <option value="Creative">Creative</option>
                        <option value="Relaxed">Relaxed</option>
                        <option value="Sleepy">Sleepy</option>
                        <option value="Clear Headed">Clear Headed</option>
                        <option value="Invigorating">Invigorating</option>
                        <option value="None">None</option>
                        </select>
                    </label>
                    <label>
                        <span>NEGATIVE EFFECTS</span>
                        <select name='negativeEffects' onChange={this.handleChange} placeholder="---">
                        <option value="">Pick One Below</option>
                        <option value="Red Eyes">Red Eyes</option>
                        <option value="Dry Mouth">Dry Mouth</option>
                        <option value="Headache">Headache</option>
                        <option value="Sleeplessness">Sleeplessness</option>
                        <option value="Anxious">Anxious</option>
                        <option value="None">None</option>
                        </select>
                    </label>
                    <label>
                        <span>FLAVOUR/AROMA</span>
                        <select name='flavour' onChange={this.handleChange}>
                        <option value="">Pick One Below</option>
                        <option value="Fruity">Fruity</option>
                        <option value="Earthy">Earthy</option>
                        <option value="Woody">Woody</option>
                        <option value="Spicy">Spicy</option>
                        <option value="Citrus">Citrus</option>
                        <option value="Diesel">Diesel</option>
                        <option value="Skunk">Skunk</option>
                        <option value="Tonic">Tonic</option>
                        <option value="Woody">Woody</option>
                        <option value="Cheese">Cheese</option>
                        <option value="Floral">Floral</option>
                        <option value="Sweet">Sweet</option>
                        <option value="None">None</option>
                        </select>
                    </label>
                    <label>
                        <span>RATING</span>
                        <select name='rating' onChange={this.handleChange}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        </select>
                    </label>
                    <label>
                        <span>Onset Time</span>
                        <input name='onsetTime'  value={this.state.onsetTime} placeholder='How long until you felt effects (in minutes)' onChange={this.handleChange} />
                    </label>
                    <label>
                        <span>COMMENTS</span>
                        <textarea name='comments' value={this.state.comments} placeholder='How you feeling champ?' onChange={this.handleChange}/>
                    </label>
                    <button onClick={this.addEntry}>ADD ENTRY</button>&nbsp;&nbsp;
                    <Link to='/'>Cancel</Link>
                </form>
            </section>
        )
    }
}

export default DiaryForm;