import React from 'react';
import { View, Text, Image, ScrollView, TextInput ,StyleSheet} from 'react-native';

const App = () => {
  return (
    <View>
      <Text style={styles.textStyle}>Hello React-Native</Text>
    <Text>Hello React-Native</Text>
    <Text>Hello React-Native</Text>
    <Text>Hello React-Native</Text>
    </View>
  );
}

const styles = StyleSheet.create({

  textStyle:{
    color:"green",
  }
})

export default App;