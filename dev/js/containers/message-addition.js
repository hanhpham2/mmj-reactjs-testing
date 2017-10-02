import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addMessage } from '../actions/message-actions'

class MessageAddition extends Component {

    handleSubmit(e) {
        let newMessage = {
            id: this.props.messages.length + 1,
            text: this.refs.inputText.value
        }

        e.preventDefault();
        this.props.addMessage(newMessage);
        this.refs.inputText.value = "";
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)} className="message_addition__wrapper">
                <input type="text" placeholder="enter task" ref="inputText" className="message_addition__input"/>
                <button className="message_addition__button">Add</button>
            </form>
        );
    }
}

function mapStateToProps(state) {
    return {
        messages: state.messages
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ addMessage: addMessage }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(MessageAddition);
