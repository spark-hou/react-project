/**
 * @author  :spark Hou
 * @date  : 2019-09-20 14:07
 * @Description :  Topics
 */
import React, {Component} from "react";
import {Route, Link} from "react-router-dom";


class Topics extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        console.log("----props----", this.props);
    }

    render() {

        return (
            <div>
                <ul>
                    <li>
                        <Link to="/topics/bus">Bus</Link>
                    </li>
                    <li>
                        <Link to="/topics/cart">Cart</Link>
                    </li>
                </ul>
                <h2>Topic</h2>
                {
                    this.props.routes.map((item, i) =>
                        {
                            return <Route key={i} path={item.path} component={item.component}/>
                        }
                    )
                }
            </div>
        )
    }

}

export default Topics;