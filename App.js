import React from 'react';
import { View, Text, Image, ScrollView, TextInput ,StyleSheet} from 'react-native';
import FlatListDemo from './src/FlatListDemo';

const App = () => {
  return (
    <View>
      <Text style={styles.textStyle}>Hello React-Native</Text>

 <FlatListDemo></FlatListDemo>
    </View>
  );
}

const styles = StyleSheet.create({

  textStyle:{
    color:"green",
    
    
  }
})

export default App;