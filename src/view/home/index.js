import React,{Component} from 'react';
import { UserOutlined } from '@ant-design/icons';
import {Menu,Dropdown,Modal} from 'antd';
import { connect } from 'react-redux';
import actionTest from '../../store/actions.js';
import {Nav} from '../../component/common/nav';
import {Switch,Route,Redirect,Link} from 'react-router-dom';
import routers from '../../router/index';
import './index.scss'; 
const linkData = {
    name: "个人中心"
}
const menu = (
    <Menu>
        <Menu.Item key="0" >
        {/* this.props.location.state.name */}
        <Link   to={{
      pathname: '/userCenter',
      search: `?name=${JSON.stringify(linkData)}`,
      state: { price: 18 }
    }} 
> 
            个人中心
        </Link>
      </Menu.Item>
        <Menu.Item key="1" >
            登出
      </Menu.Item>
        {/* <Menu.Divider /> */}
    </Menu>
);
class HomeComponent extends Component{
    state={
        navList: [{
            name: "用户管理",
            path: "/home/user"
        },{
            name: "区域管理",
            path: "/home/region"
        },
        
        // {
        //     name: "权限管理",
        //     // path: "/home/authority"
        //     path: "/home/hook"
        // }
    ],
    isModalVisible: false
    }
    handleOk = () => {
        this.setState({
            isModalVisible: false
        })
    };
    handleCancel = () => {
        console.log(this.props)
        // 改变redux状态
        this.props.change({loginModalStatus: false})
        // this.setState({
        //     isModalVisible: false
        // })
    };
    render(){
        console.log(actionTest,'actionTest',this.props)
        const {loginModalStatus,change} = this.props;
        console.log(loginModalStatus,change)
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

                <Modal title="delete Modal" visible={loginModalStatus} footer={null} onOk={this.handleOk} maskClosable={false}  onCancel={this.handleCancel}>
                    <p>确定删除</p>
                    {/* <Button type="primary" onClick={(e) => { this.changeChildData(e, 'del') }}>delete</Button> */}
                </Modal>
                <div onClick={(()=>{change({loginModalStatus: true})})}>change --- {JSON.stringify(loginModalStatus)}</div>
                </div>
            </div>
        )
    }
}


// // 将store数据映射到mapStateToProps，mapDispatchToProps。便于界面使用。
const mapStateToProps = (state) =>{
    console.log(state,'state')
    return {
        loginModalStatus: state.loginStatus.loginModalStatus
    }
}
const mapDispatchToProps = dispatch=>{
    // return{
    //     changeStatus: status => {
    //         dispatch({
    //             type: CHANGE_LOGIN_MODAL_STATUS,status
    //         })
    //     }
    // }
    return {
        change(loginModalStatus) {
            dispatch(actionTest.change(loginModalStatus))
        },
        // addQty(id) {
        //     dispatch(cartAction.addQty(id))
        // },
        // reduceQty(id) {
        //     dispatch(cartAction.reduceQty(id))
        // },
        // clear() {
        //     dispatch(cartAction.clear())
        // },

    }
}
export const Home = connect(mapStateToProps,mapDispatchToProps)(HomeComponent)