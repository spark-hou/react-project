/**
 * @author  :spark Hou
 * @date  : 2019-09-26 10:26
 * @Description :  Login  -->
 */
import React, {Component} from "react";
import {Form, Icon, Input, Button, Checkbox} from 'antd';
import LoginInDto from './LoginInDto'
import "./Login.scss"

const loginID = new LoginInDto();

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginID
        }
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    /**
     * 提交表单
     */
    handleSubmit = () => {
        this.props.form.validateFieldsAndScroll((err, values) => {
            console.log(values);
            if (!err) {
                return;
            }
        })
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div className="login">
                <div className="loginBox">
                    <Form  className="login-form">
                        <Form.Item>
                            {getFieldDecorator('userName', {
                                rules: [{required: true, message: 'Please input your username!'}],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                    placeholder="Username"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{required: true, message: 'Please input your Password!'}],
                            })(
                                <Input
                                    prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                    type="password"
                                    placeholder="Password"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(<Checkbox>Remember me</Checkbox>)}
                            <a className="login-form-forgot" href="baidu.com">
                                Forgot password
                            </a>
                            <Button type="primary" onClick={this.handleSubmit} className="login-form-button">
                                Log in
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }

}

export default Form.create({})(Login);