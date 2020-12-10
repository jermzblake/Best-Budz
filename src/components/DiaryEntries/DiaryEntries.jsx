import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import diaryService from '../../utils/diaryService';
import '../DiaryEntries/DiaryEntries.css'
// Material Design Bootstrap 4 React
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';



class DiaryEntries extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal10: false,  //confirmation modal
            modal14: false
        }
    }

    toggle = nr => () => {
        let modalNumber = 'modal' + nr
        this.setState({
          [modalNumber]: !this.state[modalNumber]
        });
    }

    date = this.props.entry.date
    noTimeDate = this.date.slice(0,10);

    handleDelete = async (e) => {
        // e.preventDefault();
        await diaryService.deleteEntry(this.props.entry).then(diary => this.props.updateDiary(diary));
        this.props.history.push('/dank-diary');
    }

    makeList = (arr) => {
        let newarr = []
        arr.forEach(obj => {
            if(Object.values(obj)[0] === true) {
                newarr.push(Object.keys(obj)[0])
            }
        })
        let list = newarr.join(', ')
        return list
    }

    render() {
        return (
            <MDBContainer>
                <div onClick={this.toggle(14)} className="list-group-item list-group-item-action">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-2"><span className="strain">{this.props.entry.strain}</span>&nbsp; | &nbsp;{this.props.entry.rating}/10</h5>
                        <small className="date">{this.noTimeDate}</small>
                    </div>
                    <div className="larger-device">
                        <p className="mb-0"><span className="pvefx">Positive Effects:</span> {this.makeList(this.props.entry.positiveEffects)} &nbsp;&nbsp;|&nbsp;&nbsp; <span className="nvefx">Negative Effects:</span> {this.makeList(this.props.entry.negativeEffects)} </p>
                    </div>
                    <div className="smaller-device">
                        <p className="mb-1"><span className="pvefx">Positive Effects:</span> {this.makeList(this.props.entry.positiveEffects)}</p> 
                        <p><span className="nvefx">Negative Effects:</span> {this.makeList(this.props.entry.negativeEffects)} </p>
                    </div>
                    <small className="text-muted">{this.props.entry.type}</small>
                </div>
                <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
                    <MDBModalHeader toggle={this.toggle(14)}>
                        <div className="larger-device"><span className="strain">{this.props.entry.strain }</span>&nbsp;- &nbsp;<span className="text-muted">{this.props.entry.type}</span> |&nbsp;&nbsp;{this.props.entry.rating}/10</div>
                        <div className="smaller-device mb-0"><p><span className="strain">{this.props.entry.strain }</span>&nbsp;- &nbsp;<span className="text-muted">{this.props.entry.type}</span></p><p>{this.props.entry.rating}/10</p></div>
                    </MDBModalHeader>
                    <MDBModalBody>
                        <div className="container-fluid">
                            <div className="row categories">
                                <div class="col text-center">Method</div>
                                <div class="col text-center">Flavours/Aromas</div>
                            </div>
                                <div className="row">
                                    <div className="col-6 text-center">{this.props.entry.method}</div>
                                    <div className="col text-center">{this.makeList(this.props.entry.flavours)}</div>
                                </div>
                            <br/>
                            <div className="row">
                                <div className="col mr-auto ml-auto text-center">
                                    <strong>Onset</strong> ⌛: {this.props.entry.onsetTime}
                                </div>
                            </div><hr/>
                            <div className="row">
                                <div className="col"><span className="pvefx">Positive Effects: </span>{this.makeList(this.props.entry.positiveEffects)}</div>
                            </div>
                            <div className="row">
                                <div className="col mr-auto"><span className="nvefx">Negative Effects: </span>{this.makeList(this.props.entry.negativeEffects)}</div>
                            </div>

                            <br/>
                            <div className="comments">
                                {this.props.entry.comments}
                            </div>
                        </div>
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn color="danger" onClick={this.handleDelete}>Delete</MDBBtn>
                        <Link to={"/edit/" + this.props.entry._id} color="primary">Update</Link>
                    </MDBModalFooter>
                </MDBModal>
                {/* <MDBModal isOpen={this.state.modal10} toggle={this.toggle(10)} frame position="bottom">
                    <MDBModalBody className="text-center">
                        <p>ARE YOU SURE YOU WANT TO DELETE? THIS ACTION CANNOT BE UNDONE!!</p>
                        <MDBBtn color="secondary" onClick={this.toggle(10)}>Cancel</MDBBtn>
                        <MDBBtn color="primary" onClick={this.handleDelete}>Save changes</MDBBtn>
                    </MDBModalBody>
                </MDBModal> */}
            </MDBContainer>
        );
    }
}

export default DiaryEntries;