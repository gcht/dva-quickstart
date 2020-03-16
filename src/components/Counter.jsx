import React from "react";
import { Component } from 'react';



// import { Cascader } from 'antd';
import Cascader from 'antd/es/cascader';
import 'antd/es/cascader/style';








export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.btnClick = this.btnClick.bind(this);
        this.reset = this.reset.bind(this);
    }



    componentWillMount() {
        //以下代码也可以运行时，可以dispatch
        // alert("I'm Counter, I will dispatch [boTreeModel/fetchInitData]")
        // this.props.dispatch({
        //     type: 'boTreeModel/fetchInitData',
        //     payload: { src: 'Counter' }
        // });
    }

    onChange(value) {
        this.props.dispatch({
            type: 'exampleModel/changeCity',
            payload: {
                userInfo: {
                    city: value
                }
            }
        });
    }
    btnClick(value) {
        console.log('===========' + value)
        let randomNum = Math.floor((Math.random() * 100) + 1);
        this.props.dispatch({
            type: 'exampleModel/changeName',
            payload: {
                userInfo: {
                    name: '张三' + randomNum,
                    email: 'zhangsan' + randomNum + '@yonyou.com'
                }
            }
        });

    }
    reset(value) {
        console.log('===========' + value)
        let randomNum = Math.floor((Math.random() * 100) + 1);
        this.props.dispatch({
            type: 'exampleModel/reset',
            payload: {
                userInfo: {
                    name: '张三' + randomNum,
                    email: 'zhangsan' + randomNum + '@yonyou.com'
                }
            }
        });

    }
    renderUserInfo(userInfo) {
        let strs = [];
        for (let key in userInfo) {
            strs.push(<p> {key}：{userInfo[key]}</p>);
        }
        return strs;
    }
    render() {
        return (
            <div>
                <div>
                    请选择地址：
                    <Cascader options={this.props.counter.options} onChange={this.onChange} placeholder="Please select" />
                </div>
                {this.renderUserInfo(this.props.userInfo)}

                <p> 说明：{this.props.counter.showCaption}</p>
                <p> 结果：{this.props.counter.value}</p>
                <button onClick={this.btnClick} value='点击我改变姓名2222' >点击我改变姓名</button>
                <button onClick={this.reset} value='点击我改变姓名2222' >Reset</button>
            </div>
        )
    }
}