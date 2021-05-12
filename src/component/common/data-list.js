import React, { Component } from 'react';
import '../style/index.scss'
export class DataList extends Component {
    state = {
        dataArr: {
            title: { place: '区域', number: '账户', passwork: '密码' },
            data: [{
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
        },
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
        },]
    }
    getRender = () => {

    }
    componentDidMount() {
        // let dataArr = [];
        if (this.props.dataList && this.props.dataList.length) {
            // dataArr = this.props.dataArr;
            this.setState({
                dataList: this.props.dataList
            })
        }
        else {
            // dataArr = this.state.dataArr;
        }

    }
    render() {
        return (
            <div>
                <div className="data-list">
                    <div className="data-child">{this.state.dataArr.title.place}</div>
                    <div className="data-child">{this.state.dataArr.title.place}</div>
                    <div className="data-child">{this.state.dataArr.title.place}</div>
                    <div className="data-child">操作</div>
                </div>
                {
                    this.props.dataList.map((item,index)=>{
                        return (
                            <div className="data-list" key={index}>
                                {/* <React.Fragment key={index}> */}
                                <div className="data-child">{item.place}</div>
                                <div className="data-child">{item.number}</div>
                                <div className="data-child">{item.passwork}</div>
                                <div className="data-child">
                                    <span>删除</span>
                                </div>
                                {/* </React.Fragment> */}
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}