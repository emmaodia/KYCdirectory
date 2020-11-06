import React from 'react';
import { Card, Text } from '@ui-kitten/components';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {  faUser, faBarcode, faWallet, faCoins } from '@fortawesome/free-solid-svg-icons'

const DashboardScreen = props =>{
  return (
    <View style={styles.container}>
      {/* <TouchableOpacity onPress={() => {props.navigation.navigate('Login')}}> */}
        {/* <Text>Dashboard</Text> */}
      {/* </TouchableOpacity> */}
      
      <Card style={{ height: '20%', backgroundColor: 'rgba(98, 52, 195, 0.4)',  borderColor: 'rgba(98, 52, 195, 0.4)'}}>
        <View style={styles.iconbg}>
          <FontAwesomeIcon icon={ faBarcode } style={{color: '#222222', width: 23, height: 23}} />
        </View>
        <TouchableOpacity onPress={() => {
              props.navigation.navigate('AcceptPayment')
          }}>
        <Text style={styles.headertext}>
          House Of Assembly
        </Text>
        
        <Text style={styles.text}>
        Senators and House of Representatives
        </Text>
        </TouchableOpacity>
      </Card>
      
      <Card style={{ height: '20%', backgroundColor: 'rgba(0, 191, 111, 0.4)',  borderColor: 'rgba(0, 191, 111, 0.4)'}}>
        <View style={styles.iconbg}>
            <FontAwesomeIcon icon={ faWallet } style={{color: '#222222', width: 23, height: 23}} />
        </View>
        <TouchableOpacity onPress={() => {
              props.navigation.navigate('Wallet')
          }}>
        <Text style={styles.headertext}>
            Ministries and MDAs
          </Text>
          <Text style={styles.text}>
          Federal Ministries and Government Agencies
        </Text>
        </TouchableOpacity>
      </Card>
      <Card style={{ height: '20%', backgroundColor: 'rgba(0, 140, 255, 0.4)',  borderColor: 'rgba(0, 140, 255, 0.4)'}}>
        <View style={styles.iconbg}>
            <FontAwesomeIcon icon={ faCoins } style={{color: '#222222', width: 23, height: 23}} />
        </View>
        <Text style={styles.headertext}>
            Uniform Services
          </Text>
          <Text style={styles.text}>
          Armed Forces and Uniformed Services
        </Text>
      </Card>
      <Card style={styles.card}>
        <View style={styles.iconbg}>
            <FontAwesomeIcon icon={ faUser } style={{color: '#222222', width: 23, height: 23}} />
        </View>
        <TouchableOpacity onPress={() => {
              props.navigation.navigate('Profile')
          }}>
        <Text style={styles.headertext}>
            Judiciary
          </Text>
          <Text style={styles.text}>
          Federal and State Courts
        </Text>
        </TouchableOpacity>
      </Card>
      <Card style={{ height: '20%',  backgroundColor: 'rgba(240, 84, 72, 0.4)', borderColor: 'rgba(240, 84, 72, 0.4)'}}>
        <View style={styles.iconbg}>
            <FontAwesomeIcon icon={ faUser } style={{color: '#222222', width: 23, height: 23}} />
        </View>
        <TouchableOpacity onPress={() => {
              props.navigation.navigate('Profile')
          }}>
        <Text style={styles.headertext}>
            States
          </Text>
          <Text style={styles.text}>
          All information on each State 
        </Text>
        </TouchableOpacity>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '10%'
  },
  card: {
    // marginTop: '1%', 
    height: '20%', 
    backgroundColor: '#fff',  
    borderColor: '#fff'
  },
  iconbg: {
    width: 50, 
    height: 50, 
    borderRadius: 50 / 2, 
    borderWidth: 2, 
    borderColor: '#fff', 
    backgroundColor: '#fff', 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom: 20
  },
  headertext: {
    color: 'black', 
    fontSize: 18, 
    fontFamily: 'gilroy-medium', 
    lineHeight: 21
  },
  text: {
    color: '#4F4F4F', 
    fontSize: 16, 
    fontFamily: 'gilroy-regular', 
    lineHeight: 20
  }
});

export default DashboardScreen;