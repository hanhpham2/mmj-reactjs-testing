import React, { Component } from 'react';
import { connect } from 'react-redux';

class MessageList extends Component {

    renderList() {
        return this.props.messages.map((message) => {
            return (
                <li key={message.id} className="message_list__item">
                    {message.text}
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="message_list__wrapper">
                {this.renderList()}
            </ul>
        );
    }

}

function mapStateToProps(state) {
    return {
        messages: state.messages
    };
}

export default connect(mapStateToProps)(MessageList);
