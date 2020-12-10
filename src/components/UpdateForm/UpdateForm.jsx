import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import diaryService from '../../utils/diaryService';
// Form variables/state
import { method, types, } from '../../utils/formHelpers';
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
            rating: 5,
            onsetTime: 'Immediate',
            strain: '',
            comments: '',
            type: 'Sativa', 
        }
    }

    findEntryState = async() => {
        // console.log(this.props.match.params.id)
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
          [e.target.name]: e.target.value
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
        console.log(this.state)
        await diaryService.updateEntry(this.state).then(diary=> this.props.updateDiary(diary));
        this.props.history.push('/dank-diary');
    }

    render() {
        return (
            <section>
                <h2>Update Consumption Entry</h2>
                <hr />
                <form onSubmit={this.updateEntry}>
                    <label>
                        <span>STRAIN</span>
                        <input name='strain' value={this.state.strain} onChange={this.handleChange} />
                    </label>
                    <Select
                        options={types}
                        label="TYPE"
                        labelFor="type"
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
                    <span>POSITIVE EFFECTS</span>
                    <Checkbox 
                        choices={this.state.positiveEffects}
                        label="Positive Effects"
                        labelFor="positiveEffects"
                        handleInputChange={this.handlePositiveChange}
                    />
                    <span>NEGATIVE EFFECTS</span>                        
                    <Checkbox 
                        choices={this.state.negativeEffects}
                        label="Negative Effects"
                        labelFor="negativeEffects"
                        handleInputChange={this.handleNegativeChange}
                    />
                    <span>FLAVOURS</span>
                    <Checkbox 
                        choices={this.state.flavours}
                        label="Flavour"
                        labelFor="flavour"
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
                        <select name='onsetTime' onChange={this.handleChange}>
                        <option value="Immediate">Immediately</option>
                        <option value="< 30mins">&lt;30mins</option>
                        <option value="30mins > 60mins">30mins &gt; 60mins</option>
                        <option value="60mins > 90mins">60mins &gt; 90mins</option>
                        <option value="90mins > 120mins">90mins &gt; 120mins</option>
                        <option value="120mins > 180mins">120mins &gt; 180mins</option>
                        <option value="> 180mins">&gt;180mins</option>
                        </select>
                    </label>
                    <label>
                        <span>COMMENTS</span>
                        <textarea name='comments' value={this.state.comments} onChange={this.handleChange}/>
                    </label>
                    <button onClick={this.updateEntry}>UPDATE ENTRY</button>&nbsp;&nbsp;
                    <Link to='/dank-diary'>Cancel</Link>
                </form>
            </section>
        )
    }
}

export default UpdateForm;