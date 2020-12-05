import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import diaryService




class DiaryForm extends Component {
    constructor() {
        super();
        this.state= {
            method: '',
            positiveEffects: [],
            negativeEffects: [],
            flavour: [],
            rating: 5,
            onsetTime: '',
            strain: '',
            comments: '',
        }
    }

    addEntry = e => {
        e.preventDefault();
    }

    render(){
        return (
            <section>
                <h2>Consumption Entry</h2>
                <hr />
                <form onSubmit={this.addEntry}>
                <label>
                    <span>STRAIN</span>
                    <input name='strain'/>
                </label>
                <label>
                    <span>METHOD</span>
                    <select name='method'>
                    <option value="Dried Flower">Dried Flower</option>
                    <option value="Pill">Pill/Capsule</option>
                    <option value="Oil">Oil</option>
                    <option value="Beverage">Beverage</option>
                    <option value="Edible">Edible</option>
                    </select>
                </label>
                <label>
                    <span>Positive Effects</span>
                    <select name='positiveEffects' multiple>
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
                    </select>
                </label>
                <label>
                    <span>Negative Effects</span>
                    <select name='negativeEffects' multiple>
                    <option value="Red Eyes">Red Eyes</option>
                    <option value="Dry Mouth">Dry Mouth</option>
                    <option value="Headache">Headache</option>
                    <option value="Sleeplessness">Sleeplessness</option>
                    <option value="Anxious">Anxious</option>
                    </select>
                </label>
                <label>
                    <span>FLAVOUR/AROMA</span>
                    <select name='flavour' multiple>
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
                    </select>
                </label>
                <label>
                    <span>RATING</span>
                    <select name='rating'>
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
                    <input name='onsetTime' placeholder='How long until you felt effects (in minutes)'/>
                </label>
                <label>
                    <span>COMMENTS</span>
                    <textarea name='comments' placeholder='How you feeling champ?'/>
                </label>
                <button onClick={this.addEntry}>ADD ENTRY</button>&nbsp;&nbsp;
                <Link to='/'>Cancel</Link>
                </form>
            </section>
        )
    }
}

export default DiaryForm;