'use strict';
import React from 'react';
import { AppRegistry, View } from 'react-native';


class App extends React.Component {
  render() {
   return (

             <View style={styles.container}>
         <Text style={styles.text}>
           Helllo World
         </Text>

     </View>
   );
 }
}
const styles = StyleSheet.create({

});

container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#374046'
  },
  text: {
    color: '#ff0000',
    fontSize:30
  },


export default App;
