import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import diaryService from '../../utils/diaryService';
// Form variables/state
import { method, positiveInitialState,negativeInitialState, flavourInitialState } from '../../utils/formHelpers';
// Form components
import Checkbox from '../Checkbox/Checkbox';
import Select from '../Select/Select';




class DiaryForm extends Component {
    constructor() {
        super();
        this.state= {
            ...positiveInitialState(),
            ...negativeInitialState(),
            ...flavourInitialState(),
            method: 'Dried Flower',
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

    // handleInputChange = (event) => {
    //     console.log(event.target)
    //     const target = event.target;
    //     const value = target.type === 'checkbox' ? target.checked : target.value;
    //     const name = target.name;

    //     this.setState({
    //     [name]: value
    //     });
    // }

    handlePositiveChange = (event) => {
        const target = event.target;
        // const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        const newEffectArray = this.state.positiveEffects.map((effect) => {
            if(Object.keys(effect)[0] === name){
                if(effect[name] === false){
                effect[name] = true
                }else{effect[name] = false}
            }
            return effect
        })

        this.setState({
        positiveEffects: newEffectArray,
        });
    }

    handleNegativeChange = (event) => {
        const target = event.target;
        // const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        const newEffectArray = this.state.negativeEffects.map((effect) => {
            if(Object.keys(effect)[0] === name){
                if(effect[name] === false){
                effect[name] = true
                }else{effect[name] = false}
            }
            return effect
        })

        this.setState({
        negativeEffects: newEffectArray,
        });
    }

    handleFlavourChange = (event) => {
        const target = event.target;
        // const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        const newFlavourArray = this.state.flavours.map((effect) => {
            if(Object.keys(effect)[0] === name){
                if(effect[name] === false){
                effect[name] = true
                }else{effect[name] = false}
            }
            return effect
        })

        this.setState({
        flavours: newFlavourArray,
        });
    }

    addEntry = async(e) => {
        e.preventDefault();
        await diaryService.createEntry(this.state).then(diary=> this.props.updateDiary(diary));
        this.props.history.push('/');
    }

    render(){
        return (
            <section>
                <h2>Consumption Entry</h2>
                <hr />
                <form onSubmit={this.addEntry}>

                    <label>
                        <span>DATE</span>
                        <input type='datetime-local' name='date' value={this.state.date} onChange={this.handleChange} />
                    </label>
                    <label>
                        <span>STRAIN</span>
                        <input name='strain' value={this.state.strain} onChange={this.handleInputChange} />
                    </label>
                    {/* <span>METHOD</span> */}
                    <Select
                        options={method}
                        label="METHOD"
                        labelFor="method"
                        value={null}
                        handleChange={this.handleChange}
                    />
                    <span>POSITIVE EFFECTS</span>
                    <Checkbox 
                        choices={this.state.positiveEffects}
                        label="Positive Effects"
                        labelFor="positiveEffects"
                        // checked={false}
                        handleInputChange={this.handlePositiveChange}
                    />
                    <span>NEGATIVE EFFECTS</span>                        
                    <Checkbox 
                        choices={this.state.negativeEffects}
                        label="Negative Effects"
                        labelFor="negativeEffects"
                        // checked={false}
                        handleInputChange={this.handleNegativeChange}
                    />
                    <span>FLAVOURS</span>
                    <Checkbox 
                        choices={this.state.flavours}
                        label="Flavour"
                        labelFor="flavour"
                        // checked={false}
                        handleInputChange={this.handleFlavourChange}
                    />
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