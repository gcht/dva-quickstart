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
    }
    onChange(value) {

    }
    btnClick(value) {
        console.log('===========' + value)
        this.props.dispatch({
            type: 'exampleModel/changeName',
            payload: {
                userInfo: {
                    name: '张三1111',
                    email: 'zhangsan@yonyou.com111'
                }
            }
        });

    }
    render() {
        return (
            <div>
                <Cascader options={this.props.counter.options} onChange={this.onChange} placeholder="Please select" />
                <p> 姓名：{this.props.userInfo.name}</p>
                <p> 说明：{this.props.counter.showCaption}</p>
                <p> 结果：{this.props.counter.value}</p>
                <button onClick={this.btnClick} value='点击我改变姓名2222' >点击我改变姓名</button>
            </div>
        )
    }
}