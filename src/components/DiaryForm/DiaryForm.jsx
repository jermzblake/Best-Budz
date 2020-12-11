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
            //track validity of form
            formInvalid: true
        }
    }

    formRef = React.createRef();

    handleChange = (e) => {
        this.props.updateMessage('');
        this.setState({
          // Using ES2015 Computed Property Names
          [e.target.name]: e.target.value,
          formInvalid: !this.formRef.current.checkValidity()  //update using the formRef
        });
    }
   
    // Can i make these handlers one function? pass the array as an argument?
    handlePositiveChange = (event) => {
        const target = event.target;
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
        if (!this.formRef.current.checkValidity()) return;  // Do nothing if the form is invalid
        await diaryService.createEntry(this.state).then(diary=> this.props.updateDiary(diary));
        this.props.history.push('/dank-diary');
    }

    render(){
        return (
            <section>
                <div className="container">
                    <h2>Consumption Entry</h2>
                    <hr />
                    <form ref={this.formRef} onSubmit={this.addEntry}>
                        <label>
                            <span>DATE</span>
                            <input type='date' name='date' className="form-control shadow-none select" value={this.state.date} onChange={this.handleChange} />
                        </label>
                        <label>
                            <span>STRAIN</span>
                            <input 
                                type="text" 
                                name='strain' 
                                className="form-control shadow-none" 
                                value={this.state.strain} 
                                onChange={this.handleChange} 
                                //  these two additional props set constraints *
                                required
                                pattern=".{2,}"
                            />
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
                            handleInputChange={this.handlePositiveChange}
                        />
                        <hr/>
                        <h3>NEGATIVE EFFECTS</h3>                        
                        <Checkbox 
                            choices={this.state.negativeEffects}
                            label="Negative Effects"
                            labelFor="negativeEffects"
                            handleInputChange={this.handleNegativeChange}
                        />
                        <hr/>
                        <h3>FLAVOURS</h3>
                        <Checkbox 
                            choices={this.state.flavours}
                            label="Flavour"
                            labelFor="flavour"
                            handleInputChange={this.handleFlavourChange}
                        />
                        <hr/>
                        <div className="row form-group">
                            <label for="comments">COMMENTS</label>
                            <textarea name='comments' className="form-control shadow-none" id="comments" value={this.state.comments} placeholder='How you feeling champ?' onChange={this.handleChange}/>
                        </div>
                        <button className="btn" onClick={this.addEntry} disabled={this.state.formInvalid}>ADD ENTRY</button>&nbsp;&nbsp;
                        <Link to='/' className="Link">Cancel</Link>
                    </form>
                </div>
            </section>
        )
    }
}

export default DiaryForm;