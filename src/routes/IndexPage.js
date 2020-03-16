import React from 'react';
import { Component } from 'react';
import styles from './IndexPage.css';
import { ExampleContainer, CounterContainer } from '../containers';
import { message } from 'antd';







export default class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.showInfo = this.showInfo.bind(this);
  }

  componentWillMount() {
    let infoValue = "I'm IndexPage, I will dispatch [boTreeModel/fetchInitData]";
    debugger;
    console.log(message.info);
    this.showInfo('[SYS]:' + infoValue);
    this.props.dispatch({
      type: 'boTreeModel/fetchInitData',
      payload: { src: 'IndexPage' }
    });
  }

  showInfo(info) {
    if (info) {
      message.info('[SYS]:' + info);
    }
  }

  render() {
    return (

      < div className={styles.normal} >
        {
          this.showInfo(this.props.message || 'ssss')
        }

        <h1 className={styles.title}>Yay! Welcome to dva!</h1>
        <div className={styles.welcome} />
        <ul className={styles.list}>
          <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
          <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
        </ul>
        <ExampleContainer></ExampleContainer>
        <hr />
        <CounterContainer></CounterContainer>
      </div >
    );
  }
}

IndexPage.propTypes = {
};


