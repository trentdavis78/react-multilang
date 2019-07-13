import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends Component {
    static contextType = LanguageContext;
    
    render() {
        return (
            <button className="ui primary button">
                Submit
            </button>
        )
    }
}

export default Button;
