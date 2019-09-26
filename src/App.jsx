import React, {Component} from 'react';
import './App.scss';
//import Demo from "./demo/Demo"
// import Index from "./components/Index/Index"
import {routes} from "./router/config"
import {BrowserRouter as Router, Route} from "react-router-dom";

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
                <Router>
                    {
                        routes.map((item, i) => {
                                if (item.exact) {
                                    return <Route path={item.path}
                                                  exact
                                                  key={i}
                                                  render={props => (
                                                      <item.component {...props} routes={item.routes}/>
                                                  )}
                                    />
                                } else {
                                    return <Route path={item.path}
                                                  key={i}
                                                  render={props => (
                                                      <item.component {...props} routes={item.routes}/>
                                                  )}
                                    />
                                }
                            }
                        )
                    }
                </Router>

            </div>
        );
    }
}

export default App;
