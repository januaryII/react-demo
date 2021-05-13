import React, { Component } from 'react';
import { Tabs, Modal, Button } from 'antd';
import { DataList } from '../../../component/common/data-list';
import { withRouter } from 'react-router';
const { TabPane } = Tabs;
export class User extends Component {
    state = {
        dataList: [{
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
        },],
        isModalVisible: false,
        editItem: {}
    }
    changeTabs(key) {
        console.log(key, 'kk')
    }
    getChild(e, item) {
        console.log(222)
        console.log(e,)
        console.log(item, 'item')
        this.setState({
            isModalVisible: true,
            editItem: item
        })
    }
    handleOk = () => {
        this.setState({
            isModalVisible: false
        })
    };
    handleCancel = () => {
        this.setState({
            isModalVisible: false
        })
      };
    showModal = () => {
        this.setState({
            isModalVisible: true
        })
    };
    changeChildData(data, type) {
        console.log(33, data, type)
        // this.props
        if (type === 'del') {
            var dataList = this.state.dataList;
            dataList = dataList.filter((item, index) => {
                return (item.place != this.state.editItem.place);
            })
            this.setState({
                dataList,
                isModalVisible: false
            })
            return
        }
        this.setState({
            dataList: type === 'reset' ? [{
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
            },] : []
        })
    }
    render() {
        return (
            <div>
            {/* 删除-----点击子组件删除--传递参数/触发父组件对话框--删除数据*/}
                <Modal title="delete Modal" visible={this.state.isModalVisible} footer={null} onOk={this.handleOk} onCancel={this.handleCancel}>
                    <p>确定删除{this.state.editItem.place}吗？</p>
                    <Button type="primary" onClick={(e) => { this.changeChildData(e, 'del') }}>delete</Button>
                </Modal>
                <div>用户管理</div>
                {/* 清空、重置----点击父组件清空/重置--清空/重置this.state.dataList(子组件接受的数据) */}
                <Button type="primary" onClick={this.changeChildData.bind(this, 'clear')}>清空</Button>
                <Button type="primary" onClick={(e) => this.changeChildData(e, 'reset')}>重置</Button>
                <div>添加</div>
                <Tabs defaultActiveKey="1" onChange={this.changeTabs}>
                    <TabPane tab="区域账户" key="1">
                        <DataList dataList={this.state.dataList} changeParent={this} />
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