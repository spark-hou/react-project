import React, {Component} from 'react';
import './App.scss';
import {routes} from "./router/config"
import {Route, Switch, withRouter} from "react-router-dom";

class App extends Component {
    constructor(props) {
        super(props);
        props.history.listen(() => {  //在这里监听location对象
            console.log(this.props);  //切换路由的时候输出"/one/users"和"/one/companies"
        })
        this.state = {
            name: 'sparkDemo',
        }
    }


    render() {
        return (
            <div className="App">

                <Switch>
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
                </Switch>


            </div>
        );
    }
}

export default withRouter(App);
