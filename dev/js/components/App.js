import React from 'react';
import MessageAddition from '../containers/message-addition';
import MessageList from '../containers/message-list';

require('../../scss/style.scss');

const App = () => (
    <div className="message_container">
        <MessageAddition />
        <MessageList />
    </div>
);

export default App;
