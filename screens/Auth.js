import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App(props) {
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => props.navigation.navigate('Dashboard')}>
            <Text>Auth Screen!</Text>
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
