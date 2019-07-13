import React, { Component } from 'react';
import UserCreate from './UserCreate';

class App extends Component {
    state = { language: 'english' }

    style = {
        cursor: 'pointer'
    }
    onLanguageChange = language => {
        this.setState({language})
    };

    render() {
        return (
            <div className="ui container">
                <div>
                    Select a language:
                    &nbsp;
                    <i style={this.style} className="flag us" onClick={() => this.onLanguageChange('english')} />
                    <i style={this.style} className="flag nl" onClick={() => this.onLanguageChange('dutch')}  />
                </div>
                <UserCreate />
            </div>
        )
    }
};

export default App;
