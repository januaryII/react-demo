import { Menu, Dropdown } from 'antd';
import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
class NavComponent extends Component {

    state = {
        current: '1'
    }
    
    handleClick = e => {
        console.log('click ', e,this);
        this.setState({
            current: e.key,
        });

        this.props.history.push(e.key);

        // <Route path=' /sort/:id '   component={Sort}></Route>
        // this.props.history.push(  '/sort/'+'2'  )
        // this.props.match.params.id 
    };
    render() {
        console.log(this)
        return (
            <div>
                <Menu
                    style={{maxWidth: 256}}
                    theme='light'
                    onClick={this.handleClick}
                    defaultOpenKeys={['sub1']}
                    selectedKeys={[this.state.current]}
                    mode="vertical"
                >
                    {
                        this.props.navList.map((item, index) => {
                            return (
                                <Menu.Item key={item.path} >{item.name}</Menu.Item>
                            )
                        })
                    }
                </Menu>
                <div
                    style={{ position: 'absolute', top: '10px', right: '50px', color: '#fff' }}
                >
                </div>
            </div>
        )
    }
}
export let Nav = withRouter(NavComponent);