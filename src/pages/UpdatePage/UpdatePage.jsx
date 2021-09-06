import React, {Component} from 'react';
import UpdateForm from '../../components/UpdateForm/UpdateForm';

class UpdatePage extends Component {
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
                <UpdateForm {...this.props} updateMessage={this.updateMessage} />
                <p>{this.state.message}</p>
            </div>
        )
    }
}

export default UpdatePage;