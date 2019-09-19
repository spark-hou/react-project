import React, {Component} from 'react';
import './App.scss';
import Demo from "./demo/Demo"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'sparkDemo',
        }
    }


    render() {
        return (
            <div className="App">
                <Demo name={this.state.name}></Demo>
            </div>
        );
    }
}

export default App;
