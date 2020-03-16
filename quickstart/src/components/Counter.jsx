import React from "react";
import {Component} from 'react';

export default class Counter extends Component {
    constructor(props){
        super(props)
    }  
    render (){        
        return (
            <div>
                 <p> 姓名：{this.props.userInfo.name}</p>
                 <p> 说明：{this.props.counter.showCaption}</p>
                 <p> 结果：{this.props.counter.value}</p>
            </div>
        )
    }
}