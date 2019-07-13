import React, { Component } from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

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
                <LanguageContext.Provider value={this.state.language}>
                    <ColorContext.Provider value="red">
                        <UserCreate />
                    </ColorContext.Provider>                    
                </LanguageContext.Provider>                
            </div>
        )
    }
};

export default App;
