/**
 * @author  :spark Hou
 * @date  : 2019-09-25 14:01
 * @Description :  Index  -->
 */
import React, {Component} from "react";
import {Layout, Breadcrumb, Icon, Button, Dropdown, Menu,Avatar } from 'antd';
import {Link} from "react-router-dom";
import IndexMenu from "./IndexMenu"
import "./Index.scss"

const {Header, Content, Sider, Footer} = Layout;

const menu = (
    <Menu>
        <Menu.Item>
            <Link to="/Login">登录</Link>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                2nd menu item
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                3rd menu item
            </a>
        </Menu.Item>
    </Menu>
)

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false
        }
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }


    /**
     * 控制menu的缩放
     */
    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <div className="indexBox">
                <Layout>
                    <Header className="header">
                        <div className="left">
                            <div className="logo">
                                <img src={[require("../../asset/img/index/logo.jpg")]} alt=""/>
                            </div>
                            <Button type="primary"
                                    onClick={this.toggleCollapsed}>
                                <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}/>
                            </Button>
                        </div>
                        <div className="right">
                            <Dropdown overlay={menu}>
                                <Avatar size="large" icon="user" />
                            </Dropdown>
                        </div>
                    </Header>
                    <Layout className="indexContent">
                        <Sider width={200}
                               className="sider"
                               style={{background: '#fff'}}
                               collapsed={this.state.collapsed}>
                            <IndexMenu className="indexMenu"/>
                        </Sider>
                        <Layout className="position-relative"
                                style={{padding: '0 24px 0'}}>
                            <Breadcrumb style={{margin: '16px 0'}}>
                                <Breadcrumb.Item>Home</Breadcrumb.Item>
                                <Breadcrumb.Item>List</Breadcrumb.Item>
                                <Breadcrumb.Item>App</Breadcrumb.Item>
                            </Breadcrumb>
                            <Content
                                className="position-relative"
                                style={{
                                    background: '#fff',
                                    padding: 24,
                                    margin: 0,
                                }}
                            >
                                <div className="indexContainer">
                                    ha1
                                    <br/>
                                    Really
                                </div>
                            </Content>
                            <Footer className="indexFoot overflow-hidden" style={{textAlign: 'center'}}>Ant Design ©2018
                                Created by Ant UED</Footer>
                        </Layout>
                    </Layout>
                </Layout>
            </div>
        )
    }

}

export default Index;