
import React, {Component} from 'react';
import {StatusBar} from 'react-native';
import styles from '../styles/index.style';
import { Actions } from 'react-native-router-flux';
import {  Header, Left, Body, Right, Button, Icon, Title } from 'native-base';


export default class ConfirmTransfer extends Component{
  render() {
    return (
      <Header style={styles.header}>
        <StatusBar backgroundColor="#276ca5" barStyle="light-content" />
        <Left style={styles.flex}>
          <Button onPress={()=>{
            Actions.pop()
              }} transparent>
            <Icon name='arrow-back' />
          </Button>
        </Left>
        <Body style={styles.headertitle}>
          <Title>{this.props.title}</Title>
        </Body>
        <Right style={styles.flex}/>
      </Header>
    );
  }
}


