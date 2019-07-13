import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends Component {
    
    render() {
        return (
            <ColorContext.Consumer>
                {(color) => (
                <button className={`ui ${color} button`}>
                    <LanguageContext.Consumer>
                        {value => value === 'english' ? 'Submit' : 'Voorleggen'}
                    </LanguageContext.Consumer>
                </button>
                )}

            </ColorContext.Consumer>

        )
    }
}

export default Button;
