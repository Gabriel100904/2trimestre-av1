import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>

      </Text>
      <Image style={styles.logo} source={require('../assets/ifunny_logo.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
    
  },
  logo: {
    height: 200,
    width: 300,
    marginBottom: 100
  }
});
