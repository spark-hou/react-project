import React, {Component} from 'react';
import './App.scss';
//import Demo from "./demo/Demo"
import Index from "./components/Index/Index"
// import routes from "./router/config"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'sparkDemo',
        }
    }


    render() {
        return (
            <div className="App">
                {/*<Demo name={this.state.name}></Demo>*/}
                <Index/>
            </div>
        );
    }
}

export default App;
