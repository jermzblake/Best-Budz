import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import diaryService from '../../utils/diaryService';
// Form variables/state
import { intervals, rating, method, types, } from '../../utils/formHelpers';
// Form components
import Checkbox from '../Checkbox/Checkbox';
import Select from '../Select/Select';

class UpdateForm extends Component {
    constructor(props) {
        super(props);
        this.state={
            positiveEffects: '',
            negativeEffects: '',
            flavours: '',
            method: 'Dried Flower',
            rating: "★★★☆☆",
            onsetTime: 'Immediate',
            strain: '',
            comments: '',
            type: 'Sativa', 
        }
    }

    findEntryState = async() => {
        diaryService.getEntry(this.props.match.params.id)
        .then(entry => {
            this.setState({
                method: entry.method,
                rating: entry.rating,
                onsetTime: entry.onsetTime,
                strain: entry.strain,
                type: entry.type,
                comments: entry.comments,
                positiveEffects: entry.positiveEffects,
                negativeEffects: entry.negativeEffects,
                flavours: entry.flavours,
                id: entry._id
            })   
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    componentDidMount() {
        return this.findEntryState();
    }

    handleChange = (e) => {
        this.props.updateMessage('');
        this.setState({
          // Using ES2015 Computed Property Names
          [e.target.name]: e.target.value,
        });
    }

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

    updateEntry = async(e) => {
        e.preventDefault();
        await diaryService.updateEntry(this.state).then(diary=> this.props.updateDiary(diary));
        this.props.history.push('/dank-diary');
    }

    render() {
        return (
            <section>
                <div className="container">
                    <h2>Update Consumption Entry</h2>
                    <hr />
                    <form ref={this.formRef} onSubmit={this.updateEntry}>
                        <label>
                            <span>STRAIN</span>
                            <input 
                                type="text" 
                                name='strain' 
                                className="form-control shadow-none" 
                                value={this.state.strain} 
                                onChange={this.handleChange} 
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
                            labelFor="rating"
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
                            <textarea name='comments' className="form-control shadow-none" id="comments" rows="4" value={this.state.comments} placeholder='How you feeling champ?' onChange={this.handleChange}/>
                        </div>
                        <button onClick={this.updateEntry}>UPDATE ENTRY</button>&nbsp;&nbsp;
                        <Link to='/dank-diary' className="Link">Cancel</Link>
                    </form>
                </div>
            </section>
        )
    }
}

export default UpdateForm;