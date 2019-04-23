
import React, {Component} from 'react';
import {Text} from 'react-native';
import { Container, Button, Content, View } from 'native-base';
import Header from "../components/header"
import { StyleSheet } from 'react-native';


const style = StyleSheet.create({
  box: {flex:1, flexDirection:"column", marginBottom:12},
  boxPadding:{paddingVertical:5},
  labelText:{color:"#b0b0b0", fontSize:16},
  valueText:{color:"#5192da", fontSize:18, fontWeight:"bold"}
});

export default class ConfirmTransfer extends Component{
  render() {
    return (
      <Container>
      <Header title={"confirmation transfer"}/>
      <Content padder>
            <Text style={{fontSize:20, fontWeight:"bold", marginBottom:10, marginTop:10}}>Please Transfer to custodian bank</Text>
            <View style={style.box}>
                <View style={style.boxPadding}>
                  <Text style={style.labelText}>
                    Bank Name
                  </Text>
                </View>
                <View style={style.boxPadding}>
                  <Text style={style.valueText}>
                   BCA
                  </Text>
                </View>
            </View>
            <View style={style.box}>
                <View style={style.boxPadding}>
                  <Text style={style.labelText}>
                    Account Holder Name
                  </Text>
                </View>
                <View style={style.boxPadding}>
                  <Text style={style.valueText}>
                   HPAM ULTIMA EKSITAS 1
                  </Text>
                </View>
            </View>
            <View style={style.box}>
                <View style={style.boxPadding}>
                  <Text style={style.labelText}>
                    Account Number
                  </Text>
                </View>
                <View style={style.boxPadding}>
                  <Text style={style.valueText}>
                  458 259 8227
                  </Text>
                </View>
            </View>
            <View style={style.box}>
                <View style={style.boxPadding}>
                  <Text style={style.labelText}>
                    Investing Number
                  </Text>
                </View>
                <View style={style.boxPadding}>
                  <Text style={style.valueText}>
                   Rp 20.000.000
                  </Text>
                </View>
            </View>
            <View style={style.box}>
            <Button block style={{backgroundColor:"#5192da"}}>
              <Text style={{color:"#fff"}}>SEND PAYMENT VERIFICATION</Text>
            </Button>
            </View>
      </Content>
    </Container>
    );
  }
}


