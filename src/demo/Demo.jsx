/**
 * @author  :saprk Hou
 * @date  : 2019-09-19 14:30
 * @Description :
 */
import React, {Component} from "react";
import {Button, Typography} from "antd";
import "./Demo.scss"

const {Paragraph} = Typography;

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
        );
    }
}