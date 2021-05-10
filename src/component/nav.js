import { Menu, Dropdown } from 'antd';
// const Menu = Menu;
// import {SubMenu} from Menu;
// const { SubMenu } = Menu;
import { UserOutlined } from '@ant-design/icons';
import React, { Component } from 'react';
const menu = (
    <Menu>
        <Menu.Item key="0">
            个人中心
      </Menu.Item>
        <Menu.Item key="1">
            登出
      </Menu.Item>
        {/* <Menu.Divider /> */}
    </Menu>
);
export class Nav extends Component {

    state = {
        current: '1'
    }
    
    handleClick = e => {
        console.log('click ', e,this);
        this.setState({
            current: e.key,
        });
        // this.props.history.push(e.key);
        // this.props.history.push(e.key)
    };
    render() {
        console.log(this)
        return (
            <div>
                <Menu
                    theme='dark'
                    onClick={this.handleClick}
                    style={{ width: '100vw' }}
                    defaultOpenKeys={['sub1']}
                    selectedKeys={[this.state.current]}
                    mode="horizontal"
                >
                    {
                        this.props.navList.map((item, index) => {
                            return (
                                <Menu.Item key={item.path}>{item.name}</Menu.Item>
                            )
                        })
                    }

                    {/* <SubMenu key="sub1" title="Navigation One">
                        <Menu.Item key="1">Option 1</Menu.Item>
                        <Menu.Item key="2">Option 2</Menu.Item>
                        <Menu.Item key="3">Option 3</Menu.Item>
                        <Menu.Item key="4">Option 4</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub1"  title="Navigation One">
                        <Menu.Item key="1">Option 1</Menu.Item>
                        <Menu.Item key="2">Option 2</Menu.Item>
                        <Menu.Item key="3">Option 3</Menu.Item>
                        <Menu.Item key="4">Option 4</Menu.Item>
                    </SubMenu> */}

                </Menu>
                <div
                    style={{ position: 'absolute', top: '10px', right: '50px', color: '#fff' }}
                >
                    <Dropdown overlay={menu}>
                        <UserOutlined />
                    </Dropdown>
                </div>
            </div>
        )
    }
}