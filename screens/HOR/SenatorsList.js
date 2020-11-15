import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const HoAList = props => {
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => props.navigation.navigate('Dashboard')}>
            <Text>List of House of Senators Screen!</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HoAList;
