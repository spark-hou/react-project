/**
 * @author  :spark Hou
 * @date  : 2019-09-19 14:30
 * @Description :
 */
import React, {Component} from "react";
import {Button, Typography} from "antd";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import About from "./router/About"
import Home from "./router/Home"
import Topics from "./router/Topics"
import Bus from "./router/Bus"
import Cart from "./router/Cart"
import "./Demo.scss"

const {Paragraph} = Typography;
const routes = [
    {
        path: "/about",
        component: About
    },
    {
        path: "/",
        component: Home,
        exact: true,
    },
    {
        path: "/topics",
        component: Topics,
        routes: [
            {
                path: "/topics/bus",
                component: Bus
            },
            {
                path: "/topics/cart",
                component: Cart
            }
        ]
    }
];

export default class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: "this is spark demo",
            date: new Date(),
            list: [1, 2, 3, 4, 5, 6, 7],
            str: "This is an editable text",
            isLoggedIn: false,
            value: "",
        }
    }

    componentDidMount() {
        console.log(this.props, this.state);
        this.timerID = setInterval(() => {
            this.tick();
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {

        this.setState({
            date: new Date(),
        })
    }

    onChange = (str) => {
        this.setState({str})
    }
    clickHandle = () => {
        let isLoggedIn = !this.state.isLoggedIn;
        this.setState({isLoggedIn});
    }
    inputHandle = (e) => {
        this.setState({
            value: e.target.value,
        })
    }


    render() {
        return (
            <Router>
                <div className="Demo">
                    <div className="title">
                        {this.state.content}
                    </div>
                    <Button type="primary">Button</Button>
                    <h2>it is {this.state.date.toLocaleTimeString()}</h2>
                    <h2>6. 事件处理</h2>
                    <Paragraph editable={{onChange: this.onChange}}>{this.state.str}</Paragraph>
                    <h2>7. 条件渲染</h2>
                    {
                        this.state.isLoggedIn ? <Button type="dashed" onClick={this.clickHandle} ghost>
                            dashed
                        </Button> : <Button type="danger" onClick={this.clickHandle} ghost>
                            danger
                        </Button>

                    }
                    {
                        this.state.isLoggedIn && <Button type="primary" ghost>
                            primary
                        </Button>
                    }

                    <h2>8. 列表 & Key</h2>
                    {
                        this.state.list.map((item, index) =>
                            <li key={index}>{item}</li>
                        )
                    }
                    <h2>9. 表单</h2>
                    <label>
                        名字:
                        <input type="text" value={this.state.value} onChange={this.inputHandle}/>
                    </label>


                </div>
                <h2>路由跳转</h2>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/topics">Topics</Link>
                    </li>
                </ul>
                {/*<Route exact path="/" component={Home}/>*/}
                {/*<Route path="/about" component={About}/>*/}
                {/*<Route path="/topics" component={Topics}/>*/}
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

        );
    }
}