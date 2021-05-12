import React,{Component} from 'react';
import { UserOutlined } from '@ant-design/icons';
import {Menu,Dropdown} from 'antd';
import {Nav} from '../../component/common/nav';
import {Switch,Route,Redirect} from 'react-router-dom';
import routers from '../../router/index';
import './index.scss'; 
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
export class Home extends Component{
    state={
        navList: [{
            name: "用户管理",
            path: "/home/user"
        },{
            name: "区域管理",
            path: "/home/region"
        },{
            name: "权限管理",
            // path: "/home/authority"
            path: "/home/hook"
        }]
    }
    render(){
        const currentRouter = routers.find(item => item.name === 'home');
        console.log(this.props.history,'we')
        return( 
            <div>
                {/* <Nav navList={this.state.navList}/>
                github-test */}
                <header>
                    <div className="header-child">react后台管理</div>
                    <div className="header-child">
                    <Dropdown overlay={menu}>
                        <UserOutlined />
                    </Dropdown>
                        {/* <UserOutlined /> */}
                    </div>
                </header>
                <div className="content">
                    <div style={{flex: 1}}>
                    <Nav navList={this.state.navList} />
                    </div>
                    <div style={{flex: 8,margin: '20px',background: '#fff'}}>
                    <Switch>
                        {currentRouter.children.map((item,index)=>{
                            return(
                                <Route exact path={item.path} key={item.path} component={item.component} />
                            )
                        })}
                        <Redirect to="/home/user"/>
                    </Switch>
                    </div>
                </div>
            </div>
            
        )
    }
}