import React,{Component} from 'react';
import {Tabs} from 'antd';
import {DataList} from '../../../component/common/data-list';
import { withRouter } from 'react-router';
const {TabPane} = Tabs;
export class User extends Component{
    state={
        dataList:  [{
            place: '天河区',
            number: '124214',
            passwork: '111'
        }, {
            place: '荔湾区',
            number: '124214',
            passwork: '111'
        }, {
            place: '番禺区',
            number: '124214',
            passwork: '111'
        },]
    }
    changeTabs(key){
        console.log(key,'kk')
    }   
    changeData(data,type){
        console.log(33,data,type)
        // this.props
        this.setState({
            dataList: type === 'reset'? [{
                place: '天河区',
                number: '124214',
                passwork: '111'
            }, {
                place: '荔湾区',
                number: '124214',
                passwork: '111'
            }, {
                place: '番禺区',
                number: '124214',
                passwork: '111'
            },]: []
        })
    }
    render(){
        return(
            <div>
                <div>用户管理</div>
                <div onClick={this.changeData.bind(this,'clear')}>清空</div>
                <div onClick={(e)=>this.changeData(e,'reset')}>重置</div>
                <div>添加</div>
                <Tabs defaultActiveKey="1" onChange={this.changeTabs}>
                    <TabPane tab="区域账户" key="1">
                        <DataList  dataList={this.state.dataList}/>
                    </TabPane>
                    <TabPane tab="店面账户" key="2">
                    Content of Tab Pane 2
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}
// export let User = withRouter(UserComponent);