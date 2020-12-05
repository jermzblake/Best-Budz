import React, {Component} from 'react';
import DiaryForm from '../../components/DiaryForm/DiaryForm';
///import css

class EntryFormPage extends Component {
    constructor(props) {
        super(props);
        this.state = {message: ''}
    }

    updateMessage = (msg) => {
        this.setState({message: msg});
    }

    render() {
        return (
            <div className="EntryFormPage">
                <DiaryForm {...this.props} updateMessage={this.updateMessage} />
                <p>{this.state.message}</p>
            </div>
        )
    }
}

export default EntryFormPage;