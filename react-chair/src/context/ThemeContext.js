import React, {createContext, Component} from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state = {
        charSelected: "nerd"
    }
    
    render() {
        return (
            <ThemeContext.Provider value={{...this.state, switchChar: this.switchChar}}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}

export default ThemeContextProvider;