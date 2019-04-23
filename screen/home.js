
import React, {Component} from 'react';
import { View} from 'react-native';
import { Button, Text, Content, Container } from 'native-base';
import { Actions } from 'react-native-router-flux';



export default class Home extends Component{
  render() {
    return (
      <Container>
         <Content padder>
            <View style={{display:"flex", flexDirection:"column"}}>
              <Button
              block
              style={{marginBottom:10, marginTop:10}}
              onPress={()=>{
                Actions.ConfirmTransfer();
              }}
              success><Text> Confirm Transfer </Text></Button>
            <Button
              block
              onPress={()=>{
              Actions.OrderList();
              }}
              info ><Text>Invest</Text></Button>
            </View>  
         </Content>
      </Container>
    );
  }
}

