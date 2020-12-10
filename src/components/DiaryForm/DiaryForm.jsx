import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import diaryService from '../../utils/diaryService';
// Form variables/state
import { intervals, rating, method, types, positiveInitialState,negativeInitialState, flavourInitialState } from '../../utils/formHelpers';
// Form components
import Checkbox from '../Checkbox/Checkbox';
import Select from '../Select/Select';


const todayDate = new Date().toISOString().slice(0,10);

class DiaryForm extends Component {
    constructor() {
        super();
        this.state= {
            ...positiveInitialState(),
            ...negativeInitialState(),
            ...flavourInitialState(),
            method: 'Dried Flower',
            rating: "★★★☆☆",
            onsetTime: 'Immediate',
            strain: '',
            comments: '',
            type: 'Sativa',
            date: todayDate,
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
    
    // Can i make these handlers one function? pass the array as an argument?
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
        this.props.history.push('/dank-diary');
    }

    render(){
        return (
            <section>
                <div className="container">
                    <h2>Consumption Entry</h2>
                    <hr />
                    <form onSubmit={this.addEntry}>
                        <label>
                            <span>DATE</span>
                            <input type='date' name='date' className="form-control shadow-none" value={this.state.date} onChange={this.handleChange} />
                        </label>
                        <label>
                            <span>STRAIN</span>
                            <input type="text" name='strain' className="form-control shadow-none" value={this.state.strain} onChange={this.handleChange} />
                        </label>
                        <Select
                            options={types}
                            label="TYPE"
                            labelFor="type"
                            value=""
                            handleChange={this.handleChange}
                        />
                        <Select
                            options={rating}
                            label="RATING"
                            labelFor="RATING"
                            value=""
                            handleChange={this.handleChange}
                        />
                        <Select
                            options={method}
                            label="METHOD"
                            labelFor="method"
                            value=""
                            handleChange={this.handleChange}
                        />
                        <Select
                            options={intervals}
                            label="ONSET TIME"
                            labelFor="onsetTime"
                            value=""
                            handleChange={this.handleChange}
                        />
                        <hr/>
                        <h3>POSITIVE EFFECTS</h3>
                        <Checkbox 
                            choices={this.state.positiveEffects}
                            label="Positive Effects"
                            labelFor="positiveEffects"
                            // checked={false}
                            handleInputChange={this.handlePositiveChange}
                        />
                        <hr/>
                        <h3>NEGATIVE EFFECTS</h3>                        
                        <Checkbox 
                            choices={this.state.negativeEffects}
                            label="Negative Effects"
                            labelFor="negativeEffects"
                            // checked={false}
                            handleInputChange={this.handleNegativeChange}
                        />
                        <hr/>
                        <h3>FLAVOURS</h3>
                        <Checkbox 
                            choices={this.state.flavours}
                            label="Flavour"
                            labelFor="flavour"
                            // checked={false}
                            handleInputChange={this.handleFlavourChange}
                        />
                        <hr/>
                        <label>
                            <span>RATING</span>
                            <select name='rating' onChange={this.handleChange}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5" selected>5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            </select>
                        </label>
                        <div className="row form-group">
                            <label for="comments">COMMENTS</label>
                            <textarea name='comments' className="form-control shadow-none" id="comments" value={this.state.comments} placeholder='How you feeling champ?' onChange={this.handleChange}/>
                        </div>
                        <button onClick={this.addEntry}>ADD ENTRY</button>&nbsp;&nbsp;
                        <Link to='/'>Cancel</Link>
                    </form>
                </div>
            </section>
        )
    }
}

export default DiaryForm;