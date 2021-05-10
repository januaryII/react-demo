import React,{Component} from 'react';
import {Nav} from '../../component/nav';
export class Home extends Component{
    state={
        navList: [{
            name: "首页",
            path: "/home"
        },{
            name: "商品库存",
            path: "/goodsInventory"
        },{
            name: "人员管理",
            path: "personnelManagement"
        }]
    }
    render(){
        console.log(this.props.history,'we')
        return(
            <div>
                <Nav navList={this.state.navList}/>
                github-test
            </div>
            
        )
    }
}