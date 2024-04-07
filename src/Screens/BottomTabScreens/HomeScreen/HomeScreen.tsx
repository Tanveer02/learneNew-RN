import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function HomeScreen() {
  return (
    <View style={styles.mainStyle}>
      <Text style={styles.text}>Home-Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainStyle: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  text: {color: 'red', fontSize: 20},
});
